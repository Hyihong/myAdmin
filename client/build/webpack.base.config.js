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

//遍历package.json中的theme字段
 let theme = {};
  if (pkg.theme && typeof(pkg.theme) === 'string') {
    let cfgPath = pkg.theme;
    // relative path
    if (cfgPath.charAt(0) === '.') {
       cfgPath = path.resolve(cfgPath);
       console.log(cfgPath);
    }
    theme = require(cfgPath);
  } else if (pkg.theme && typeof(pkg.theme) === 'object') {
    theme = pkg.theme;
}

console.log(theme)

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
                    use: [ "css-loader","less-loader"],
                    fallback: "style-loader",
                })
            },
            //对于antd组件，在less-loader转换过程中，通过modifyVars配置覆盖原来的样式变量
            {
                test: /\.less$/,
                include:/node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{ 
                        loader:"css-loader"
                    },{
                        loader:"less-loader",
                        options:{
                           sourceMap: true,
                           modifyVars:theme
                        }
                    }],
                    fallback: "style-loader",
                })
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
        new ExtractTextPlugin("css/style.css")
    ]

}