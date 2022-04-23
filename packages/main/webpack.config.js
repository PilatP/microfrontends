const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

require('dotenv').config();

const {
  NODE_ENV = 'production',
  HEADERS_APP_ENTRY_URL,
  FOOTERS_APP_ENTRY_URL,
  UI_LIB_APP_ENTRY_URL,
  STORE_APP_ENTRY_URL,
} = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.ts',
  devtool: 'source-map',
  optimization: {
    minimize: NODE_ENV === 'production',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json', 'js'],
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
        headers: `headers@${HEADERS_APP_ENTRY_URL}`,
        footers: `footers@${FOOTERS_APP_ENTRY_URL}`,
        'ui-lib': `ui_lib@${UI_LIB_APP_ENTRY_URL}`,
        store: `store@${STORE_APP_ENTRY_URL}`,
      },
      shared: {
        'styled-components': {
          singleton: true,
          requiredVersion: deps['styled-components'],
        },
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
