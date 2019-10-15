const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    devtool: false,
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    // optimization: {
    //     splitChunks: {
    //         maxSize: 15000,
    //         minSize: 10000,
    //         name: false,
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //                 name: 'react-vendor',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    entry: { file1: './src/index2.js', file2: './src/index.js' },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },
    // devServer: {
    //     contentBase: './build',
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html')
        })
        //new webpack.HotModuleReplacementPlugin()
    ]
};
