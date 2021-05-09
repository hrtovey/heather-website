<template>
  <Layout>
    <section class="page-section">
      <div class="grid">
        <div class="grid__item large--6">
          <div class="product__image">
            <g-image
                  :src="product.mainImage[0].src"
                  :alt="product.mainImage[0].altText || product.title" />
          </div>
        </div>
        <div class="grid__item large--6">

          <h1 class="">{{ product.title }}</h1>
          <p v-if="currentVariant" class="">
              {{ formatPrice(currentVariant.price.amount, currentVariant.price.currencyCode) }}
          </p>
          <div class="" v-html="product.descriptionHtml" />

          <div
            v-for="option in productOptions"
            :key="option.id"
            class="">
            <div class="">
              <label
                :for="option.name"
                class="">
                {{ option.name }}
                <div class="">
                  <select
                    :id="option.name"
                    v-model="selectedOptions[option.name]">
                    <option
                      v-for="value in option.values"
                      :key="value"
                      :value="value">
                      {{ value }}
                    </option>
                  </select>
                </div>
              </label>
            </div>
          </div>
          <br>

          <notifications />

          <div class="">
            <div class="">
              <input
                id="quantity"
                v-model.number="quantity"
                class="hidden"
                type="number"
                min="1">
            </div>
            <div class="">
              <button @click="addToCart"
                @keyup.enter="addToCart" 
                class="button">
                Add To Cart
              </button>
            </div>
          </div>
          <br>
        </div>
      </div>
    </section>
    <section class="page-section" v-if="product.additionalImages.length > 0">
      <ClientOnly>
        <silent-box :gallery="formatGalleryResponse(product.additionalImages)" :lazy-loading="true" class="grid silentbox-gallery"></silent-box>
      </ClientOnly>
    </section>
    <section class="page-section" v-if="productAdditional">
      <div class="grid">
        <div class="grid__item" v-html="productAdditional" />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.shopifyInfo.title,
      bodyAttrs: {
        class: 'page--product'
      }
    }
  },
  data: () => ({
    selectedOptions: {},
    quantity: 1
  }),
  computed: {
    product () { return this.$page.shopifyInfo },
    productOptions () { return this.product.options.filter(({ name }) => name !== 'Title') },
    currentVariant () {
      const matchedVariant = this.product.variants.find(variant =>
        variant.selectedOptions.every(({ name, value }) => value === this.selectedOptions[ name ])
      )
      return matchedVariant
    },
    productAdditional () { return this.$page.customInfo.content }
  },
  watch: {
    $route (to, from) {
      const [firstVariant] = this.product.variants
      this.selectedOptions = firstVariant.selectedOptions.reduce((options, { name, value }) => ({ [ name ]: value, ...options }), {})
    }
  },
  mounted () {
    const [firstVariant] = this.product.variants
    this.selectedOptions = firstVariant.selectedOptions.reduce((options, { name, value }) => ({ [ name ]: value, ...options }), {})
  },
  methods: {
    async addToCart () {
      const variant = this.currentVariant
      const payload = {
        qty: this.quantity,
        productTitle: this.product.title,
        variantTitle: variant.title,
        variantId: variant.id,
        price: variant.price,
        image: variant.image
      }
      await this.$store.commit('addToCart', payload)
      this.$notify({
        title: `Added ${payload.productTitle} to Cart`,
        type: 'primary'
      })
    },
    formatPrice (amount, currencyCode) {
      // Regex to remove decimal and potential trailing currency code since we're adding our own and I just wanted to play it super duper safe
      var decimalRemovalRegex = /\D00(?=\D*$)/;

      if ( parseInt(amount) === 0) {
        return "Free";
      } else {
        // Formatting comes directly from Shopify example
        return new Intl.NumberFormat('en-CA', {
          style: 'currency',
          currency: currencyCode
        }).format(amount).replace(decimalRemovalRegex, '') + " " + currencyCode;
      }
    },
    formatGalleryResponse (additionalImages) {
      return additionalImages.map((obj) => {
        var newSrc = obj.downloadedSrc;
        newSrc.thumbnail = obj.thumbnail.src;
        return newSrc;
      })
    }
  }
}
</script>

<page-query>
query Product ($id: ID!) {
  shopifyInfo: shopifyProduct (id: $id) {
    id
    descriptionHtml
    title
    tags
    mainImage: images (limit: 1) {
      id
      altText
      src: downloadedSrc
    }
    additionalImages: images (skip: 1) {
      downloadedSrc
      thumbnail: downloadedSrc(width: 300)
    }
    options {
      id
      name
      values
    }
    variants {
      id
      title
      price {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
      image {
        id
        altText
        thumbnail: transformedSrc(maxWidth: 400, maxHeight: 400, crop: CENTER)
      }
    }
  }
  customInfo: productsInfo (id: $id) {
    id
    content
  }
}
</page-query>
