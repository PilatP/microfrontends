const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index.ts',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'footers',
      library: { type: 'var', name: 'footers' },
      filename: 'remoteEntry.js',
      exposes: {
        Footers: './src/App',
      },
      remotes: {
        headers: 'headers',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
