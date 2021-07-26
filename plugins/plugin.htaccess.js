module.exports = {
  use: "gridsome-plugin-htaccess",
  options: {
    pingable: false,
    textCompression: [
      "text/html",
      "application/javascript",
      "text/css",
      "image/png",
    ],
    redirections: [
      {
        from: "/asi",
        to: "/",
      },
    ],
  },
};
