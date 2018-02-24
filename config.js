const charts = [
  { title: '柱状图Bar', path: '/bar', matchPath: /^\/bar/ },
  { title: '折线图Line', path: '/bar', matchPath: /^\/bar/ },
  { title: '散点图Scatter', path: '/bar', matchPath: /^\/bar/ },
  { title: '箱线图Boxplot', path: '/bar', matchPath: /^\/bar/ },
  { title: '饼图Pie', path: '/bar', matchPath: /^\/bar/ },
]

const elements = [
  { title: '基本形状元素', path: '/elements/base'},
  { title: '容器元素', path: '/elements/container'},
  { title: '动画元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '描述性元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '滤镜元素', path: '/bar', matchPath: /^\/bar/ },

  { title: '渐变元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '图形元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '光源元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '形状元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '结构元素', path: '/bar', matchPath: /^\/bar/ },

  { title: '文本内容元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '文本子内容元素', path: '/bar', matchPath: /^\/bar/ },
  { title: '未分类元素', path: '/bar', matchPath: /^\/bar/ },
]

const attribute = [
  { title: '动画事件属性', path: '/bar', matchPath: /^\/bar/ },
  { title: '动画属性目标属性', path: '/bar', matchPath: /^\/bar/ },
  { title: '动画定时属性', path: '/bar', matchPath: /^\/bar/ },
]

docute.init({
  landing: 'landing.html',
  // announcement(route) {
  //   const info = { type: 'warning' }
  //   info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-warning" href="https://github.com/egoist/donate" target="_blank">注意!</a> 图表还处于开发阶段，所以文档还在剧烈变动阶段.'
  //   return info
  // },
  debug: true,
  // home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
  // repo: 'egoist/docute',
  // twitter: 'rem_rin_rin',
  // 'edit-link': 'https://github.com/egoist/docute/blob/master/docs/',
  tocVisibleDepth: 4,
  nav: {
    default: [
      {title: '主页', path: '/home'},
      {title: 'Svg元素', path: '/element', type: 'dropdown', items: elements},
      {title: 'Svg属性', path: '/attribute', type: 'dropdown', items: attribute},
      {title: '更新日志', path: '/changelog'},
      {title: '图表', path: '/chart', type: 'dropdown', items: charts},


      // {title: 'Plugins', path: '/plugins'},
      // {title: 'Command-Line Tool', path: '/cli'},
      // {title: 'Changelog', path: '/changelog', source: 'https://raw.githubusercontent.com/egoist/docute/master/CHANGELOG.md'},
      // {title: 'Languages', type: 'dropdown', items: langs}
    ],
  },
  // icons: [
  //   {
  //     label: '关注我的微博',
  //     svgId: 'i-weibo',
  //     svgClass: 'weibo-icon',
  //     link: 'http://weibo.com/zengxinyu'
  //   }
  // ],34hyyyyyyyyyyyyik
  plugins: [
    docuteIframe(),
    docsearch({
      apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
      indexName: 'docute',
      // tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
      tags: ['changelog', 'chart'],
      url: 'https://docute.js.org'
    }),
    evanyou()
  ]
})
