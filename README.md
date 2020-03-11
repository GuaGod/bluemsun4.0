# bluem4.0

## 项目安装
在根目录下 npm install    （前端系统）
在middle目录下 npm install (node中间层系统)

## 项目运行
npm run dev:front
npm run dev:middle （为实现自动登录的功能，需要在页面上登录一次，拿到cookie后，修改middle/packjson scripts中dev的cookie值）

## 测试运行
npm run test:front

## 项目打包
npm run build