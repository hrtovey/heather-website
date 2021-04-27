<template>
	<Layout>
		<div class="grid">
			<div class="grid__item">
				<header class="title">
					<h1>{{ $page.post.title }}</h1>
					<reading-time :content="$page.post.content"></reading-time>
					<p>Published on: {{ $page.post.date }}</p>
				</header>
				<main class="content" v-html="$page.post.content"></main>
			</div>
		</div>
	</Layout>
</template>

<script>
import ReadingTime from '~/components/ReadingTime.vue'

export default {
  components: {
    ReadingTime
  }
}
</script>
<page-query>
	query Post($path: String!) {
		post: post(path: $path) {
			id 
			title 
			path 
			date (format: "MMMM D, YYYY h:mma") 
			content
		}
	}
</page-query>