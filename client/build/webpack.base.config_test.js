// ***  ***
// ***  file description: webpack配置基础文件 ***
// ***  ***

const webpack = require('webpack');
const path = require('path');
const pkg = require("../../package.json");

//单独提取出.css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENTRYPATH = path.resolve(__dirname,'../src/pages');
const OUTPUTPATH = path.resolve(__dirname,'../release/dist');

//读取package.json中的theme字段,如果是string类型，读取配置文件。如果是object类型，则作为参数传给modifyVar
 let theme = {};
  if (pkg.theme && typeof(pkg.theme) === 'string') {
    let cfgPath = pkg.theme;
    // relative path
    if (cfgPath.charAt(0) === '.') {
       cfgPath = path.resolve(cfgPath);
    }
    theme = require(cfgPath);
  } else if (pkg.theme && typeof(pkg.theme) === 'object') {
    theme = pkg.theme;
}



module.exports = {
    entry:{
        "index": path.join(ENTRYPATH,'index.js'),
        "uiButton" : path.join(ENTRYPATH,'uiButton.js'),
        "uiIcon" : path.join(ENTRYPATH,'uiIcon.js'),
        "timepicker":path.join(ENTRYPATH,'timepicker.js'),
        
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
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.less$/,
                exclude:/node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
                
            },
            //对于antd组件，在less-loader转换过程中，通过modifyVars配置覆盖原来的样式变量
            {
                test: /\.less$/,
                include:/node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        modifyVars:theme
                    }
                }]
            }
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
        //new ExtractTextPlugin("css/style.css")
    ]

}