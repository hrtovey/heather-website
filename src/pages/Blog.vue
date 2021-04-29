<template>
  <Layout>
    <div class="grid">
		<h2 class="grid__item">Articles</h2>
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '🔖 Blog'
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
		  return categories.join(', ').replace(/-/g, ' ');
	  }
  }
}
</script>

<page-query>
	query {
		posts: allPost {
			edges {
				node {
					id 
					title 
					path 
					date(format: "MMM YYYY")
					excerpt
					content
					timeToRead(speed: 200)
					categories
				} 
			} 
		} 
	}
</page-query>