<template>
  <Layout>
    <section>
      <div class="grid">
        <div class="grid__item medium--6">
          <div class="">
            <g-image
                  :src="product.images[0].src"
                  :alt="product.images[0].altText || product.title" />
          </div>
        </div>
        <div class="grid__item medium--6">

          <h1 class="">{{ product.title }}</h1>
          <div v-if="currentVariant" class="">
            <g-link
              class="">
              {{ currentVariant.price.amount }}
            </g-link>
          </div>
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
              <input type="button"
                value="+"
              >
              <input
                id="quantity"
                v-model.number="quantity"
                class="custom-number-input"
                type="number"
                min="1">
              <input type="button"
                value="-"
              >
            </div>
            <div class="">
              <button @click="addToCart"
                @keyup.enter="addToCart" 
                class="">
                Add To Cart
              </button>
            </div>
          </div>
          <br>
        </div>
      </div>
    </section>
    <div class="" v-html="productAdditional.description" />
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.shopifyInfo.title
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
    productAdditional () { return this.$page.customInfo }
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
    images(limit: 4) {
      id
      altText
      src: transformedSrc(maxWidth: 600, maxHeight: 400, crop: CENTER)
      thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
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
        amount(format: true)
      }
      selectedOptions {
        name
        value
      }
      image {
        id
        altText
        thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
      }
    }
  }
  customInfo: productsInfo (id: $id) {
    id
    description
  }
}
</page-query>
