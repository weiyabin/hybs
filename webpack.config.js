var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var PAGE_PATH = path.resolve(ROOT_PATH, "page");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		page: path.resolve(PAGE_PATH, 'index.js'),
		vendors: ['jquery']
	},
	output: {
		path : BUILD_PATH,
		filename : "/js/bundle-[hash:8].js"
	},
	module: {
		loaders : [{
		    test : /\.(less|css)$/,
		    loader: ExtractTextPlugin.extract('style', 'css!less')
		},{
		    test : /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
		    loader : "url?limit=100&name=/img/[name]-[hash:8].[ext]",
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendors", "/js/vendors-[hash:8].js"),
		new ExtractTextPlugin("/css/styles-[hash:8].css", {allChunks: true})
	]
};