'use strict'

const router = require('koa-router')();
const React = require('react');
const ReactDOMServer = require('react-dom/server')

import { StaticRouter ,Link ,Route} from 'react-router'

import AnimationEntry from '../../client/src/components/animation/AnimationEntry.jsx'

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
          title:'表格'
       })
       await next();
})

router.get("/spa/animationEntry",async (ctx,next)=> {
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
router.get("/spa/animationEntry/animationBase",async (ctx,next)=> {
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

router.get("/spa/animationEntry/animationCase",async (ctx,next)=> {
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

router.get("/spa/animationEntry/AAA",async (ctx,next)=> {
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

router.get("/spa/animationEntry/AAA/a",async (ctx,next)=> {
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

router.get("/spa/animationEntry/AAA/b",async (ctx,next)=> {
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

router.get("/spa/animationEntry/AAA/c",async (ctx,next)=> {
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