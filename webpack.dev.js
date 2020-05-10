const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules');
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')

module.exports = Merge(CommonConfig, {
    mode: 'development',
    entry: {
        dev: './src/entry.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new WebpackModules(),
        new CleanWebpackPlugin()
    ],
    // module: {
    //     rules: [{
    //         test: /\.css$/i,
    //         loader: 'css-loader'
    //     }]
    // }
})