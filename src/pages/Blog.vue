<template>
  <Layout>
    <div class="grid">
		<h2 class="grid__item">Articles</h2>
	</div>
	<div class="grid align-stretch">
		<div class="post-card grid__item medium--6"
			v-for="post in $page.posts.edges"
			:key="post.id"
		>
			<g-link
				class="post-card__link grid__item"
				:to="post.node.path"
			>
				<div class="post-card__info">
					<h3 class="post-card__title">{{ post.node.title }}</h3>
					<p>{{ truncateExcerpt(post.node.excerpt, 125) }}</p>
					<div class="post-card__meta">
						<p>{{post.node.timeToRead}} min read</p>
						<p>{{ post.node.date }}</p>
					</div>
				</div>
			</g-link>
		</div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  },
  methods: {
	  truncateExcerpt (ex, num) {
		  if (ex.length <= num) {
			  return ex;
		  } else {
			  return `${ex.slice(0,num)}...`;
		  }
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
					date(format: "MMMM D, YYYY")
					excerpt
					content
					timeToRead(speed: 200)
				} 
			} 
		} 
	}
</page-query>