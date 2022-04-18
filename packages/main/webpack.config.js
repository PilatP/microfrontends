const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index.ts',
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
        test: /\.(js|jsx|tsx|ts)$/,
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
      name: 'main',
      remotes: {
        headers: 'headers@[window.lib_app_url]/remoteEntry.js',
        footers: 'footers@[window.lib_app_url]remoteEntry.js',
        'ui-lib': 'ui_lib@[window.lib_app_url]/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
