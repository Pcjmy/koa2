# README

## 运行环境

node v14.15.1
npm 6.14.8

## Koa2

### cookie

+ 存储在浏览器的一段字符串，最大5kb
+ 每个域都可有一个cookie ，跨域不共享
+ 格式如k1=v1;k2=v2;k3=v3;(可结构化)
+ 每次 http请求，cookie都会随着传递到服务端
+ 服务端可修改cookie 再返回给前端
+ 默认，跨域不可传递cookie

### session

+ cookie存储用户标识，如userld
+ 用户信息则存储到session中
+ session即用户信息的存储，和cookie有对应关系

## 出现的错误

```shell
1.'.' 不是内部或外部命令，也不是可运行的程序或批处理文件。
原因：npm版本不匹配，npm需要6.X版
解决办法：npm -g install npm@6.0.0
```
