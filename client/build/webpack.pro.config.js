var merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge( webpackBaseConfig ,{
         devtool:'cheap-module-source-map',
         module:{
            rules:[
                {
                    test: /\.less$/,
                    include:/node_modules/,
                   
                }
            ],
         },
         plugins: [
             new webpack.optimize.UglifyJsPlugin({
                compress: {
                warnings: false,
                drop_console: false,
             }
            }),
             new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: {removeAll: true } },
                canPrint: true
            })
         ]
    }
)