export const articles = [
  {
    id: 1,
    title: "项目开发记录",
    date: "2023-12-28",
    tags: ["React", "开发笔记"],
    content: `
# 个人网站开发记录

## 项目背景
这是我的第一个个人网站项目，主要用于展示个人作品和分享学习经验。

## 技术选型
- **React**: 用于构建用户界面
- **Styled Components**: 用于样式管理
- **Framer Motion**: 用于实现动画效果

## 开发过程

### 1. 项目初始化
首先使用 Create React App 创建项目：
\`\`\`bash
npx create-react-app my-website
\`\`\`

### 2. 添加路由
使用 React Router 实现路由功能：
\`\`\`javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

### 3. 主题切换实现
使用 Context API 实现主题切换：
\`\`\`javascript
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
\`\`\`

## 遇到的问题和解决方案

### 1. 动画性能优化
**问题**: 页面切换时动画卡顿
**解决**: 使用 Framer Motion 的 \`AnimatePresence\` 组件和 CSS transforms

### 2. 响应式布局
**问题**: 移动端适配不够好
**解决**: 使用 CSS Grid 和 Flexbox，配合媒体查询

## 后续计划
1. 添加博客功能
2. 优化加载性能
3. 添加更多交互动画

## 总结
通过这个项目，我学到了很多关于 React 开发的知识，特别是在状态管理和动画实现方面。
    `
  },
  {
    id: 2,
    title: "React Hooks 使用心得",
    date: "2023-12-29",
    tags: ["React", "Hooks", "教程"],
    content: `
# React Hooks 使用心得

## useState
最基础的 Hook，用于管理组件状态：
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect
用于处理副作用：
\`\`\`javascript
useEffect(() => {
  // 执行副作用
  return () => {
    // 清理副作用
  };
}, [dependencies]);
\`\`\`

## 自定�� Hook
创建可复用的逻辑：
\`\`\`javascript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
\`\`\`
    `
  }
] 