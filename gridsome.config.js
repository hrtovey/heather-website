// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Heather Tovey',
  siteUrl: 'https://heathertovey.com/',
  siteDescription: 'A blog about web development and Shopify.',
  titleTemplate: '%s - Heather Tovey',
  icon: {
    favicon: "./src/favicon.png",
    touchicon: "./src/favicon.png"
  },
  plugins: [
    'gridsome-plugin-robots',
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Heather Tovey',
          startUrl: '/',
          display: 'standalone',
          gcm_sender_id: undefined,
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: true,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'Heather Tovey',
          themeColor: '#000000',
          lang: "en-US",
          backgroundColor: '#000000',
          icon: './src/favicon.png', // must be provided like 'src/favicon.png'
          msTileImage: 'Heather Tovey',
          msTileColor: '#000000'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/collections/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-source-shopify',
      options: {
        storeName: process.env.GRIDSOME_SHOPIFY_STOREFRONT,
        storefrontToken: process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ''
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        flexsearch: {
          profile: 'match'
        },
        collections: [
          {
            typeName: 'ShopifyProduct',
            indexName: 'Product',
            fields: ['title', 'handle', 'description']
          },
          {
            typeName: 'ShopifyCollection',
            indexName: 'Collection',
            fields: ['title', 'handle', 'description']
          }
        ],
        searchFields: ['title', 'handle', 'tags']
      }
    },
    {
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Post",
				path: "./src/post/**/*.md",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
			}
		}
  ],
  templates: {
    Post: "/blog/:title",
    ShopifyProduct: [
      {
        path: '/product/:handle',
        component: './src/templates/Product.vue'
      }
    ],
    ShopifyCollection: [
      {
        path: '/collection/:handle',
        component: './src/templates/Collection.vue'
      }
    ]
  },
  transformers: {
  },
}