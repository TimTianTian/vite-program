# ShopMall - 品质购物，尽在掌握

基于 **Vue 3 + TypeScript + Vite** 构建的现代电商前台应用。

## 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | Vue 3 (Composition API + `<script setup>`) |
| 语言 | TypeScript |
| 构建 | Vite 8 |
| UI 组件库 | Element Plus 2（按需引入） |
| 主题 | 自定义橙色主题（`#f97316`） |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

打开 http://localhost:5173 即可看到商城首页。

## 项目结构

```
vite-program/
├── src/
│   ├── App.vue                  # 根组件
│   ├── main.ts                  # 应用入口
│   ├── style.css                # 全局样式 + 设计令牌
│   ├── plugins/
│   │   └── element-plus.ts      # Element Plus 配置入口
│   ├── components/
│   │   ├── NavBar.vue           # 顶部导航栏
│   │   ├── HeroBanner.vue       # 首页横幅
│   │   ├── CategoryGrid.vue     # 商品分类网格
│   │   ├── FeaturedProducts.vue # 精选推荐区
│   │   ├── FlashSale.vue        # 限时秒杀（含倒计时）
│   │   └── FooterSection.vue    # 页脚
│   └── assets/                  # 静态资源
├── openspec/                    # OpenSpec 规范文档
│   ├── config.yaml
│   ├── specs/
│   └── changes/
├── scripts/                     # 验证脚本
└── index.html
```

## 功能特性

- **商城首页** — 导航栏、横幅、分类、商品卡片、秒杀倒计时、页脚
- **响应式设计** — 自适应手机/平板/桌面三档断点
- **按需加载** — Element Plus 组件自动按需引入，Tree Shaking 有效
- **主题定制** — CSS 变量体系，支持一键换色
- **设计规范** — OpenSpec 驱动的 UI 标准规范

## 设计规范

项目使用 [OpenSpec](https://github.com/Fission-AI/OpenSpec) 管理设计规格文档：

```bash
# 查看变更状态
npx openspec list --changes

# 查看 UI 规范
npx openspec list --specs

# 提出新变更
/opsx:propose "你的想法"
```

## 引入的依赖

| 包名 | 用途 |
|---|---|
| `vue` | 前端框架 |
| `element-plus` | UI 组件库 |
| `@element-plus/icons-vue` | 图标库 |
| `unplugin-vue-components` | 组件按需自动引入 |
| `unplugin-auto-import` | API 自动按需引入 |
| `vite` | 构建工具 |
| `typescript` | 类型系统 |
| `vue-tsc` | Vue 类型检查 |

## 构建体积

| 资源 | 体积 (gzip) |
|---|---|
| JS | ~75 KB |
| CSS | ~3.5 KB |
| HTML | ~0.5 KB |
