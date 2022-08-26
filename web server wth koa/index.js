const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  const url=ctx.path
  ctx.set("content-type", "text/html")
  if(url==="/"){
    ctx.body="<h1>Ana sayfa</h1>"
  }
  else if(url==="/about"){
    ctx.body="<h1>Hakkimizda</h1>"
  }
  else if(url==="/contact"){
    ctx.body="<h1>iletisim</h1>"
  }
  else{
    ctx.body = "<h1>404 not found</h1>";
    ctx.status = 404;
  }
})

app.listen(3000);