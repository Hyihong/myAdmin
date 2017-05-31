// ***  ***
// ***  file description: webpack配置基础文件 ***
// ***  ***
const fs = require('fs')
const webpack = require('webpack');
const path = require('path');
const pkg = require("../../package.json");

//单独提取出.css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//配置模板文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
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

//读取client/src/pages下的JS文件，获取各个入口文件，通过html-webpack-plugin 生成后端views
let entryObject = {};
let HtmlWebpackPluginArr = []; // 后端views配置内容
var files = fs.readdirSync( ENTRYPATH );
var entry_files = files.filter((f) => {
        return f.endsWith('.js');
    });

entry_files.map((f) => {
     let fileName = f.split(".")[0];
     let HtmlWebpackPluginConfig = {
            title:"<%=title%>",
            filename: `../../../server/views/${fileName}.ejs`,
            template: './template.ejs',
            inject:false,
            chunks:[ fileName],
     }
     entryObject[fileName] = path.join(ENTRYPATH, `${fileName}.js`);
     HtmlWebpackPluginArr.push( new HtmlWebpackPlugin(HtmlWebpackPluginConfig) )
})

module.exports = {
    entry : entryObject,
    output:{
        path: OUTPUTPATH,
        filename: 'js/[name].js',

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
                    use: ["css-loader","less-loader"],
                    fallback: "style-loader"
                })
            },
            //对于antd组件，在less-loader转换过程中，通过modifyVars配置覆盖原来的样式变量
            {
                test: /\.less$/,
                include:/node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                    { 
                        loader:"css-loader",
                        options:{
                           sourceMap: true
                        }
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
        new ExtractTextPlugin("css/[name].css"),
    ].concat( HtmlWebpackPluginArr )

}