const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index.ts',
  output: {
    publicPath: 'auto',
  },
  // devtool: 'source-map',
  optimization: {
    // minimize: mode === 'production',
    minimize: false,
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
