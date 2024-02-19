const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const deps = require('./package.json').dependencies;

const PORT = 3001;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === 'development'
        ? `http://localhost:${PORT}/`
        : 'https://component-library-lake.vercel.app',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'ComponentLibrary',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './DataGrid': './src/components/DataGrid/index.tsx',
        './Interfaces': './src/interfaces/index.ts',
        './MUI': './src/components/MUI/index.ts',
        './Tab': './src/components/Tab/index.tsx',
        './Table': './src/components/Table/index.tsx',
        './ThemeContainer': './src/components/ThemeContainer/index.tsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
});
