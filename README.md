# 数码图鉴 | Digital Gallery

手机 · 耳机 · 充电器 · 充电宝 · 处理器 参数图鉴与数据分析站，纯静态站点，无需构建。

## 访问

- 自定义域名：https://xiaomowiki.top
- GitHub Pages：https://fbxiaomo.github.io/digital-gallery/

## 技术栈

纯 HTML + CSS + JavaScript，数据以 JS 文件形式存放于 `db/` 目录，无构建步骤、无后端依赖。

## 目录结构

```
landing.html        引导页（站点入口，含设备精选与使用说明）
index.html          图鉴主页面
analysis.html       数据分析页
device.html         设备独立详情页（?category=&id=）
easter-egg.js       白厄彩蛋脚本（按需异步加载）
yae-easter-egg.js   八重神子彩蛋脚本（按需异步加载）
image-sw.js         图片 Service Worker 缓存
db/                 数据与图片
  phones.js         手机数据
  earphones.js      耳机数据
  chargers.js       充电器数据
  powerbanks.js     充电宝数据
  processors.js     处理器数据
  changelogs.js     更新日志
  images/           设备图片（按分类存放）
easter-egg-img/     白厄彩蛋图片
yae-easter-egg-img/ 八重神子彩蛋图片
fonts/              站点字体
logo/               图标与站点清单
docs/               课程项目文档（PRD、迭代计划）
```

## 数据规模

| 分类 | 条数 |
| --- | ---: |
| 手机 | 69 |
| 耳机 | 101 |
| 充电器 | 61 |
| 充电宝 | 21 |
| 处理器 | 139 |

## 本地运行

直接用浏览器打开 `landing.html` 或 `index.html` 即可，或起一个静态服务器：

```bash
python -m http.server 8080
```

## 部署

推送到 `main` 分支，GitHub Pages 自动发布。
