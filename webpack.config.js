const path = require('path');

module.exports = {
  entry: 'index.js',
  output:{
    filename: 'bundle.js',
    path:path.resolve(__dirname)
  },
  module:{
    rules:[
      {
        exclude: /(node_modules)/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader'
        }]
      }
    ]
  },
   devtool: 'cheap-module-eval-source-map'
}
