const elements = [
  { title: '形状元素', path: '/elements/base'},
  { title: '容器元素', path: '/elements/container'},
  { title: '动画元素', path: '/elements/animate'},
  { title: '描述性元素', path: '/elements/description'},
  { title: '滤镜元素', path: '/elements/filter'},

  { title: '渐变元素', path: '/elements/gradient'},
  { title: '光源元素', path: '/elements/light'},
  { title: '结构元素', path: '/elements/construction'},

  { title: '文本内容元素', path: '/elements/text'},
  { title: '未分类元素', path: '/elements/unknow'},
]

const subjects = [
  { title: '投影专题', path: '/subjects/shadow'},
  { title: '动画专题', path: '/subjects/aniamte'},
  { title: '属性分类专题', path: '/subjects/classify'},
  { title: '渐变填充专题', path: '/subjects/gradient'},
  { title: '材质填充专题', path: '/subjects/pattern'},
  { title: '动画定时属性', path: '/bar', matchPath: /^\/bar/ },
]

const questions = [
  { title: '文字对齐方式', path: '/questions/text-align'},
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
  repo: 'ckinmind/SvgBook',
  tocVisibleDepth: 4,
  nav: {
    default: [
      {title: '主页', path: '/home'},
      {title: 'Svg元素', path: '/element', type: 'dropdown', items: elements},
      {title: '专题', path: '/attribute', type: 'dropdown', items: subjects},
      {title: '问题', path: '/question', type: 'dropdown', items: questions},
    ]
  },
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
