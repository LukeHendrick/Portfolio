const commonPaths = require('./common-paths');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: './src/',
    output: {  
        filename: 'bundle.js',
        path: commonPaths.outputPath
    },  

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'latest']
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|gif)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g)/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 10000 }
                    }

                ]
            },
        ]
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;