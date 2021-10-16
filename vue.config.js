module.exports = {
  configureWebpack: {
    // webpack 配置

    devtool: 'source-map',
  },
  devServer: {
    open: true, // npm run serve后自动打开页面
    port: 9527, // 开发服务器运行端口号
    proxy: {
      '/': {
        target: 'https://alex188.cn/h5app',
        changeOrigin: true, // 支持跨域 是否修改请求头中的host
        ws: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/': '',
        },
      },
    },
  },
};
