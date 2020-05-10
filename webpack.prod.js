const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules');
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')

module.exports = Merge(CommonConfig, {
    mode: 'production',
    entry: {
        dist: './src/entry.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
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