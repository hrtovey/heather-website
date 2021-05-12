// Plugins
import Vuex from 'vuex'
import VueApollo from 'vue-apollo'

//import Notifications from 'vue-notification'
import Notifications from 'vue-notification/dist/ssr'
import '~/assets/style/notification.css'

// Dependencies
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueSilentbox from 'vue-silentbox'

import 'normalize.css';
import "@fontsource/chivo/900.css";
import "@fontsource/overpass";
import "@fontsource/overpass/600.css";
import '~/assets/styles.scss';


export default function (Vue, { appOptions, router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex)
  Vue.use(VueApollo)
  Vue.use(Notifications)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueSilentbox)

  head.script.push({
    src: "https://microanalytics.io/js/script.js",
    async: true,
    defer: true,
    "data-host": "https://microanalytics.io",
    "data-dnt": "false",
    id: "ZwSg9rf6GA"
  })

  head.script.push({
    src: "https://static.codepen.io/assets/embed/ei.js",
    async: true
  })

  // Create Apollo client
  const apolloClient = new ApolloClient({
    fetch,
    uri: `https://${process.env.GRIDSOME_SHOPIFY_STOREFRONT}.myshopify.com/api/2020-07/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
    }
  })

  // Add client to vue-apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })

  // Add provider to vue app
  appOptions.apolloProvider = apolloProvider

  // Create Vuex store

  appOptions.store = new Vuex.Store({
    state: {
      cart: process.isServer ? [] : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    mutations: {
      addToCart: (state, newItem) => {
        const itemExists = state.cart.find(item => item.variantId === newItem.variantId)

        if (itemExists) itemExists.qty += newItem.qty
        else state.cart.push(newItem)

        appOptions.store.commit('saveCart');
      },
      removeFromCart: (state, itemId) => {
        const updatedCart = state.cart.filter(item => item.variantId !== itemId)
        state.cart = updatedCart

        appOptions.store.commit('saveCart');
      },
      saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    }
  })
}


