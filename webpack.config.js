var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    bail: true,
    module: {
        rules: [
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
    watch: false
};

// const path = require('path');
//
// module.exports = {
//   module:{
//     rules:[
//       {
//         test: /\.less$/,
//         exclude: /(node_modules)/,
//         use:[{
//           loader:'style-loader'
//         },{
//           loader:'css-loader'
//         },{
//           loader:'less-loader'
//         }]
//       }
//     ]
//   },
//    devtool: 'cheap-module-eval-source-map'
// }
