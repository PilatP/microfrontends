const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
require('dotenv').config();

const {
  NODE_ENV = 'production',
  UI_LIB_APP_ENTRY_URL,
  STORE_APP_ENTRY_URL,
} = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.ts',
  optimization: {
    minimize: NODE_ENV === 'production',
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
    new ModuleFederationPlugin({
      name: 'footers',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      remotes: {
        'ui-lib': `ui_lib@${UI_LIB_APP_ENTRY_URL}`,
        store: `store@${STORE_APP_ENTRY_URL}`,
      },
      shared: {
        'styled-components': {
          singleton: true,
          requiredVersion: deps['styled-components'],
        },
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
