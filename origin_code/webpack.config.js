const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development', // 设置mode
    devServer: {
    	open: true,
    	port: 3000,
    	contentBase: 'src',
    	hot: true
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
      		template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      		filename: 'index.html'}),
        new VueLoaderPlugin()
    ],
    module: {
    	rules: [
    		{test: /\.css$/, use:['style-loader', 'css-loader']},
    		{test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
    		{test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},
    		{test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},
    		{test: /\.(ttf|svg|eot|woff|woff2)$/, use: 'url-loader'},
    		{test: /\.js$/, use:'babel-loader', exclude:/node_modules/},
        {test: /\.vue$/, use:'vue-loader'}
    	]
    }
}