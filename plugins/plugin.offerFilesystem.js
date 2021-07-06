module.exports = {
  // Create posts from markdown files
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "offres",
    path: "content/offres/*.md",
    refs: {
      // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
      offres: {
        typeName: "offres",
        create: true,
      },
    },
  },
};
