const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
  	contentBase: "./dist"
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
      	test: /\.html$/,
      	use: [{
      		loader: "html-loader"
      	}]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.(jpe?g|png|gif|svg|woff|ttf)$/i,
        loader: "file-loader"
      },
    ]
  },
  plugins: [
	  new HtmlWebPackPlugin({
	  	template: './src/index.html',
	  	filename: './index.html'
	  })
  ]
}
