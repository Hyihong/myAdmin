'use strict'

const router = require('koa-router')();
const React = require('react');
const ReactDOMServer = require('react-dom/server')

import { StaticRouter ,Link ,Route} from 'react-router'
import 'isomorphic-fetch'

import AnimationEntry from '../../client/src/components/animation/AnimationEntry.jsx'
import Table from '../../client/src/components/ui/table.jsx'
import fetchTabalData from '../utils/fetchTable.js'

router.get("/",async (ctx,next)=> {
     await ctx.render("index",{
        title:'首页'
    })
    await next();
})

router.get("/ui/btn",async (ctx,next)=> {
     await ctx.render("ui/uiButton",{
        title:'按钮'
    })
    await next();
})

router.get("/ui/icon",async (ctx,next)=> {
     await ctx.render("ui/uiIcon",{
        title:'图标'
    })
    await next();
})

router.get("/ui/timepicker",async (ctx,next)=> {
     await ctx.render("ui/timepicker",{
        title:'时间选择器'
    })
    await next();
})

router.get("/ui/treeSelect",async (ctx,next)=> {
       await ctx.render("ui/treeSelect",{
          title:'/树形选择器'
       })
       await next();
})

router.get("/ui/cascader",async (ctx,next)=> {
       await ctx.render("ui/cascader",{
          title:'联级选择'
       })
       await next();
})

router.get("/ui/table",async (ctx,next)=> {
       await ctx.render("ui/table",{
          title:'表格',
          global: ReactDOMServer.renderToString( <Table/> ),
          state: await fetchTabalData({
                    data:{
                        results:15,
                        page:1
                    }
                }).then(function(response){
                    return response.json()
                }).then(function(data){
                    return data.results
                })
        })
       await next();
})

router.get( /^\/spa\/animationEntry/ ,async (ctx,next)=> {
       await ctx.render("animation/animationEntry",{
          title:'单页面应用',
          global: ReactDOMServer.renderToString( 
                 <StaticRouter location={ctx.req.url} >  
                    <AnimationEntry/>
                </StaticRouter>
          )

       }) 
       await next();
})

module.exports = router;