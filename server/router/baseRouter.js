const router = require('koa-router')();
const React = require('react');
const ReactDOMServer = require('react-dom/server')

const spaReact = require("../../client/src/components/shared/BaseFrame.jsx")
let ReactHtml = ReactDOMServer.renderToString()
console.log( ReactHtml )


router.get("/",async (ctx,next)=> {
     await ctx.render("index",{
        title:'主页'
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

router.get("/spa/animationEntry",async (ctx,next)=> {
       await ctx.render("animation/animationEntry",{
          title:'单页面应用'
       })
       await next();
})
router.get("/spa/animationEntry/animationBase",async (ctx,next)=> {
       ctx.body = 'hello'; 
       await next();
})
module.exports = router;