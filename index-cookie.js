// 服务端操作 cookie

const http = require('http')

const server = http.createServer((req, res) => {

  // 设置 cookie
  res.setHeader('Set-Cookie', 'b=200')

  // 获取 cookie
  console.log('cookie is', req.headers.cookie)

  res.end('cookie test')
})

server.listen(3000)
console.log('server listening on 3000 port')