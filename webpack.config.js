const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [
		'@babel/polyfill',
		'./src'
	],

	mode: 'development',

	resolve: {
		extensions: [ '.js', '.jsx' ],
		modules: [ 'node_modules', 'src' ]
	},

	performance: {
		hints: false
	},

	// where to dump the output of a production build
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/env'
					],
					plugins: [
						[ '@babel/plugin-transform-react-jsx', { pragma: 'h' } ],
						'@babel/plugin-syntax-dynamic-import'
					]
				}
			},
			{
				test: /\.scss$/,
				use: [
						'style-loader', // creates style nodes from JS strings
						'css-loader', // translates CSS into CommonJS
						'sass-loader' // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'scriptworld.net - felix breuer',
			template: path.join(__dirname, 'public/index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		contentBase: path.join(__dirname, 'public'),
		hot: true,
		inline: true,
		progress: true,

		// enable gzip compression:
		compress: true,

		// enable pushState() routing, as used by preact-router et al:
		historyApiFallback: true
	}
};
