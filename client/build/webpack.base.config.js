// ***  ***
// ***  file description: webpack配置基础文件 ***
// ***  ***

const webpack = require('webpack');
const path = require('path');
//单独提取出.css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{
                test: /\.less$/,
                exclude:/node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader","less-loader"]
                })
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings 
                //     }, {
                //         loader: "css-loader" // translates CSS into CommonJS 
                //     }, {
                //         loader: "less-loader" // compiles Less to CSS 
                //     }]
            },{
                test: /\.module\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
                    'postcss!' +
                    `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
                )
            },
        ]
    },
    resolve :{
        extensions: [".js", ".jsx"],
    },
    externals: {
        "react":"React",
        "react-dom":"ReactDOM"
    },
    plugins:[
        new ExtractTextPlugin("css/style.css")
    ]

}