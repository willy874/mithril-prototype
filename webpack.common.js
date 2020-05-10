const path = require('path')


let CommonConfig = {
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
            '@base': path.resolve(__dirname, './src')
        },
        modules: [
            'node_modules'
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /\/node_modules\//,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}

module.exports = CommonConfig