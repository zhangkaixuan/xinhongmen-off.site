# 淮安新红门有限公司官网首版

这是一个零依赖的静态多页官网原型，当前重点是先确认首页、产品方案、客户案例和联系方式这 4 个核心入口的结构与展示方式。

## 页面说明

- `index.html`: 首页
- `product-center.html`: 产品方案页，已合并产品与常见场景内容
- `cases.html`: 客户案例页
- `contact.html`: 联系方式页
- `404.html`: 404 页面

当前导航结构：

- `首页`
- `产品方案`
- `客户案例`
- `联系方式`

## 资源文件说明

- `styles.css`: 页面视觉、响应式布局和动效
- `main.js`: 占位联系方式注入、移动端导航、滚动显现和轮播交互
- `favicon.svg`: 站点图标
- `assets/placeholders/`: 公开可提交的占位底图素材

## 素材占位说明

当前需要真实图片的位置，已经统一切到 `assets/placeholders/` 下的轻量 SVG 占位图。

命名规则：

- 占位图：`page-<page>-<slot>.svg`
- 后续正式素材建议放到：`assets/media/`

对应说明见：

- `assets/README.md`

## 本地预览

直接用浏览器打开 `index.html` 即可，也可以在仓库目录下启动一个静态服务器：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`

## GitHub Pages 部署

仓库已包含 GitHub Pages Actions 工作流：

- `.github/workflows/deploy-pages.yml`

发布方式建议：

1. 仓库推送到 `main`
2. 在 GitHub 仓库设置中，将 Pages 的 Source 设为 `GitHub Actions`
3. 如使用自定义域名，后续再在仓库里补 `CNAME`

仓库同时包含：

- `.nojekyll`
- `404.html`

这套结构适合当前的纯静态多页站直接发布到 GitHub Pages。

## 上线前建议替换

优先在 `main.js` 中替换以下字段：

- `hotline`
- `wechat`
- `address`
- `serviceArea`

同时建议尽快补齐：

- 微信二维码
- 客户案例现场图
- 产品方案相关真实图片

如果后续确认了更多业务信息，建议继续补充：

- 真实项目案例
- 安装现场照片
- 公司门头或办公点照片
- 授权经销商相关素材
- 联系人姓名与手机号
- 公司营业地址与地图链接
- 售后服务时间
