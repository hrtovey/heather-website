<template>
	<Layout>
		<div class="page-width">
			<header class="title">
				<h1>{{ $page.post.title }}</h1>
				<p>Published on: {{ $page.post.date }}</p>
			</header>
			<main class="content" v-html="$page.post.content"></main>
		</div>
	</Layout>
</template>

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