<template>
  <div class="content-wrapper" :class="theme">
    <main role="main">
      <slot/>
    </main>
  </div>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  components: {
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      theme: '',
    }
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme
    }
  },
  computed: {
    themeName () {
      return this.theme === "theme-light" ? "dark" : "light"
    }
  }
}
</script>