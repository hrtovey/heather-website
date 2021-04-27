<template>
	<Layout>
		<div class="grid">
			<div class="grid__item">
				<header class="title">
					<h1>{{ $page.post.title }}</h1>
					<p>{{ $page.post.timeToRead }} min read</p>
					<p>Published on: {{ $page.post.date }}</p>
				</header>
				<main class="content" v-html="$page.post.content"></main>
			</div>
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
			timeToRead(speed: 200)
		}
	}
</page-query>