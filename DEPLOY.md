# Vercel 部署指南

## 快速部署步骤

### 方法一：通过 GitHub + Vercel（推荐）

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库，然后执行：
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库

3. **配置项目**
   - Framework Preset: **Other** 或 **Other (Static)**
   - Root Directory: 留空（使用根目录）
   - Build Command: 留空（静态文件无需构建）
   - Output Directory: 留空
   - Install Command: 留空

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成（约 1-2 分钟）
   - 获得部署链接，例如：`https://your-project.vercel.app`

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd 2026010101-US
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 访问地址

部署完成后，访问：
- 根路径 `/` 会自动重定向到 `/stock-analysis.html`
- 或直接访问 `/stock-analysis.html`

## 自定义域名

1. 在 Vercel 项目设置中
2. 点击 "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS

## 环境变量（如需要）

如果将来需要添加环境变量：
1. 在 Vercel 项目设置中
2. 点击 "Environment Variables"
3. 添加变量

## 注意事项

- ✅ 所有静态资源文件已包含
- ✅ `vercel.json` 已配置路由重写
- ✅ 根路径 `/` 会自动跳转到主页面
- ✅ 所有资源路径使用相对路径，无需修改

## 故障排除

### 如果页面无法访问

1. 检查 Vercel 部署日志
2. 确认所有文件都已上传到 GitHub
3. 检查 `vercel.json` 配置是否正确

### 如果资源文件加载失败

1. 确认 `Smart AI Stock Market Tool_files` 目录存在
2. 检查文件路径是否正确
3. 查看浏览器控制台的错误信息

## 更新部署

每次推送代码到 GitHub，Vercel 会自动重新部署。

如需手动触发：
1. 在 Vercel 项目页面
2. 点击 "Redeploy"

