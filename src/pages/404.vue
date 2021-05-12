<template>
  <Layout>
    <div class="grid grid--404">
      <div class="grid__item large--6">
        <h1>Uh oh!</h1>
        <p>Looks like this page doesn't exist. Sorry about that!</p>
        <p>Maybe one of the following links would be helpful?</p>
        <ul>
          <li><g-link to="/" class="404__link">Home</g-link></li>
          <li><g-link to="/blog/" class="404__link">Blog</g-link></li>
          <li><g-link to="/shop/" class="404__link">Shop</g-link></li>
          <li><g-link to="/contact/" class="404__link">Contact</g-link></li>
        </ul>
      </div>
      <div class="grid__item large--6">
        <svg height='100%' width='100%'  fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path fill="currentColor" d="M20,80.938h60c3.618,0,6.562-2.944,6.562-6.562v-52.5c0-3.618-2.944-6.562-6.562-6.562H20  c-3.618,0-6.562,2.944-6.562,6.562v52.5C13.438,77.993,16.382,80.938,20,80.938z M20,17.188h60c2.585,0,4.688,2.102,4.688,4.688  v4.688H15.312v-4.688C15.312,19.29,17.415,17.188,20,17.188z M15.312,28.438h69.375v45.938c0,2.585-2.102,4.688-4.688,4.688H20  c-2.585,0-4.688-2.102-4.688-4.688V28.438z"></path><circle fill="currentColor" cx="21.875" cy="21.875" r="1.875"></circle><circle fill="currentColor" cx="29.375" cy="21.875" r="1.875"></circle><circle fill="currentColor" cx="36.875" cy="21.875" r="1.875"></circle><ellipse fill="currentColor" cx="40.625" cy="56.562" rx="1.875" ry="2.812"></ellipse><ellipse fill="currentColor" cx="59.375" cy="56.562" rx="1.875" ry="2.812"></ellipse><path fill="currentColor" d="M43.752,70.625h12.499c0.39,0,0.756-0.274,0.995-0.74c0.238-0.467,0.313-1.073,0.208-1.637  C57.403,67.963,56.088,61.25,50,61.25c-6.086,0-7.401,6.713-7.452,6.998c-0.106,0.564-0.029,1.17,0.208,1.637  C42.991,70.351,43.36,70.625,43.752,70.625z"></path></svg>
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