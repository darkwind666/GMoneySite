require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `GMoney - AR currency converter`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 153750144,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `GMoney`,
        description: `Technology helps tourists convert currencies in foreign country`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        watchMode: true,
        overlayDrafts: true,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
