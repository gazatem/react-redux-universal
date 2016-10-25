var path = require('path');
module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
}