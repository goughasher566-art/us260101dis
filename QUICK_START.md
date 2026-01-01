# 🚀 快速开始 - GitHub + Vercel 部署

## 3 步完成部署

### 第 1 步：上传到 GitHub

1. 在 GitHub 创建新仓库（例如：`ai-stock-platform`）
2. 打开命令行，进入 `2026010101-US` 目录
3. 执行以下命令：

```bash
git init
git add .
git commit -m "Initial commit: AI Stock Analysis Platform"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 第 2 步：连接 Vercel

1. 访问 https://vercel.com
2. 点击 "Sign Up" 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 选择你刚创建的 GitHub 仓库

### 第 3 步：配置并部署

在 Vercel 配置页面：

- **Framework Preset**: 选择 `Other` 或 `Other (Static)`
- **Root Directory**: 留空（使用根目录）
- **Build Command**: 留空
- **Output Directory**: 留空
- **Install Command**: 留空

然后点击 **"Deploy"** 按钮

## ✅ 完成！

部署完成后，你会得到一个链接，例如：
`https://your-project.vercel.app`

访问根路径 `/` 会自动显示你的页面！

## 📝 文件说明

- `stock-analysis.html` - 主页面文件
- `vercel.json` - Vercel 配置文件（已配置路由）
- `.gitignore` - Git 忽略文件
- `package.json` - 项目配置文件
- `Smart AI Stock Market Tool_files/` - 所有资源文件

## 🔄 更新部署

以后每次修改代码后：
```bash
git add .
git commit -m "Update"
git push
```

Vercel 会自动重新部署！

## ❓ 遇到问题？

查看 `DEPLOY.md` 获取详细说明和故障排除指南。

