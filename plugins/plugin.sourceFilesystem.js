module.exports = {
  // Create posts from markdown files
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "StaticPage",
    path: "content/pages/*.md",
  },
};
