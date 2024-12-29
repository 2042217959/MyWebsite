# React 简介

React 是一个用于构建用户界面的 JavaScript 库。它由 Facebook 开发和维护，主要用于构建单页应用程序。

## 为什么选择 React？

### 1. 声明式编程
React 使用声明式的方法来构建用户界面。你只需要描述你想要的界面状态，React 会自动处理 DOM 操作来实现这个状态。

### 2. 组件化
React 采用组件化的开发方式，可以将 UI 拆分成独立、可复用的小块。这使得代码更容易维护和复用。

### 3. 虚拟 DOM
React 使用虚拟 DOM 来提高性能，通过最小化实际 DOM 操作来优化渲染过程。

### 4. 单向数据流
React 采用单向数据流的架构，使得数据的流动更加可预测，便于调试和维护。

## 开始使用 React

```jsx
import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;
```

## React 生态系统

- **React Router**: 路由管理
- **Redux/MobX**: 状态管理
- **Next.js**: 服务端渲染
- **Create React App**: 项目脚手架 