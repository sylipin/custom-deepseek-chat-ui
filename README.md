# DeepSeek 聊天界面

一个基于 React、TypeScript 和 Shadcn UI 构建的自定义 DeepSeek 聊天界面。

## 功能特点

- 🎨 美观的 UI 设计，基于 Shadcn UI 组件库
- 🌓 支持亮色/暗色主题切换
- ✨ 平滑的过渡动画效果
- 📱 响应式设计，适配不同设备
- 💬 模拟与 DeepSeek AI 的对话

## 技术栈

- React 18
- Next.js 13
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI

## 开始使用

1. 克隆仓库

```bash
git clone https://github.com/yourusername/custom-deepseek-chat-ui.git
cd custom-deepseek-chat-ui
```

2. 安装依赖

```bash
npm install
```

3. 运行开发服务器

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
npm start
```

## 自定义

- 修改 `styles/globals.css` 中的 CSS 变量来自定义主题颜色
- 在 `components` 目录中修改或扩展组件
- 在 `pages` 目录中添加新页面

## 连接到 DeepSeek API

要将此界面连接到实际的 DeepSeek API，请修改 `components/chat-container.tsx` 中的 `sendMessage` 函数，实现与 API 的通信。

## 许可证

MIT
