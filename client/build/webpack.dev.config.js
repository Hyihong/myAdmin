const webpack = require('webpack');
const path = require('path');

const ENTRYPATH = path.resolve(__dirname,'../src/pages');
const OUTPUTPATH = path.resolve(__dirname,'../release/dist');

module.exports = {
    entry:{
        index: path.join(ENTRYPATH,'index.js')
    },
    output:{
        path: OUTPUTPATH,
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
               test:/\.(js|jsx)$/,
               exclude:/node_modules/,
               use: {
                   loader:'babel-loader',
                   options:{}
                }
            },{
                test: /\.css$/,
                use:{
                    loader:'css-loader'
                }
            },{
                test: /\.less$/,
                use: ['css-loader', 'less-loader']
            }
        ]
    },
    devtool: 'cheap-module-source-map',

}