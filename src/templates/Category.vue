<template>
  <Layout>
    <div class="grid">
		<h2 class="grid__item cat__title">{{ formatTitle($page.category.title) }}</h2>
	</div>
	<div class="grid align-stretch">
		<div class="card grid__item medium--6"
			v-for="edge in $page.category.belongsTo.edges"
			:key="edge.node.id"
		>
			<g-link
				class="card__link grid__item"
				:to="edge.node.path"
			>
				<div class="card__info">
					<div class="card__meta">
						<p class="card__category card__meta-item">
						<p class="card__category card__meta-item">{{ listCategories(edge.node.categories) }}</p>
						<p class="card__time-to-read card__meta-item">{{edge.node.timeToRead}} min read</p>
						<p class="card__date card__meta-item">{{ edge.node.date }}</p>
					</div>
					<h3 class="card__title">{{ edge.node.title }}</h3>
					<p class="card__description">{{ truncateExcerpt(edge.node.excerpt, 125) }}</p>
				</div>
			</g-link>
		</div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog',
      bodyAttrs: {
        class: 'page--blog'
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
	  },
	  formatTitle (title) {
		  return title.replace(/-/g, ' ');
	  }

  }
}
</script>

<page-query>
query ($id: ID!) {
  category(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
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
          }
        }
      }
    }
  }
}
</page-query>