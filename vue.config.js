const path = require('path')
const { pages, proxy } = require('./config.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const fs = require('fs')

module.exports = {
  runtimeCompiler: true,
  pages,
  devServer: {
    port: 8210,
    proxy
  },
  chainWebpack: (config) => {
    config.resolve.mainFields
      .add('typescriptSource')
      .add('browser')
      .add('module')
      .add('main')
    config.plugin('define').tap(args => {
      args[0]['process.env'].RELEASE_VERSION = JSON.stringify('V_201126')
      return args
    })
  },
  pluginOptions: {}
}
