const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
	    path.join(__dirname, 'src/app.js'),
        path.join(__dirname, 'src/styles/styles.less')
    ],
	output: {
		path: path.join(__dirname, 'bin'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.html$/,
				loader: 'html-loader'
			},
			{
				test:/\.less$/,
				use: ExtractTextPlugin.extract({
				    fallback: 'style-loader',
				    use:[{
					    loader:'css-loader',
					    options:{
						sourceMap: true
					    }
					},
					{
					    loader: 'less-loader',
					    options: {
						sourceMap: true
					    }
					}
				]})
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env']
				}
			}
		]
	},
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

