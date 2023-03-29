const { User } = require('./model')

!(async () => {
  const lisi = await User.create({
    username: 'lisi',
    password: '123',
    age: 23,
    city: 'shanghai'
  })
})()