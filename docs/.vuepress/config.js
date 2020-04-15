module.exports = {
  title: 'API 文档',
  description: 'api document of Exchange',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './public/images'
      }
    }
  },
  head: [
    ['link', { ref: 'icon', href: './public/favicon.icon' }]
  ],
  themeConfig: {
    navbar: false,
    displayAllHeaders: true,
    sidebarDepth: 3,
    smoothScroll: true,
    sidebar: {
      '/api/': [
        'api.md'
      ],
      '/': [
        'api'
      ]
    }
  }
}
