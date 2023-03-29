// Koa2操作cookie

const Koa = require('koa')
const app = new Koa()

// 模拟 session
const SESSION_DATA = {
  '123': {
    user: 'zhangsan',
    age: 20
  }
}

app.use(async (ctx) => {

  // 假如用户登录成功，服务端设置cookie
  ctx.cookies.set('userId', '123')

  // 其他接口，获取cookie
  const userId = ctx.cookies.get('userId')
  const userInfo = SESSION_DATA[userId]
  console.log(userInfo.user)

  ctx.body = 'cookie test by Koa2'
})

app.listen(3000)