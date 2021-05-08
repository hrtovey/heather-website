<template>
  <Layout>
    <div class="grid">
      <div class="grid__item">
        <table v-if="cart.length" class="cart">
          <thead>
            <tr>
              <th />
              <th class="">Product</th>
              <th class="">Quantity</th>
              <th class="">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in cart"
              :key="item.variantId">
              <td>
                <g-image
                  :src="item.image.thumbnail"
                  :alt="item.image.altText || item.title" />
              </td>
              <td>
                {{ item.productTitle }}
                {{ item.variantTitle !== 'Default Title' ? `- ${item.variantTitle}` : '' }}
                
                <button
                  class="remove"
                  @click="removeItem(item.variantId)"
                  @keyup="removeItem(item.variantId)">
                  Remove
                </button>
              </td>
              <td>{{ item.qty }}</td>
              <td>{{ totalPrice(item) }} CAD</td>
            </tr>
          </tbody>
        </table>
        <div v-if="cart.length" class="cart__total">
          <p>Cart Total: {{ cartTotal }} CAD</p>
        </div>
      </div>
      <div class="grid__item">
        <form v-if="cart.length" @submit.prevent="checkout" class="cart__checkout">
          <button type="submit"
            :class="{'is-loading': isLoading}"
            class="button">
            Checkout
          </button>
        </form>
        <div
          v-else
          class="">
          <p>To checkout, add some items to cart.</p>
          <br>
          <g-link
            to="/shop"
            class="button is-primary is-outlined">
            Browse
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import currency from 'currency.js'
import gql from 'graphql-tag'
export default {
  metaInfo: {
    title: 'Your Cart',
      bodyAttrs: {
        class: 'page--cart'
      }
  },
  data: () => ({ isLoading: false }),
  computed: {
    cart () { return this.$store.state.cart },
    cartTotal () {
      const total = this.cart.reduce((total, item) => total.add(currency(item.price.amount).multiply(item.qty)), currency(0, { formatWithSymbol: true, symbol: '$' }))
      return total.format()
    }
  },
  methods: {
    totalPrice ({ qty, price }) {
      return currency(price.amount, { formatWithSymbol: true, symbol: '$' }).multiply(qty).format()
    },
    async removeItem (itemId) {
      await this.$store.commit('removeFromCart', itemId)
      this.$notify({
        title: 'Item removed from cart',
        type: 'primary'
      })
    },
    async checkout () {
      if (!this.cart.length) return alert('No items in cart')
      const lineItems = this.cart.map(item => ({ quantity: item.qty, variantId: item.variantId }))

      const checkoutInput = { lineItems }

      try {
        this.isLoading = true
        const { data: { checkoutCreate } } = await this.$apollo.mutate({
          mutation: gql`mutation checkoutCreate($input: CheckoutCreateInput!) {
            checkoutCreate(input: $input) {
              checkout {
                id
                webUrl
              }
              checkoutUserErrors {
                code
                field
                message
              }
            }
          }
          `,
          variables: { input: checkoutInput }
        })
        if (checkoutCreate.checkoutUserErrors.length) throw new Error(checkoutCreate.checkoutUserErrors[ 0 ].message)

        window.location = checkoutCreate.checkout.webUrl
      } catch (error) {
        this.isLoading = false
        console.error(error)
        this.$notify({
          title: error,
          type: 'danger',
          message: 'Something went wrong - please try again.'
        })
      }
    }
  }
}
</script>