module.exports = {
    use: '@gridsome/plugin-sitemap',
    options: {

        config: {
            '/article/*': {
                changefreq: 'weekly',
                priority: 0.5,
                lastmod: '2020-02-19',
            },
            '/category/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            },
            '/tag/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            },
            '/etudier-en-france/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            },
            '/nos-services/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            },
            '/partenaire/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            },
            '/': {
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: '2020-05-12',
            }
        }
    }
};