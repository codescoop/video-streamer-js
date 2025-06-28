import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    library: {
      name: 'video-streamer-js',
      type: 'window'
    }
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      fs: false
    }
  },
  module: {
    rules: []
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    open: true
  }
};
