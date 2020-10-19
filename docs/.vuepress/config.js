module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'API 文档',
      description: 'api document of Exchange',
    },
    '/en/': {
      lang: 'en-US',
      title: 'API document',
      description: 'api document of Exchange',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './public/images',
      },
    },
  },
  head: [['link', { ref: 'icon', href: './public/favicon.icon' }]],
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        algolia: {},
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
                'ws',
              ],
            },
          ],
          '/': ['exchange/', 'futures/'],
        },
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        algolia: {},
        nav: [
          {
            text: 'Exchange',
            link: '/en/exchange/',
          },
          {
            text: 'Futures',
            link: '/en/futures/',
          },
        ],
        sidebar: {
          '/en/exchange/': [
            {
              title: 'Exchange',
              collapsable: false,
              sidebarDepth: 3,
              children: [
                ['', 'Introduction'],
                'common',
                'base-data',
                'market',
                'account',
                'exchange',
                'ws',
              ],
            },
          ],
          '/en/futures/': [
            {
              title: 'Futures',
              collapsable: false,
              sidebarDepth: 3,
              children: [
                ['', 'Introduction'],
                'common',
                'base-data',
                'market',
                'account',
                'futures',
                'ws',
              ],
            },
          ],
          '/en/': ['exchange/', 'futures/'],
        },
      },
    },
    search: false,
    displayAllHeaders: true,
    sidebarDepth: 3,
    smoothScroll: true,
    activeHeaderLinks: true,
  },
};
