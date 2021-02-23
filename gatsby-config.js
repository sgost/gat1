module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`100`, `200`, `300`, `400`, `600`, `700`, `800`, `900`]
          },
          {
            family: `Work Sans`,
            variants: [`100`, `200`, `300`, `400`, `600`, `700`, `800`, `900`]
          },
        ],
      },
    },
  ]
}
