module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/couplesharingnotes/' : './',
  outputDir: 'docs',
  pwa: {
    name: '我的笔记',
    appleMobileWebAppCapable: 'yes'
  }
}
