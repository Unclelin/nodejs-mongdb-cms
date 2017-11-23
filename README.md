# nodejs-mongodb-cms 

## 介绍
这是一个使用node和mongodb做的一个cms-demo

## 包目录结构
- node_modules   项目中依赖的包。
- database       mongodb utils目录。
- public         公共资源放的目录。
- routes         学名 路由，里面放着一些路由文件。
- views			 放着就是页面文件了。
- app.js		 项目的入口文件。##当然你也可以改成其他的名字。

node.js建议是用版本 mac node v7.0.0(这是一个在mac下构建的项目，win版本可自己选择)

## nodejs教程
<https://nodejs.org>

## 启动步骤
- step1: cd /yourpath/mongodb
- step2: npm install
- step3: npm start
- step4: http://localhost:3000

## 备注：
 需要修改mongodb的配置app.js第12行"localhost:27017/lincms"，改为自己的mongdb地址


