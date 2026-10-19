# 数码图鉴 | Digital Gallery

手机 · 充电宝 · 充电器 参数图鉴，纯静态站点，无需构建。

## 访问

- 自定义域名：https://xiaomowiki.top
- GitHub Pages：https://fbxiaomo.github.io/digital-gallery/

## 技术栈

纯 HTML + CSS + JavaScript，数据以 JS 文件形式内嵌于 `db/` 目录。

## 目录结构

```
index.html          单页应用入口
easter-egg.js       彩蛋脚本（按需异步加载）
db/                 数据与图片
  phones.js         手机数据
  chargers.js       充电器数据
  powerbanks.js     充电宝数据
  processors.js     处理器数据
  changelogs.js     更新日志
  images/           机型图片
easter-egg-img/     彩蛋图片
fonts/              站点字体
logo/               图标与站点清单
```

## 本地运行

直接用浏览器打开 `index.html` 即可，或起一个静态服务器：

```bash
python -m http.server 8080
```

## 部署

推送到 `main` 分支，GitHub Pages 自动发布。