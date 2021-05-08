<template>
  <Layout>
    <div class="grid">
      <div class="grid__iem">
        <h2>Page Not Found</h2>
        <g-image src="../../static/404.svg" alt="404 page not found"/>
      </div>
    </div>

  </Layout>
</template>

<script>
import Layout from '~/layouts/Blank.vue'

export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'Page Not Found',
      bodyAttrs: {
        class: 'page--404'
      }
  }
}
</script>