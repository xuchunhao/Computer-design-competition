module.exports = {
  outputDir: './myDist',
  productionSourceMap: false,
  devServer: {
    port: '10086',
    proxy:{
      '/api': {
        target: 'http://mmerak.cn'
      },
      // '/user': {
      //   target: 'http://111.231.231.118'
      // }
    }
  },
  
}