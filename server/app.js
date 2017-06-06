// ***  ***
// ***  file description服务端入口 ***
// ***  ***
'use strict'

// Provide custom regenerator runtime and core-js
require('babel-polyfill')

require('babel-register')({
        "presets":["react","es2015","stage-0"],
         //"ignore": /(.css|.less)$/,
         "plugins": [
         ["import", { 
             "libraryName": "antd", 
             //"style": true
             }
          ],
        //   ['add-module-exports'],
        ],
     });  

const path = require('path');

const koa = require('koa');
const koaEjs = require('koa-ejs');
const router = require('./router/baseRouter.js');


const App = new koa();

//静态资源服务
App.use(require('koa-static')(path.join(__dirname,"./../client/release")));

//配置后端渲染模板
koaEjs(App,{
    root: path.join(__dirname,"views"),
    layout:false,
    viewExt: 'ejs',
})

//挂载路由
App.use(router.routes()).use(router.allowedMethods());


App.listen('3000',() => {
    console.log('3000端口监听中...')
})