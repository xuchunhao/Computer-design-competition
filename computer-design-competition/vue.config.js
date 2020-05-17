module.exports = {
  outputDir: './myDist',
  productionSourceMap: false,
  devServer: {
    port: '10086',
    proxy:{
      '/api': {
        target: 'https://176.16.0.2'
      },
      '/user': {
        target: 'https://176.16.0.2'
      }
    }
  },
  
}