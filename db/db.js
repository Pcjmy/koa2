// 连接数据库（mongodb 的服务端)

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment2'

// 开始连接
mongoose.connect(`${url}/${dbName}`)
  .then(() => console.log('Connected!'))

module.exports = mongoose