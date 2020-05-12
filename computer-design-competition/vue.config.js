module.exports = {
  outputDir: './myDist',
  productionSourceMap: false,
  devServer: {
    port: '10086',
    // proxy:{
    //   '/api': {
    //     target: 'https://www.zustservice.cn'
    //   },
    //   '/user': {
    //     target: 'https://www.zustservice.cn'
    //   }
    // }
  },
  
}