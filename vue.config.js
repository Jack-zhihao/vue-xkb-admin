/*
 * @Author: your name
 * @Date: 2020-06-30 10:13:11
 * @LastEditTime: 2020-07-02 14:48:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\vue.config.js
 */

const webpack  = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  outputDir: 'xkb-admin-handle',
  assetsDir: 'static',
  publicPath: '/',
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
  },
  productionSourceMap: false,
  css: {
    // 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。
    extract: true
  },
  configureWebpack: config => {
    // build - 之后禁止输出console
    if (process.env.NODE_ENV === 'production') {
      //GZIP压缩
      return {
        plugins: [
          new CompressionWebpackPlugin({
            test: /\.(js|css)(\?.*)?$/i,
            //需要压缩的文件正则
            threshold: 10240,
            //文件大小大于这个值时启用压缩
            deleteOriginalAssets: false
            //压缩后保留原文件
          })
        ]
      }
    }

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  // 打包后禁止在控制台输出console.log
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        }),
      )
    }
  }
}
