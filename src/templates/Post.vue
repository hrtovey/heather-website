<template>
	<Layout>
		<PillarPost v-if="$page.post.pillar" :post="$page.post" />
		<ClusterPost v-else :post="$page.post" />
	</Layout>
</template>

<script>
import SEO from '../mixins/SEO'
import PillarPost from '../components/PillarPost'
import ClusterPost from '../components/ClusterPost'

export default {
  components: {
    PillarPost,
	ClusterPost
  },
  methods: {
	  formatCategory(category) {
		  return category.replace(/-/g, ' ');
	  },
	  createTitleLink(categoryTitle) {
		  return `/blog/category/${categoryTitle}`;
	  }
  },
  mixins: [SEO]
}
</script>

<page-query>
	query Post($path: String!) {
		post: post(path: $path) {
			id 
			title 
			path 
			date (format: "MMM YYYY") 
			lastModified (format: "MMM YYYY") 
			content
			excerpt
			image: coverImage
			timeToRead(speed: 200)
			categories {
            	title
			}
			tags {
				title
			}
			pillar
		}
	}
</page-query>