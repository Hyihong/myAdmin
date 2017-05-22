var merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');



module.exports = merge( webpackBaseConfig ,{
       devtool: "source-map",
    }
)