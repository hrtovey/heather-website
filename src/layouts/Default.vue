<template>
  <div class="content-wrapper" :class="theme">
    <header role="banner" class="header">
      <nav 
      role="navigation"
      aria-label="main navigation"
      class="grid">
        <div class="grid__item navigation">
          <div class="logo">
            <g-link to="/" alt=""><g-image src="~/assets/images/heather_logo.png" alt="Heather Tovey" /></g-link>        
          </div>

          <ul
            class="menu"
            :class="isOpen ? 'block': 'hidden'"
          >
            <li class="menu__item">
              <a v-if="$route.path === '/'" href="/blog/" class="menu__link">Blog</a>
              <g-link v-else to="/blog/" class="menu__link">Blog</g-link>
            </li>
            <li class="menu__item">
              <a v-if="$route.path === '/'" href="/about/" class="menu__link">About</a>
              <g-link v-else to="/about/" class="menu__link">About</g-link>
            </li>
            <li class="menu__item">
              <a v-if="$route.path === '/'" href="/shop/" class="menu__link">Shop</a>
              <g-link v-else to="/shop/" class="menu__link">Shop</g-link>
            </li>
          </ul>
          <ul class="menu secondary-menu">
            <li class="menu__item">
              <theme-switcher class="menu__action" :theme="theme" @themeChanged="updateTheme" />
              <span class="tooltip">Switch to {{ themeName }} theme</span>
            </li>
            <!-- <li class="menu__item">
              <search-input />
            </li> -->
            <li class="menu__item">
                <g-link
                  to="/cart"
                  class="cart-icon menu__action">
                  <svg height='24' width='24'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" fill="none" x="0px" y="0px"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 23.5C28.0523 23.5 28.5 23.0523 28.5 22.5C28.5 21.9477 28.0523 21.5 27.5 21.5L10.2592 21.5L9.56096 18.9981C9.59602 18.9994 9.6312 19 9.6665 19H26.3335C27.6996 19 28.8932 18.077 29.237 16.7549L31.9678 6.25161C32.0457 5.95199 31.9805 5.63318 31.7911 5.38827C31.6017 5.14336 31.3096 4.99998 31 4.99998H5.65449L4.4632 0.731201C4.34257 0.298954 3.94877 -7.53807e-08 3.50001 0L1 1.4748e-07C0.447715 2.05309e-07 -1.26274e-06 0.447716 0 1C-5.71899e-07 1.55229 0.447714 2 0.999999 2H2.74086L5.46126 11.7481L6.76303 16.7549C6.83162 17.0187 6.93403 17.2666 7.0649 17.4944L8.53681 22.7688C8.65744 23.201 9.05125 23.5 9.50001 23.5H9.87732C9.32836 24.1848 9 25.054 9 26C9 28.2091 10.7909 30 13 30C15.2091 30 17 28.2091 17 26C17 25.054 16.6716 24.1848 16.1227 23.5H20.8773C20.3284 24.1848 20 25.054 20 26C20 28.2091 21.7909 30 24 30C26.2091 30 28 28.2091 28 26C28 25.054 27.6716 24.1848 27.1227 23.5H27.5ZM7.39242 11.2276L6.29325 6.99998H29.7068L27.3013 16.2516C27.1867 16.6923 26.7889 17 26.3335 17H9.6665C9.36613 17 9.09079 16.8661 8.90525 16.6485L7.39242 11.2276ZM13 24C11.8954 24 11 24.8954 11 26C11 27.1045 11.8954 28 13 28C14.1046 28 15 27.1045 15 26C15 24.8954 14.1046 24 13 24ZM22 26C22 24.8954 22.8954 24 24 24C25.1046 24 26 24.8954 26 26C26 27.1045 25.1046 28 24 28C22.8954 28 22 27.1045 22 26Z" fill="currentColor"></path></svg><span class="cart-quantity">{{ cartLength }}</span>
                </g-link>
                <span class="tooltip">Go shopping!</span>
            </li>
            <li class="menu__item">
              <button aria-label="menu" @click="toggle" class="menu__open menu__action">
                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;fill:currentColor;"><g><path d="M23.108,17.671L0.935,17.671C0.425,17.671 0.042,18.096 0.042,18.563C0.042,21.154 2.124,23.235 4.715,23.235L19.327,23.235C21.919,23.235 24,21.154 24,18.563C24,18.096 23.618,17.671 23.108,17.671ZM19.327,21.451L4.715,21.451C3.441,21.451 2.379,20.644 1.996,19.497L22.046,19.497C21.664,20.644 20.602,21.451 19.327,21.451Z" style="fill-rule:nonzero;"/><path d="M0.935,12.573L23.065,12.573C23.575,12.573 23.958,12.149 23.958,11.681C23.958,5.65 19.073,0.765 13.041,0.765L10.917,0.765C4.885,0.765 0,5.65 0,11.681C0.042,12.191 0.425,12.573 0.935,12.573ZM10.959,2.591L13.083,2.591C17.798,2.591 21.664,6.202 22.131,10.789L1.912,10.789C2.379,6.202 6.244,2.591 10.959,2.591Z" style="fill-rule:nonzero;"/><path d="M2.081,14.188C1.572,14.188 1.189,14.612 1.189,15.08C1.189,15.589 1.614,15.972 2.081,15.972L21.961,15.972C22.471,15.972 22.853,15.547 22.853,15.08C22.853,14.57 22.428,14.188 21.961,14.188L2.081,14.188Z" style="fill-rule:nonzero;"/></g></svg>
              </button>
              <span class="tooltip">Menu</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main">
      <slot/>
    </main>

    <footer role="contentinfo" class="footer">
      <div class="footer__container footer__primary">
        <div class="grid">
          <div class="grid__item">
            <p>Thank you for reading!</p>
          </div>
        </div>
      </div>
        <div class="footer__secondary">
          <div class="grid">
            <p class="small-text footer__copyright grid__item">Copyright {{ new Date().getFullYear() }}. All rights reserved.</p>
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  components: {
    SearchInput,
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
      searchTerm: ''
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  },
  computed: {
    cart () { return this.$store.state.cart },
    cartLength () { 
      return this.$store.state.cart.reduce((acc, item) => {
        return acc + item.qty
      }, 0);
    },
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5, suggest: true })
    },
    themeName () {
      return this.theme === "theme-light" ? "dark" : "light"
    }
  },
  watch: {
    $route (to, from) {
      this.searchTerm = ''
    }
  }
}
</script>