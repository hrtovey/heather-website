<template>
  <Layout>
    <section>
      <div class="grid">
        <div class="grid__item">
          <h1>Digital Downloads</h1>
          <p>Free and paid resources to help you level up your website.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid justify-start ">
        <div
          v-for="({ node: product }) in products"
          :key="product.id"
          class="card grid__item medium--6 large--4 card--image">
          <g-link class="card__link" :to="`product/${product.handle}`">
            <div class="card__image">
              <img
                :src="product.images[0].src"
                :alt="product.images[0].altText || product.title">
            </div>
            <div class="card__info">
              <h3 class="card__title">{{ product.title }}</h3>
              <div class="card__price">{{ formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode) }}</div>
            </div>
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Time to shop!',
    bodyAttrs: {
      class: 'page--shop'
    },
  },
  methods: {
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
    }
  },
  computed: {
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    products () { return this.$page.allShopifyProduct.edges }
  }
}
</script>

<page-query>
query ShopifyProducts {
  allShopifyProduct {
    edges {
      node {
        id
        title
        handle
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images (limit: 1) {
          id
          altText
          src: transformedSrc (maxWidth: 400, maxHeight: 400, crop: CENTER)
        }
      }
    }
  }
}
</page-query>