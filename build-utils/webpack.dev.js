const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const config = {
    devtool: "eval-source-map",
    devServer: {
        port: 8000,
        disableHostCheck: true,
        contentBase: './dist',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000/',
            },
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8000', delay: 250 })
    ]
}

module.exports = config