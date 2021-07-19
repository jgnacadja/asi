// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const contentful = require("./plugins/plugin.confentful");
const algolia = require("./plugin.algolia");
const googleAnalytics = require("./plugins/plugin.googleAnalytics");
const klaro = require("./plugins/plugin.klaro");
const sourceFilesystem = require("./plugins/plugin.sourceFilesystem");
const googleTM = require("./plugins/plugin.googleTM");
const siteMap = require("./plugins/plugin.sitemap");
const robot = require("./plugins/plugin.robot");
const htaccesRules = require("./plugins/plugin.htaccess");
const offerFilesystem = require("./plugins/plugin.offerFilesystem");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ASI",
  siteUrl: "https://www.asi.com",
  siteDescription:
    "La plateforme des potentialités d’Afrique",

  plugins: [
    algolia,
    //contentful,
    googleAnalytics,
    klaro,
    siteMap,
    robot,
    htaccesRules,
    offerFilesystem,
  ],
  templates: {
    //ContentfulPost: "/article/:title",
    //ContentfulCategory: "/category/:title",
    //ContentfulTag: "/tag/:title",
  },
};
