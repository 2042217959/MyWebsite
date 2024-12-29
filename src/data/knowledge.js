export const knowledgeData = {
  'css-basics': {
    title: "css",
    category: "前端开发",
    description: "css学习",
    menuItems: [
      {
        key: '布局',
        label: '布局',
        markdownPath: '/markdown/css/布局.md'
      },
    ],
    updateTime: "2024-03-16",
    tags: ["css", "前端"]
  },
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
    menuItems: [
      {
        key: 'introduction',
        label: 'Vue.js 简介',
        markdownPath: '/markdown/vue/introduction.md'
      },
      {
        key: 'core-features',
        label: '核心特性',
        markdownPath: '/markdown/vue/core-features.md'
      },
      {
        key: 'composition-api',
        label: 'Composition API',
        markdownPath: '/markdown/vue/composition-api.md'
      },
      {
        key: 'best-practices',
        label: '最佳实践',
        markdownPath: '/markdown/vue/best-practices.md'
      }
    ],
    updateTime: "2024-03-16",
    tags: ["Vue", "前端", "JavaScript"]
  },
  'git': {
    title: "git使用",
    category: "前端开发",
    description: "git 项目开发中的最佳实践和常用技巧",
    menuItems: [
      {
        key: 'introduction',
        label: 'git.js 简介',
        markdownPath: '/markdown/git/introduction.md'
      }
    ],
    updateTime: "2024-03-16",
    tags: ["git", "前端"]
  }
} 
// 当用户点击菜单项时，系统会根据 key 找到对应的 markdown 文件路径，然后加载并显示内容。
// 而用户在界面上看到的是 label 指定的文本。