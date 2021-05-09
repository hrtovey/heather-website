<template>
  <Layout>

    <section class="page-section">
      <div class="grid align-vertically">
        <div class="grid__item medium--7">
          <h1 class="hero-headline">Hello!<br> I'm Heather Tovey.</h1>
          <p>I'm a Front-End Developer based in Calgary, Canada 🇨🇦. Here, you'll find beginner and intermediate resources covering design and development with a focus on Squarespace and Shopify.</p>
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
      <div class="cards-list grid align-stretch">
        <div class="card grid__item medium--6 large--4 card--image">
          <a class="card__link" href="https://getdesignresources.com/">
            <div class="card__image">
              <g-image src="~/assets/images/getdesignresourcespattern.png" quality='100' />
            </div>
            <div class="card__info">
              <h3 class="card__title">Get Design Resources</h3>
              <div class="card__description">
                <p>A curated collection of 100+ useful resources for web design and development. Maintained by me. 🙂</p>
              </div>
            </div>
          </a>
        </div>
        <div class="card grid__item medium--6 large--4 card--image">
          <g-link class="card__link" to="/squarespace-id-finder">
            <div class="card__image">
              <g-image src="~/assets/images/sqs-extension.png" />
            </div>
            <div class="card__info">
              <h3 class="card__title">Squarespace ID Finder</h3>
              <div class="card__description">
                <p>Quickly and easily select Squarespace collection, section, index, and block ids. Available on Chrome, Firefox, and as a bookmarklet.</p>
              </div>
            </div>
          </g-link>
        </div>
        <div class="card grid__item medium--6 large--4 card--image">
          <g-link class="card__link" to="/product/squarespace-blog-footer-plugin/">
            <div class="card__image">
              <g-image src="~/assets/images/blog-footer-plugin-1.png" />
            </div>
            <div class="card__info">
              <h3 class="card__title">Blog CTA Plugin</h3>
              <div class="card__description">
                <p>A Squarespace plugin to add a consistent footer to the blog posts of your choice. Edit the footer in one place instead of editing every post.</p>
              </div>
            </div>
          </g-link>
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
                <p class="card__date card__meta-item">{{ post.node.date }}</p>
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
					date(format: "MMM YYYY")
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