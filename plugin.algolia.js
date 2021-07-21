const collections = [
];

module.exports = {
  use: `gridsome-plugin-algolia`,
  options: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    collections,
    chunkSize: 10000, // default: 1000
    enablePartialUpdates: true, // default: false
  },
};
