---
title: "What is Shopify Liquid?"
slug: "what-is-shopify-liquid"
date: "2021-09-10"
pillar: false
categories: 
  - "shopify"
coverImage: "./images/what-is-shopify-liquid.png"
excerpt: "Shopify uses a template language called Liquid. But what does that mean? Read this short guide to better understand why Liquid exists and how it can help you develop Shopify themes."
---

Since you're here, you may already know that Shopify theme development requires using Liquid.

Maybe you've seen some guides or cheat sheets for Liquid. Or perhaps you've seen code samples that use Liquid but you're not entirely sure why you would even want to use Liquid in the first place.

In this article, I cover:

- What Liquid is
- An example of how Liquid saves us time
- Why Shopify created Liquid

The code samples featured here assume that you have a basic understanding of HTML.

## So what is Liquid anyway?

Liquid is Shopify's template language.

If you've seen other Liquid tutorials around the web, that's a statement you may already be familiar with. But it doesn't really explain much, so let's break this down further.

<div class="callout">
<p class="callout__info">
I'm assuming that you already have some knowledge of HTML. What it is, how to write things like a paragraph tag. Not much more than that is needed here, but if you'd like to catch up, check out my article “<a href="/blog/frontend-development-resources/">Learn Front-End Development with These Free Resources</a>.”
</p>
</div>

Say you want to create a list of all of your blog excerpts on your website. If you do this in plain HTML, you'll get something that looks a bit like this for 1 blog excerpt:

```html
<ul class="blog-list">
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">This is a great blog post!</h3>
			<p class="card__description">The excerpt for this great blog post goes here.</p>
			<a class="card__link" href="/blog/great-post">Read more</a>
		</div>	
	</li>
</ul>
```

For more than one excerpt, it can start to get unwieldy pretty quickly.

```html
<ul class="blog-list">
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">This is a great blog post!</h3>
			<p class="card__description">The excerpt for this great blog post goes here.</p>
			<a class="card__link" href="/blog/great-post">Read more</a>
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">My adventures in time travel</h3>
			<p class="card__description">That time I met the Doctor on the bus was so much fun...</p>
			<a class="card__link" href="/blog/time-travel">Read more</a>
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">Thievery and You</h3>
			<p class="card__description">Learn how to get in and get out without getting caught.</p>
			<a class="card__link" href="/blog/thievery-and-you">Read more</a>		
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">The Aristocracy is boring</h3>
			<p class="card__description">Why I want to give up my title for a more adventurous life.</p>
			<a class="card__link" href="/blog/aristocracy-is-boring">Read more</a>
		</div>	
	</li>
</ul>
```

That's a lot more code for what is only 4 items. And then imagine that you want to go back and update the code a bit. Maybe you want to add an image to the top of the blog card. Or a date. That's a lot of different places to edit.

That brings me to the benefits of a template language.

## What is a Template Language?

A template language (like Liquid, though there are many others) gives us the ability to create placeholders in our code. For instance, here's the same blog list from before but written with Liquid:

```html
<ul class="blog-list">
	{% for article in blog.articles %}
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">{{ article.title }}</h3>
			<p class="card__description">{{ article.excerpt }}</p>
			<a class="card__link" href="{{ article.url }}">Read more</a>
		</div>	
	</li>
	{% endfor %}
</ul>
```

Much shorter! 

Here, we're going through all of the articles in our blog using the `for` keyword. And if that statement doesn't make any sense to you, that's okay. It will make more sense as you get to play around with Liquid yourself.

For now, here's a breakdown of what we're doing. As we go through each article in the list, we are:

- taking the HTML for the entire list item

```html
<li class="blog-list__item">
	<div class="card">
		<h3 class="card__title">{{ article.title }}</h3>
		<p class="card__description">{{ article.excerpt }}</p>
		<a class="card__link" href="{{ article.url }}">Read more</a>
	</div>	
</li
```

- replacing the placeholders we created with the Liquid template language (`{{ article.title }}`, for example) with the actual information from the current article we're looking at

```html
<li class="blog-list__item">
	<div class="card">
		<h3 class="card__title">This is a great blog post!</h3>
		<p class="card__description">The excerpt for this great blog post goes here.</p>
		<a class="card__link" href="/blog/great-post">Read more</a>
	</div>	
</li>
```

- outputting that HTML with actual article information into the unordered list with class "blog-list"

```html
<ul class="blog-list">
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">This is a great blog post!</h3>
			<p class="card__description">The excerpt for this great blog post goes here.</p>
			<a class="card__link" href="/blog/great-post">Read more</a>
		</div>	
	</li>
</ul>
```

Then, Liquid repeats this process until it's gone through every article one by one. So you end up with the same HTML we painstakingly wrote by hand earlier. But this time, we let Liquid handle building it for us.

```html
<ul class="blog-list">
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">This is a great blog post!</h3>
			<p class="card__description">The excerpt for this great blog post goes here.</p>
			<a class="card__link" href="/blog/great-post">Read more</a>
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">My adventures in time travel</h3>
			<p class="card__description">That time I met the Doctor on the bus was so much fun...</p>
			<a class="card__link" href="/blog/time-travel">Read more</a>
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">Thievery and You</h3>
			<p class="card__description">Learn how to get in and get out without getting caught.</p>
			<a class="card__link" href="/blog/thievery-and-you">Read more</a>		
		</div>	
	</li>
  <li class="blog-list__item">
		<div class="card">
			<h3 class="card__title">The Aristocracy is boring</h3>
			<p class="card__description">Why I want to give up my title for a more adventurous life.</p>
			<a class="card__link" href="/blog/aristocracy-is-boring">Read more</a>
		</div>	
	</li>
</ul>
```

## Liquid Template Information

You may be asking “But how did you know that information is in `blog.articles`?”

Easy! Shopify told me it was.

You see, Shopify has a set of "objects" that we can use throughout our site. These objects are where all of the different Shopify data is stored.

For instance, product information is stored in an object called `product`. 

Blog information is stored in `blog` (you can kind of see the naming pattern here). 

The `blog` object (where all of our blog information is stored) has another object inside of it called `articles`. This `articles` object is where the list of blog articles on our site is stored.

So if we want to get the information that's inside the articles object inside the blog object, we can do that by writing `blog.articles`.

"But Heather, do you really expect me to memorize all of that?" No. I certainly don't. I use [Shopify's documentation](https://shopify.dev/api/liquid) to read about what objects we have access to and to refresh myself day-to-day when I need to grab some specific information. 

So when I said Shopify told me where to find that information, they really did. It's in their documentation with code examples to get you started.

## Take 2: What is Liquid anyway?

So earlier, I went back a bit and explained more about what a template language was. But now we know enough to talk more about Liquid specifically.

Liquid was created by Shopify co-founder and CEO Tobias Lütke and has been used in production on Shopify sites since 2006. That's a long time! And it's still being improved and is well-maintained.

Liquid was specifically created to make it easier for website owners with no coding experience to edit their sites. Which means that if you do have any web development experience, Liquid is a great first template language to learn. You can do a lot with it without accidentally adding harmful and insecure code to your website. And it was built so that you can use it for emails too (which you may see if you edit Shopify email notifications that are sent to your customers).

On Shopify, you can use Liquid to access the data stored on the site in a predictable way. Blog articles can always be found in `blog.articles`. The product description on a product page can always be found in `product.description`. This means that as you keep working on the platform, you'll begin to collect a large number of HTML/Liquid recipes that you can use on different sites.

## Shopify Liquid is so useful!

From the example above, we can see that a template language like Liquid allows us to write code more efficiently. We can write some code once and use Liquid to build out all of the HTML for us.

If we want to update the HTML and add the article image, we can do that without having to edit an entire page of HTML in multiple places.

And better yet, we don't have to go in and add new HTML whenever we want to add a new blog post to our site. Shopify's Liquid objects allow us to access that data so that we don't have to write it directly in our HTML.

This is a huge time saver and helps us to maintain our code over time.