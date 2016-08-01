var path = require("path");
var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var plugins = [
	new webpack.DefinePlugin({
		'process.env':{
			'NODE_ENV': JSON.stringify(process.env['NODE_ENV'])
		}
	})
]

if (process.env['NODE_ENV'] == "production") {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		cacheFolder: path.resolve(__dirname, './cached_uglify/'),
		debug: true,
		minimize: true,
		sourceMap: false,
		output: {
			comments: false
		},
		compress: {
			warnings: true
		}
	}))
}

module.exports = {
	context: __dirname,
	entry: {
		main: './src/js/index.jsx',
	},
	output: {
		path: path.resolve('./bundles/'),
		filename: "[name].js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015"]
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},
	plugins: plugins
};
