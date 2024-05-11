const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'haqAssets',
    libraryTarget: 'umd',
    filename: 'haq-assets.js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
    ]
  }
};
