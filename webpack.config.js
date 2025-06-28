const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // where initializePlayer is exported
  output: {
    filename: 'video-streamer-sdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VideoStreamer', // exposes as window.VideoStreamer
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser', // Optional: needed if any module uses `process`
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // if you're using ES6
      },
    ],
  },
};
