const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

require('dotenv').config();

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.ts',
  optimization: {
    minimize: NODE_ENV === 'production',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
      name: 'store',
      library: { type: 'var', name: 'store' },
      filename: 'remoteEntry.js',
      exposes: {
        './Store': './src/redux/index',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: false, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: false,
          requiredVersion: deps.react,
        },
      },
    }),
  ],
};
