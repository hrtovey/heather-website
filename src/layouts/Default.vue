<template>
  <div class="content-wrapper" :class="theme">
    <header role="banner" class="header">
      <nav 
      role="navigation"
      aria-label="main navigation"
      class="grid">
        <div class="grid__item navigation">
          <div class="logo">
            <g-link to="/" alt="">
              <svg class="logo--mobile" width="100%" height="100%" viewBox="0 0 113 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1,0,0,1,28,-826.295)"><g transform="matrix(0.565704,0,0,0.565704,-542.874,733.67)"><g transform="matrix(176.771,0,0,176.771,893.884,285)"><path d="M0.601,-0.686L0.601,-0L0.503,-0L0.503,-0.306L0.19,-0.306L0.19,-0L0.092,-0L0.092,-0.686L0.19,-0.686L0.19,-0.395L0.503,-0.395L0.503,-0.686L0.601,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1011.61,285)"><path d="M0.553,-0.686L0.553,-0.597L0.338,-0.597L0.338,-0L0.24,-0L0.24,-0.597L0.025,-0.597L0.025,-0.686L0.553,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g></g></g></svg>
              <svg class="logo--desktop" width="100%" height="100%" viewBox="0 0 743 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1,0,0,1,4.61853e-14,-478.295)"><g class="logo__letters" transform="matrix(0.565704,0,0,0.565704,-514.874,386.67)"><g class="logo__letter--important" transform="matrix(176.771,0,0,176.771,893.884,285)"><path d="M0.601,-0.686L0.601,-0L0.503,-0L0.503,-0.306L0.19,-0.306L0.19,-0L0.092,-0L0.092,-0.686L0.19,-0.686L0.19,-0.395L0.503,-0.395L0.503,-0.686L0.601,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1011.61,285)"><path d="M0.542,-0.686L0.529,-0.597L0.19,-0.597L0.19,-0.395L0.497,-0.395L0.497,-0.306L0.19,-0.306L0.19,-0.089L0.535,-0.089L0.549,-0L0.092,-0L0.092,-0.686L0.542,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1111.67,285)"><path d="M0.38,-0.686L0.648,-0L0.542,-0L0.484,-0.149L0.156,-0.149L0.099,-0L0.004,-0L0.272,-0.686L0.38,-0.686ZM0.324,-0.568L0.318,-0.568L0.191,-0.238L0.45,-0.238L0.324,-0.568Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g class="logo__letter--important" transform="matrix(176.771,0,0,176.771,1222.15,285)"><path d="M0.553,-0.686L0.553,-0.597L0.338,-0.597L0.338,-0L0.24,-0L0.24,-0.597L0.025,-0.597L0.025,-0.686L0.553,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1319.55,285)"><path d="M0.601,-0.686L0.601,-0L0.503,-0L0.503,-0.306L0.19,-0.306L0.19,-0L0.092,-0L0.092,-0.686L0.19,-0.686L0.19,-0.395L0.503,-0.395L0.503,-0.686L0.601,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1437.28,285)"><path d="M0.542,-0.686L0.529,-0.597L0.19,-0.597L0.19,-0.395L0.497,-0.395L0.497,-0.306L0.19,-0.306L0.19,-0.089L0.535,-0.089L0.549,-0L0.092,-0L0.092,-0.686L0.542,-0.686Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1537.33,285)"><path d="M0.384,-0.686C0.445,-0.686 0.495,-0.672 0.534,-0.643C0.573,-0.614 0.592,-0.575 0.592,-0.525C0.592,-0.48 0.58,-0.442 0.557,-0.411C0.533,-0.38 0.504,-0.361 0.469,-0.354L0.469,-0.349C0.501,-0.336 0.527,-0.314 0.548,-0.283C0.569,-0.252 0.579,-0.214 0.579,-0.17C0.579,-0.133 0.581,-0.106 0.585,-0.087C0.589,-0.068 0.594,-0.055 0.601,-0.048C0.608,-0.041 0.617,-0.035 0.63,-0.031L0.63,-0.003C0.615,0.003 0.6,0.006 0.583,0.006C0.551,0.006 0.526,-0.004 0.508,-0.023C0.49,-0.042 0.481,-0.077 0.481,-0.13C0.481,-0.184 0.47,-0.226 0.448,-0.257C0.425,-0.287 0.397,-0.302 0.364,-0.302L0.19,-0.302L0.19,-0L0.092,-0L0.092,-0.686L0.384,-0.686ZM0.19,-0.597L0.19,-0.391L0.385,-0.391C0.414,-0.391 0.439,-0.401 0.461,-0.42C0.483,-0.439 0.494,-0.463 0.494,-0.492L0.494,-0.496C0.494,-0.525 0.484,-0.55 0.464,-0.569C0.444,-0.588 0.418,-0.597 0.385,-0.597L0.19,-0.597Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1687.59,285)"><path d="M0.355,-0.562L0.355,-0L0.202,-0L0.202,-0.562L0.007,-0.562L0.007,-0.686L0.549,-0.686L0.549,-0.562L0.355,-0.562Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1781.27,285)"><path d="M0.66,-0.294C0.66,-0.231 0.646,-0.177 0.619,-0.131C0.592,-0.085 0.555,-0.05 0.508,-0.026C0.462,-0.002 0.411,0.01 0.354,0.01C0.297,0.01 0.246,-0.002 0.2,-0.026C0.153,-0.05 0.116,-0.085 0.089,-0.131C0.062,-0.177 0.048,-0.231 0.048,-0.294L0.048,-0.392C0.048,-0.455 0.062,-0.509 0.089,-0.555C0.116,-0.601 0.153,-0.636 0.2,-0.66C0.246,-0.684 0.297,-0.696 0.354,-0.696C0.411,-0.696 0.462,-0.684 0.508,-0.66C0.555,-0.636 0.592,-0.601 0.619,-0.555C0.646,-0.509 0.66,-0.455 0.66,-0.392L0.66,-0.294ZM0.498,-0.414C0.498,-0.465 0.485,-0.504 0.458,-0.532C0.431,-0.559 0.397,-0.573 0.354,-0.573C0.311,-0.573 0.277,-0.559 0.25,-0.532C0.223,-0.504 0.21,-0.465 0.21,-0.414L0.21,-0.272C0.21,-0.221 0.223,-0.182 0.25,-0.155C0.277,-0.127 0.311,-0.113 0.354,-0.113C0.397,-0.113 0.431,-0.127 0.458,-0.155C0.485,-0.182 0.498,-0.221 0.498,-0.272L0.498,-0.414Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,1901.65,285)"><path d="M0.33,-0.196L0.487,-0.686L0.635,-0.686L0.409,-0L0.232,-0L0.007,-0.686L0.169,-0.686L0.325,-0.196L0.33,-0.196Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,2010.55,285)"><path d="M0.072,-0L0.072,-0.686L0.555,-0.686L0.538,-0.563L0.224,-0.563L0.224,-0.413L0.517,-0.413L0.517,-0.29L0.224,-0.29L0.224,-0.123L0.541,-0.123L0.558,-0L0.072,-0Z" style="fill:currentColor;fill-rule:nonzero;"/></g><g transform="matrix(176.771,0,0,176.771,2111.48,285)"><path d="M0.396,-0.263L0.396,-0L0.242,-0L0.242,-0.263L0.007,-0.686L0.181,-0.686L0.324,-0.414L0.329,-0.414L0.472,-0.686L0.63,-0.686L0.396,-0.263Z" style="fill:currentColor;fill-rule:nonzero;"/></g></g></g></svg>
            </g-link>        
          </div>

          <ul
            class="menu primary-menu"
          >
            <li class="menu__item">
              <g-link to="/blog/" class="menu__link">Blog</g-link>
            </li>
            <li class="menu__item">
              <g-link to="/about/" class="menu__link">About</g-link>
            </li>
            <li class="menu__item">
              <g-link to="/contact/" class="menu__link">Contact</g-link>
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
            <li class="menu__item menu__item--container">
              <button aria-label="menu" @click="toggle" class="menu__open menu__action">
                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;fill:currentColor;"><g><path d="M23.108,17.671L0.935,17.671C0.425,17.671 0.042,18.096 0.042,18.563C0.042,21.154 2.124,23.235 4.715,23.235L19.327,23.235C21.919,23.235 24,21.154 24,18.563C24,18.096 23.618,17.671 23.108,17.671ZM19.327,21.451L4.715,21.451C3.441,21.451 2.379,20.644 1.996,19.497L22.046,19.497C21.664,20.644 20.602,21.451 19.327,21.451Z" style="fill-rule:nonzero;"/><path d="M0.935,12.573L23.065,12.573C23.575,12.573 23.958,12.149 23.958,11.681C23.958,5.65 19.073,0.765 13.041,0.765L10.917,0.765C4.885,0.765 0,5.65 0,11.681C0.042,12.191 0.425,12.573 0.935,12.573ZM10.959,2.591L13.083,2.591C17.798,2.591 21.664,6.202 22.131,10.789L1.912,10.789C2.379,6.202 6.244,2.591 10.959,2.591Z" style="fill-rule:nonzero;"/><path d="M2.081,14.188C1.572,14.188 1.189,14.612 1.189,15.08C1.189,15.589 1.614,15.972 2.081,15.972L21.961,15.972C22.471,15.972 22.853,15.547 22.853,15.08C22.853,14.57 22.428,14.188 21.961,14.188L2.081,14.188Z" style="fill-rule:nonzero;"/></g></svg>
              </button>
              <span class="tooltip">Menu</span>
            </li>
          </ul>
        </div>
      </nav>
      <div
        class="mobile-menu__container"
        :class="isOpen ? 'menu--open': 'menu--closed'"
      >
        <div class="menu__item menu__item--close">
          <button aria-label="menu" @click="toggle" class="menu__close menu__action">
            <svg width="24" height="24" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1,0,0,1,-35.7637,-39.7746)"><path d="M47.845,53.971L36.201,65.606C35.618,66.187 35.618,67.145 36.2,67.727C36.781,68.309 37.739,68.31 38.321,67.728L49.966,56.093L61.606,67.733C62.188,68.315 63.145,68.315 63.727,67.733C64.309,67.151 64.309,66.193 63.727,65.612L52.088,53.972L63.732,42.338C64.314,41.756 64.315,40.799 63.733,40.217C63.152,39.635 62.194,39.634 61.612,40.216L49.967,51.851L38.327,40.211C37.745,39.629 36.787,39.629 36.205,40.211C35.624,40.793 35.624,41.75 36.205,42.332L47.845,53.971Z" style="fill:currentColor;fill-rule:nonzero;"/></g></svg>
          </button>
        </div>
        <ul class="menu mobile-menu">
          <li class="mobile-menu__item">
            <a v-if="$route.path === '/'" href="/blog/" class="menu__link">Blog</a>
            <g-link v-else to="/blog/" class="menu__link">Blog</g-link>
          </li>
          <li class="mobile-menu__item">
            <a v-if="$route.path === '/'" href="/about/" class="menu__link">About</a>
            <g-link v-else to="/about/" class="menu__link">About</g-link>
          </li>
          <li class="mobile-menu__item">
            <a v-if="$route.path === '/'" href="/contact/" class="menu__link">Contact</a>
            <g-link v-else to="/contact/" class="menu__link">Contact</g-link>
          </li>
        </ul>
      </div>
    </header>

    <transition name="fade" appear>
      <main role="main">
        <slot/>
      </main>
    </transition>

    <footer role="contentinfo" class="footer">
      <div class="footer__container footer__primary">
        <div class="grid">
          <div class="grid__item">
            <nav>
              <ul>
                <li><g-link to="/" class="footer__link">Home</g-link></li>
                <li><g-link to="/blog/" class="footer__link">Blog</g-link></li>
                <li><g-link to="/about/" class="footer__link">About</g-link></li>
                <li><g-link to="/contact/" class="footer__link">Contact</g-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
        <div class="footer__secondary">
          <div class="grid">
            <p class="small-text footer__copyright grid__item">© Heather Tovey 2018–{{ new Date().getFullYear() }}. All rights reserved.</p>
            <p class="small-text footer__copyright grid__item">
              <g-link to="/privacy-policy/" class="footer__link">Privacy Policy</g-link> | 
              <g-link to="/terms-of-use/" class="footer__link">Terms of Use</g-link>
            </p>
          </div>
        </div>
    </footer>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
      ]
    }
  },
  components: {
    SearchInput,
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light';
    this.linkList = document.querySelectorAll('a[href^="http"]:not([href^="https://www.heathertovey.com"]');
    if (this.linkList) {
      this.linkList.forEach(link => {
        link.addEventListener('click', this.reportToMicro);
      })
    }
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
    },
    reportToMicro(event) {
      if (typeof pa !== "undefined") {
        pa.track({name: 'Outbound', value: event.target.href})
      }
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart 
    },
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

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>