const path = require('path');

module.exports = {
  module:{
    rules:[
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader'
        },{
          loader:'less-loader'
        }]
      }
    ]
  },
   devtool: 'cheap-module-eval-source-map'
}
