var path = require('path');

var config = {
  entry: ['webpack/hot/dev-server',
          'webpack-dev-server/client?http://localhost:8080',
          path.resolve(__dirname, 'client/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015',"react","stage-3"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader","css-loader?importLoaders=1!postcss-loader","sass-loader"]
      }
    ]
  }
};

module.exports = config;
