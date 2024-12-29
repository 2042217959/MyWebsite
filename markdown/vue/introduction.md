# Vue.js 简介

Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。它的核心库只关注视图层，方便与其他库或项目整合。Vue.js 的设计理念是易学易用，同时也能够满足复杂应用的需求。

## 为什么选择 Vue.js？

### 1. 渐进式框架
Vue 可以根据你的需求逐步集成更多功能。你可以只使用核心视图层，也可以引入完整的工具链。

### 2. 响应式设计
Vue 的响应式系统让数据驱动界面变得简单直观。当数据改变时，视图会自动更新。

### 3. 组件化开发
Vue 采用组件化的开发方式，让你能够构建可维护、可复用的界面组件。

### 4. 强大的生态系统
- Vue Router 用于路由管理
- Vuex/Pinia 用于状态管理
- Vue CLI 用于项目脚手架
- Vite 用于开发构建

## 基本示例

```vue
<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">改变问候语</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Vue!'
    }
  },
  methods: {
    changeGreeting() {
      this.greeting = '你好，Vue！'
    }
  }
}
</script>
``` 