export const knowledgeData = {
  1: {
    title: "React 基础知识",
    category: "前端开发",
    description: "React 的核心概念和基本用法详解",
    menuItems: [
      {
        key: 'introduction',
        label: 'React 简介',
        content: `React 是一个用于构建用户界面的 JavaScript 库。它由 Facebook 开发和维护，主要用于构建单页应用程序。`
      },
      {
        key: 'core-features',
        label: 'React 核心特性',
        content: `
          ### 组件化开发
          React 采用组件化的开发方式，可以将UI拆分成独立、可复用的小块。

          ### 虚拟 DOM
          React 使用虚拟 DOM 来提高性能，减少实际 DOM 操作。

          ### 单向数据流
          数据在 React 应用中单向流动，使得应用的状态管理更加可预测。

          ### JSX 语法
          JSX 是 JavaScript 的语法扩展，让你能够在 JavaScript 中编写类似 HTML 的代码。
        `
      },
      {
        key: 'hooks',
        label: 'React Hooks',
        content: `
          ### useState
          用于在函数组件中管理状态。

          ### useEffect
          用于处理副作用，如数据获取、订阅等。

          ### useContext
          用于获取上下文数据。

          ### useRef
          用于保存可变的引用值。
        `
      },
      {
        key: 'router',
        label: 'React 路由',
        content: `
          ### React Router 基础
          - BrowserRouter
          - Route 组件
          - Link 组件
          - useNavigate Hook

          ### 路由配置
          - 嵌套路由
          - 动态路由
          - 路由守卫
        `
      }
    ],
    updateTime: "2024-03-15",
    readTime: "10 分钟",
    tags: ["React", "前端", "JavaScript"]
  },
  2: {
    title: "Vue.js 开发技巧",
    category: "前端开发",
    description: "Vue.js 项目开发中的最佳实践和常用技巧",
    menuItems: [
      {
        key: 'introduction',
        label: 'Vue.js 简介',
        content: `Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。它的核心库只关注视图层，方便与其他库或项目整合。Vue.js 的设计理念是易学易用，同时也能够满足复杂应用的需求。`
      },
      {
        key: 'core-features',
        label: '核心特性',
        content: `
          ### 响应式数据绑定
          Vue.js 最显著的特性就是响应式系统。当数据改变时，视图会自动更新。这个系统使用了 ES5 的 Object.defineProperty 或 ES6 的 Proxy 来追踪数据的变化。

          ### 组件系统
          Vue.js 的组件系统允许我们构建大型应用，组件是可复用的 Vue 实例，带有名字的可复用组件。组件可以扩展 HTML 元素，封装可重用的代码。

          ### 指令系统
          Vue.js 的指令系统提供了很多内置指令，如 v-if、v-for、v-model 等，同时也支持自定义指令。指令是带有 v- 前缀的特殊属性，用于在模板中执行特定的操作。

          ### 生命周期钩子
          Vue 组件实例在创建时经历一系列的初始化过程，在这个过程中会运行一些叫做生命周期钩子的函数，让我们有机会在特定阶段添加自己的代码。
        `
      },
      {
        key: 'composition-api',
        label: 'Composition API',
        content: `
          ### 为什么使用 Composition API
          - 更好的逻辑复用
          - 更灵活的代码组织
          - 更好的类型推导
          
          ### 核心概念
          - setup 函数
          - ref 和 reactive
          - computed 和 watch
          - 生命周期钩子
          
          ### 最佳实践
          - 使用 ref 还是 reactive
          - 组合式函数（Composables）
          - 响应式数据的解构
        `
      },
      {
        key: 'best-practices',
        label: '最佳实践',
        content: `
          ### 组件设计原则
          - 单一职责原则
          - 保持组件的纯度
          - Props 和事件的正确使用
          - 合理的组件粒度

          ### 状态管理
          - Vuex 的使用场景
          - Pinia 的优势
          - 本地状态 vs 全局状态
          
          ### 性能优化
          - 懒加载和异步组件
          - keep-alive 缓存
          - 虚拟列表
          - 合理的计算属性使用
        `
      }
    ],
    updateTime: "2024-03-16",
    readTime: "12 分钟",
    tags: ["Vue", "前端", "JavaScript"]
  },
  3: {
    title: "Node.js 实践指南",
    category: "后端开发",
    description: "Node.js 服务端开发的实践经验和技术要点",
    menuItems: [
      {
        key: 'introduction',
        label: 'Node.js 概述',
        content: `Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，使得 JavaScript 可以运行在服务器端。它采用事件驱动、非阻塞 I/O 模型，使其轻量又高效，特别适合构建数据密集型的实时应用。`
      },
      {
        key: 'core-modules',
        label: '核心模块',
        content: `
          ### 文件系统（fs）
          - 文件读写操作
          - 目录操作
          - 文件流
          - 文件监控
          
          ### HTTP 模块
          - 创建 HTTP 服务器
          - 处理请求和响应
          - 路由系统
          - 中间件概念
          
          ### 事件模块
          - EventEmitter
          - 事件监听和触发
          - 错误处理
          - 自定义事件
          
          ### 流模块
          - 可读流
          - 可写流
          - 双工流
          - 转换流
        `
      },
      {
        key: 'async-programming',
        label: '异步编程',
        content: `
          ### 回调函数
          - 回调地狱问题
          - 错误处理模式
          - 异步控制流
          
          ### Promise
          - Promise 链式调用
          - 并行操作
          - 错误处理
          - Promise.all/race
          
          ### Async/Await
          - 基本语法
          - 错误处理
          - 并发控制
          - 最佳实践
        `
      },
      {
        key: 'best-practices',
        label: '最佳实践',
        content: `
          ### 错误处理
          - 同步vs异步错误
          - 错误类型
          - 全局错误处理
          - 优雅降级
          
          ### 性能优化
          - 内存管理
          - CPU 密集任务
          - 集群模式
          - 缓存策略
          
          ### 安全实践
          - 输入验证
          - XSS 防护
          - CSRF 防护
          - 安全标头
        `
      }
    ],
    updateTime: "2024-03-17",
    readTime: "15 分钟",
    tags: ["Node.js", "后端", "JavaScript"]
  }
}; 