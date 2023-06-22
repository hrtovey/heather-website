// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Heather Tovey',
  siteUrl: 'https://www.heathertovey.com',
  siteDescription: 'A blog about web development and Shopify.',
  titleTemplate: '%s - Heather Tovey',
  icon: {
    favicon: "./src/favicon.png",
    touchicon: "./src/favicon.png"
  },
  metadata: {
    twitter: {
      site: '@hrtovey',
      creator: '@hrtovey'
    }
  },
  plugins: [
    'gridsome-plugin-robots',
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/thank-you'],
        config: {
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Post",
				path: "./src/post/**/*.md",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            ['remark-toc']
          ],
        },
        refs: {
          // Auto create a collection for all categories
          categories: { 
            typeName: 'Category',
            create: true
          },
          // Auto create a collection for all categories
          tags: { 
            typeName: 'Tag',
            create: true
          }
        }

			}
		},
    {
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "ProductsInfo",
				path: "./src/data/**/*.md"
			}
		},
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: "HeatherTovey.com Blog Feed",
          description: "Articles about Shopify theme development.",
          link: "https://www.heathertovey.com/",
          language: "en"
        },
        rss: {
          enabled: true,
          output: "/rss.xml"
        },
        maxItems: 25,
        nodeToFeedItem: node => ({
          title: node.title,
          date: new Date(node.date),
          content: node.excerpt
        })
      }
    },
  ],
  templates: {
    Post: "/blog/:slug",
    Category: "/blog/category/:title",
    Tag: "/blog/tag/:title"
  },
  transformers: {
  }
}