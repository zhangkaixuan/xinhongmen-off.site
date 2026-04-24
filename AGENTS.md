# 仓库指南

## 项目结构与模块组织
这是一个零依赖的静态多页站点，页面文件直接放在仓库根目录，目前保留 `index.html`、`product-center.html`、`cases.html`、`contact.html` 和 `404.html`。其中 `product-center.html` 已合并产品与常见场景内容，`cases.html` 为客户案例页，`contact.html` 为联系方式页。公共样式集中在 `styles.css`，通用交互与联系方式注入集中在 `main.js`。公开素材放在 `assets/`，占位图统一放在 `assets/placeholders/`，命名格式为 `page-<page>-<slot>.svg`。

## 构建、测试与本地开发命令
本项目没有包管理器、打包流程或构建步骤。建议在仓库根目录启动静态服务器进行预览：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。仅做快速查看时，也可以直接用浏览器打开 `index.html`。部署由 [`.github/workflows/deploy-pages.yml`](/home/heropig/code/xinhongmen-off.site/.github/workflows/deploy-pages.yml) 负责，推送到 `main` 后会发布到 GitHub Pages。

## 代码风格与命名约定
保持与现有代码一致：HTML、CSS、JavaScript 使用 2 空格缩进，JavaScript 保留分号，字符串使用双引号。页面文件名、资源文件名采用 kebab-case。联系方式等重复内容应优先复用 `main.js` 中的 `companyProfile`，不要分散硬编码到多个页面。CSS 类名应清晰直接，例如 `site-header`、`product-card-featured`、`feature-slide`。仓库当前没有 ESLint 或 Prettier，修改时以“贴近现有风格、小范围变更”为准。

## 测试说明
当前没有自动化测试。提交前请手动检查所有受影响页面在桌面端和移动端的显示效果，重点验证导航链接、`data-field` 文本注入、电话链接跳转、滚动显现效果，以及轮播/横向滑动内容在手机端的实际展示。如果新增交互，请在 PR 描述中附上简短的手动验证步骤。

## 提交与合并请求规范
仓库目前还没有可参考的提交历史，因此没有既定格式。建议使用简短、明确的祈使句，并优先采用 Conventional Commits，例如 `feat: 补充真实联系方式`、`fix: 修正移动端导航间距`。PR 应包含变更摘要、受影响页面、关联问题链接（如有）以及视觉改动前后截图。由于 `main` 会自动触发部署，合并前必须先完成本地浏览器验证。

## 安全与内容说明
只提交可公开发布的素材。后续新增真实图片或视频时，建议放入 `assets/media/`。不要把私密策划文件、账号凭据或客户专属资料放到站点根目录或其他会被公开部署的位置。
