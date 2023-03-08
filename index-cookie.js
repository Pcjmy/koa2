// 服务端操作 cookie

const http = require('http')

const server = http.createServer((req, res) => {

  // 设置 cookie
  res.setHeader('Set-Cookie', 'a=100')

  // 获取 cookie
  const cookieStr = req.headers.cookie
  console.log('cookie is', cookieStr)

  // 结构化 cookie
  const cookieObj = {}
  cookieStr.split(';').forEach(cookieItemStr => {
    const arr = cookieItemStr.trim().split('=')
    const key = arr[0]
    const val = arr[1]
    cookieObj[key] = val
  })
  console.log('cookie obj is', cookieObj)

  res.end('cookie test')
})

server.listen(3000)
console.log('server listening on 3000 port')