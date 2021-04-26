<template>
  <Layout>
      <plugin-config />
  </Layout>
</template>

<script>
import Layout from '~/layouts/Blank.vue'
import PluginConfig from '../components/PluginConfig'

export default {
  components: {
    Layout,
    PluginConfig
  },
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>