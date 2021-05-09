---
title: "How to Change Default Text Labels in Squarespace"
slug: "change-default-text-labels"
date: "2018-11-21"
categories: 
  - "squarespace"
tags: 
  - "code-snippets"
coverImage: "how-to-change-default-text-labels-in-squarespace-1.png"
excerpt: ""
---

**\*Requires a Business or above account to add JavaScript code snippets.\***

You’ve designed an amazing e-commerce website, and you’re really happy with how it looks overall. But there’s just something off about the “Sold Out” product marks on your inventory. You wish they said something like “Sold” or “Unavailable” or maybe even “Full”.

But you can’t change this text easily in Squarespace. Well, not without a little custom coding.

Today, I offer you a few JavaScript code snippets to help you customize the default text for:

- store products that are “Sold Out” or on “Sale”
    
- the “Read More” link on blog post excerpts
    
- the “Newer” and “Older” pagination links on your Blog page
    

## How to Change Default Text Labels in Squarespace

To use these coding snippets, copy/paste them into **Settings > Advanced > Code Injection > Footer**.

* * *

**Note:** These snippets were tested on the Brine template. If the code snippet doesn’t work for you, leave a comment and let me know what template you’re working with.

* * *

### “Sold Out”

**7.0 and 7.1**
```html
<script>
  // Sold Out Text
  document.querySelectorAll('.product-mark.sold-out').forEach(function(product) {
      product.textContent = "Sold"; // Customize text here
  });
</script>
```

### “Sale”

**7.0 and 7.1**
```html
<script>
  // Sale Text
  document.querySelectorAll('.product-mark.sale').forEach(function(product) {
      product.textContent = "On Sale"; // Customize text here
  });
</script>
```

### “Read More”

**7.0**
```html
<script>
  // Read More Text
  document.querySelectorAll('.BlogList-item-readmore span').forEach(function(summary) {
      summary.textContent = "View Full Article"; // Customize text here
  })
</script>
```

**7.1**
```html
<script>
  // Read More Text
  document.querySelectorAll('.blog-more-link').forEach(function(summary) {
    summary.textContent = "View Full Article"; // Customize text here
  })
</script>
```

### “Newer” and “Older”

**7.0**
```html
<script>
  // Blog Pagination Links
  document.querySelectorAll('.BlogList-pagination-link-label').forEach(function(paginationLink) {
      if (paginationLink.textContent == "Newer") {
          paginationLink.textContent = "Forward"; // Customize "Newer" text here
      } else {
          paginationLink.textContent = "Back"; // Customize "Older" text here
      }
  })
</script>
```

**7.1**
```html
<script>
  // Blog Pagination Links
  document.querySelectorAll('.item-pagination-link--prev .item-pagination-prev-next').forEach(function(prevLink) {
    prevLink.textContent = "Back"; // Customize "Previous" text here
  })
  document.querySelectorAll('.item-pagination-link--next .item-pagination-prev-next').forEach(function(nextLink) {
    nextLink.textContent = "Forward"; // Customize "Next" text here
  })
</script>
```

## Don’t Feel Limited By Default Text

While Squarespace is excellent for the typical website, sometimes the default settings don’t make sense with your design. Use these snippets to fully customize and design your Squarespace website exactly the way that you want.