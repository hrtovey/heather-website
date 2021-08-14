<template>
  <Layout>

    <section class="page-section">
      <div class="grid align-vertically">
        <div class="grid__item medium--7">
          <h1 class="hero-headline">Hello!<br> I'm Heather Tovey.</h1>
          <p>I'm a Front-End Developer based in Calgary, Canada. Here, you'll find beginner and intermediate resources covering web development with a focus on Shopify.</p>
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
        <h2 class="grid__item">Latest Articles</h2>
      </div>
      <div class="grid align-stretch">
        <div class="card grid__item medium--6"
          v-for="post in $page.posts.edges"
          :key="post.id"
        >
          <g-link
            class="card__link grid__item"
            :to="post.node.path"
          >
            <div class="card__info">
              <div class="card__meta">
                <p class="card__category card__meta-item">{{ listCategories(post.node.categories) }}</p>
                <p class="card__time-to-read card__meta-item">{{post.node.timeToRead}} min read</p>
              </div>
              <h3 class="card__title">{{ post.node.title }}</h3>
              <p class="card__description">{{ truncateExcerpt(post.node.excerpt, 125) }}</p>
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
    title: 'Home',
    bodyAttrs: {
      class: 'page--home'
    }
  },
  methods: {
	  truncateExcerpt (ex, num) {
		  if (ex.length <= num) {
			  return ex;
		  } else {
			  return `${ex.slice(0,num)}...`;
		  }
	  },
	  listCategories (categories) {
		  var catList = categories.map((cat) => {
			  return cat.title;
		  })
		  return catList.join(', ').replace(/-/g, ' ');
	  }
  }
}
</script>

<page-query>
  query {
    posts: allPost (limit: 4) {
      edges {
        node {
					id
          slug
					title 
					path 
					excerpt
					content
					timeToRead(speed: 200)
					categories {
            title
          }
          tags {
            title
          }
        } 
      } 
    } 
  }
</page-query>