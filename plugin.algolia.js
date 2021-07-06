const collections = [
  {
    query: `{
        allContentfulPost {
          edges {
            node {
              id
              title
              path
              date
              author
              timeToRead
              categories {
                id
                title
                path
              }
              tags {
                id
                title
                path
              }
              coverImage {
                file {
                  url
                }
              }
              metaDescription
            }
          }
        }
      }`,
    transformer: ({ data }) =>
      data.allContentfulPost.edges.map(({ node }) => node),
    indexName: "prod_studelyapp", // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        path: item.path,
        author: item.author,
        date: String(item.date),
        metaDescription: item.metaDescription,
        coverImage: item.coverImage.file.url,
        categories: item.categories,
        tags: item.tags,
      };
    }, // optional
    matchFields: ["title", "metaDescription"], // Array<String> required with PartialUpdates
  },
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
