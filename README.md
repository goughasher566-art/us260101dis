# AI Stock Analysis Platform

智能股票分析平台落地页

## 部署说明

### 通过 Vercel 部署

1. **准备 GitHub 仓库**
   - 在 GitHub 上创建一个新仓库
   - 将所有文件上传到仓库

2. **连接 Vercel**
   - 访问 [Vercel](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的 GitHub 仓库

3. **配置部署**
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认（或设置为仓库根目录）
   - Build Command: 留空（静态文件无需构建）
   - Output Directory: 留空

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成
   - 获得部署链接

### 本地开发

如果需要本地预览：

```bash
# 使用 Python 简单服务器
python -m http.server 8000

# 或使用 Node.js http-server
npx http-server -p 8000
```

然后访问 `http://localhost:8000/stock-analysis.html`

## 文件结构

```
.
├── stock-analysis.html          # 主页面文件
├── Smart AI Stock Market Tool_files/  # 资源文件目录
│   ├── anniu.png
│   ├── bg.webm
│   ├── bg1.gif
│   ├── gtag.js
│   ├── gtag_js1.js
│   ├── index.js
│   ├── jquery.js
│   ├── style.css
│   └── ...
├── vercel.json                  # Vercel 配置文件
├── .gitignore                   # Git 忽略文件
└── README.md                    # 说明文档
```

## 功能特性

- ✅ 智能股票分析界面
- ✅ WhatsApp 跳转功能
- ✅ Google Analytics 集成
- ✅ 响应式设计
- ✅ 防关联处理

## 注意事项

- 确保所有资源文件路径正确
- Google Analytics ID 已配置
- 跳转链接已设置为 `https://ldd8868.com/IFBbai`

## 技术支持

如有问题，请检查：
1. 文件路径是否正确
2. Vercel 部署日志
3. 浏览器控制台错误信息

