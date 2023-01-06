const Koa = require('koa') // commonjs模块化
const app = new Koa()

// ctx context
app.use(async (ctx) => {
  ctx.body='hello world'
})

app.listen(3000)