const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
require('dotenv').config();

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  mode: NODE_ENV,
  optimization: {
    minimize: NODE_ENV === 'production',
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
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
    new ModuleFederationPlugin({
      name: 'ui_lib',
      library: { type: 'var', name: 'ui_lib' },
      filename: 'remoteEntry.js',
      exposes: {
        './Components': './src/components/',
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
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
  ],
};
