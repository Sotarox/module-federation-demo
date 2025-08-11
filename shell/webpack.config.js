const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: false,
          requiredVersion: "^19.1.1"
        },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: "^19.1.1"
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};