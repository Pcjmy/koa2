const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const static = require("koa-static");

const index = require("./routes/index");
const users = require("./routes/users");
const comments = require("./routes/comments");

// error handler 错误处理器
onerror(app);

// middlewares 中间件(app.use(...))
app.use(
  bodyparser({
    // request body 转换
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger()); // 日志格式
app.use(static(__dirname + "/public")); // 静态文件服务

app.use(
  views(__dirname + "/views", {
    // 服务端模板引擎
    extension: "pug",
  })
);

// logger 打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 模拟登录(为了使用中间件)
app.use(async (ctx, next) => {
  const query = ctx.query;
  if (query.user === "zhangsan") {
    // 模拟登录成功
    await next();
  } else {
    // 模拟登录失败
    ctx.body = "请登录";
  }
});

// routes 注册路由
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(comments.routes(), comments.allowedMethods());
// allowedMethods( )对于404或者返回是空的情况，的一种补充

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
