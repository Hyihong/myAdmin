const router = require('koa-router')();

router.get("/",async (ctx,next)=> {
     await ctx.render("index",{
        title:'主页'
    })
    await next();
})

router.get("/ui/btn",async (ctx,next)=> {
     await ctx.render("uiButton",{
        title:'UI/按钮'
    })
    await next();
})

router.get("/ui/icon",async (ctx,next)=> {
     await ctx.render("uiIcon",{
        title:'UI/图标'
    })
    await next();
})

router.get("/ui/timepicker",async (ctx,next)=> {
     await ctx.render("timepicker",{
        title:'UI/时间选择器'
    })
    await next();
})

module.exports = router;