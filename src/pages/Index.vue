<template>
  <Layout>

    <section class="page-section hug--top">
      <div class="grid">
        <div class="grid__item medium--7">
          <h1 class="hero-headline">Hello!<br> I'm Heather Tovey.</h1>
          <p>I'm a Front-End Developer based in Calgary, Canada. Here, you'll find beginner and intermediate resources covering design and development with a focus on Squarespace and Shopify.</p>
        </div>
        <div class="grid__item medium--5">
          <div class="headshot">
            <g-image src="~/assets/images/headshot-transparent.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="grid">
        <h2 class="grid__item">Useful Resources</h2>
      </div>
      <div class="resources-list grid">
        <div class="resource grid__item medium--4">
          <a class="resource__link" href="https://getdesignresources.com/">
            <div class="resource__image">
              <g-image src="~/assets/images/getdesignresourcespattern.png" quality='100' />
            </div>
            <div class="resource__info">
              <h2 class="resource__title">Get Design Resources</h2>
              <div class="resource__description">
                <p>A curated collection of 100+ useful resources for web designers like you. Find platform-specific categories like Shopify and Squarespace as well as inspirational links. Maintained by me. 🙂</p>
              </div>
            </div>
          </a>
        </div>
        <div class="resource grid__item medium--4">
          <g-link class="resource__link" to="/squarespace-id-finder">
            <div class="resource__image">
              <g-image src="~/assets/images/sqs-extension.png" />
            </div>
            <div class="resource__info">
              <h2 class="resource__title">Squarespace ID Finder</h2>
              <div class="resource__description">
                <p>A cross-platform tool to quickly and easily select Squarespace collection, section, index, and block ids. Available on Chrome, Firefox, and as a cross-browser bookmarklet.</p>
              </div>
            </div>
          </g-link>
        </div>
        <div class="resource grid__item medium--4">
          <g-link class="resource__link" to="/product/squarespace-blog-footer-plugin/">
            <div class="resource__image">
              <g-image src="~/assets/images/blog-footer-plugin-1.png" />
            </div>
            <div class="resource__info">
              <h2 class="resource__title">Squarespace Blog Post Footer Plugin</h2>
              <div class="resource__description">
                <p>A Squarespace plugin to add a consistent footer to the blog posts of your choice. Edit the footer in one place instead of having to edit every post.</p>
              </div>
            </div>
          </g-link>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="grid">
        <h2 class="grid__item">Latest Articles</h2>
        <div
          v-for="post in $page.posts.edges"
          :key="post.id"
          class="post grid__item">
          <g-link
            :to="post.node.path"
          >
              <h3>{{ post.node.title }}</h3>
          </g-link>
          <p>Date: {{ post.node.date }}</p>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  computed: {
    //featuredProducts () { return this.$page.allShopifyProduct.edges }
    featuredProducts () { 
      return this.$page.allShopifyProduct.edges.filter(prod => prod.node.availableForSale === true)
    }
  },
  methods: {
		selectProduct(product) {
      this.$router.push({ path: "/product/" + product.node.handle })
    },
  }
}
</script>

<page-query>
  query {
    posts: allPost (limit: 3) {
      edges {
        node {
          id 
          title 
          path 
          date(format: "MMMM D, YYYY")
          categories
        } 
      } 
    } 
  }
</page-query>