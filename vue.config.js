module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  productionSourceMap: false,
  // 在exports中添加，这里很关键，不配置不行
  //  transpileDependencies: ['element-ui'],

  chainWebpack(config) {
    // 在chainWebpack中添加下面的代码
    config.entry("main").add("@babel/polyfill"); // main是入口js文件
  },
  devServer: {
    proxy: "http://8.133.177.11",
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: " http://8.133.177.11",
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
};
