module.exports = {
    use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
            { userAgent: '*', 
              allow: '/', 
              disallow: [
                  "*.pdf", 
                  "/mentions-legales",
                  "/cgu",
                ],
            }]
      }
};