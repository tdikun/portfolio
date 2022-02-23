module.exports = {
  siteMetadata: {
      title: `portfolio`,
    siteUrl: `https://timdikun.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-PDDJ4E1VBL"],
      },
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    "gatsby-plugin-sass", "gatsby-plugin-react-helmet"]
};