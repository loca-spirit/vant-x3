let pages = {}
let proxy = {
  '/mock': {
    target: 'http://localhost:8060/', //mock
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/mock': ''
    }
  }
}

process.argv.forEach((param) => {
  pages = {
    index: {
      entry: 'packages/demo/src/main',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
})
module.exports = {
  pages,
  proxy
}
