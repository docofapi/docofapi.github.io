module.exports = {
  title: 'API 文档',
  description: 'api document of Exchange',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './public/images',
      },
    },
  },
  head: [['link', { ref: 'icon', href: './public/favicon.icon' }]],
  themeConfig: {
    nav: [
      {
        text: '币币交易',
        link: '/exchange/',
      },
      {
        text: '合约交易',
        link: '/futures/',
      },
    ],
    search: false,
    displayAllHeaders: true,
    sidebarDepth: 3,
    smoothScroll: true,
    activeHeaderLinks: true,
    sidebar: {
      '/exchange/': [
        {
          title: '币币交易',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['', '介绍'],
            'common',
            'base-data',
            'market',
            'account',
            'exchange',
            'ws',
          ],
        },
      ],
      '/futures/': [
        {
          title: '合约交易',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['', '介绍'],
            'common',
            'base-data',
            'market',
            'account',
            'futures',
            'ws'
          ],
        },
      ],
      '/': ['exchange/', 'futures/']
    },
  },
};
