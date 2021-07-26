// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const algolia = require("./plugin.algolia");
const googleAnalytics = require("./plugins/plugin.googleAnalytics");
const klaro = require("./plugins/plugin.klaro");
const siteMap = require("./plugins/plugin.sitemap");
const robot = require("./plugins/plugin.robot");
const htaccesRules = require("./plugins/plugin.htaccess");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ASI",
  siteUrl: "https://www.asi.com",
  siteDescription:
    "La plateforme des potentialités d’Afrique",

  plugins: [
    algolia,
    googleAnalytics,
    klaro,
    siteMap,
    robot,
    htaccesRules,
  ],
  templates: {
  },
};
