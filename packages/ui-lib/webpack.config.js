const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  optimization: {
    minimize: mode === 'production',
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
      },
    }),
  ],
};
