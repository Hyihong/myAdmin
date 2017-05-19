const router = require('koa-router')();

router.get("/",async (ctx,next)=> {
     await ctx.render("index",{
        title:'主页'
    })
    await next();
})

router.get("/grid",async (ctx,next)=> {
     await ctx.render("grid",{
        title:'栅格系统'
    })
    await next();
})

module.exports = router;