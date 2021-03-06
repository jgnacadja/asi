// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const googleAnalytics = require("./plugins/plugin.googleAnalytics");
const klaro = require("./plugins/plugin.klaro");
const siteMap = require("./plugins/plugin.sitemap");
const robot = require("./plugins/plugin.robot");
const htaccesRules = require("./plugins/plugin.htaccess");
const sourceFilesystem = require("./plugins/plugin.sourceFilesystem");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ASI",
  siteUrl: "https://www.asi.com",
  siteDescription: "La plateforme des potentialités d’Afrique",

  plugins: [
    googleAnalytics,
    klaro,
    siteMap,
    robot,
    htaccesRules,
    sourceFilesystem,
  ],
  templates: {},
};
