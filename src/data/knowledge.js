export const knowledgeData = {
  'react-basics': {
    title: "React 基础知识",
    category: "前端开发",
    description: "React 的核心概念和基本用法详解",
    menuItems: [
      {
        key: 'introduction',
        label: 'React 简介',
        markdownPath: '/markdown/react/introduction.md'
      },
      {
        key: 'core-features',
        label: 'React 核心特性',
        markdownPath: '/markdown/react/core-features.md'
      },
      {
        key: 'hooks',
        label: 'React Hooks',
        markdownPath: '/markdown/react/hooks.md'
      },
      {
        key: 'router',
        label: 'React 路由',
        markdownPath: '/markdown/react/router.md'
      }
    ],
    updateTime: "2024-03-15",
    tags: ["React", "前端", "JavaScript"]
  },
  'vue-basics': {
    title: "Vue.js 开发技巧",
    category: "前端开发",
    description: "Vue.js 项目开发中的最佳实践和常用技巧",
    // 示例：单个 markdown 文件
    markdownPath: '/markdown/vue/basics.md',
    updateTime: "2024-03-16",
    tags: ["Vue", "前端", "JavaScript"]
  }
} 