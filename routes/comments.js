const router = require('koa-router')()
const { Comment } = require('../db/model')
const loginCheck = require('../middlewares/loginCheck')

router.prefix('/api') // 前缀

// 定义路由：模拟获取留言板列表
router.get('/list', loginCheck, async (ctx) => {
  const query = ctx.query
  console.log('query', query)
  // ctx.body = 'api list'

  // 获取数据库的列表
  const commentList = await Comment.find().sort({_id: -1})

  ctx.body = {
    errno: 0,
    data: commentList
  }
})

// 定义路由：模拟创建留言
router.post('/create', async (ctx) => {
  // ctx.body = 'api create'
  const body = ctx.request.body // request body
  console.log('body', body)

  // 获取数据
  const { content, username } = body
  // 插入到数据库
  const newComment = await Comment.create({
    content,
    username
  })

  ctx.body = {
    errno: 0,
    message: '成功'
  }
})

module.exports = router // 输出