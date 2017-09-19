const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const publicPath = path.resolve(__dirname, './app/client')
const buildPath = path.resolve(__dirname, './app')

module.exports = {
    // entry: __dirname + "/app/main.js",
    entry: {
        bundle: [
            'webpack/hot/dev-server',
            // 'webpack-hot-middleware/client',
            './app/main.js'
          ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle-[hash].js",
        publicPath: '/'
    },
    devtool: 'sourcemap',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: [{
                loader: "react-hot-loader"
            }],
            exclude: /node_modules/
        }, {
            test: /(\.jsx|\.js)$/,
            use: [{
                loader: "babel-loader"
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }],
            })
        }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        new extractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
        

    ],
}