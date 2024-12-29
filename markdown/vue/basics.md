# Vue.js 开发技巧

## Vue.js 简介

Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。它的核心库只关注视图层，方便与其他库或项目整合。

## 核心特性

### 响应式数据绑定
Vue.js 最显著的特性就是响应式系统。当数据改变时，视图会自动更新。

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">改变消息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    changeMessage() {
      this.message = '消息已更新'
    }
  }
}
</script>
```

### 组件系统
Vue.js 的组件系统允许我们构建大型应用，组件是可复用的 Vue 实例。

```vue
<template>
  <div class="user-card">
    <h2>{{ user.name }}</h2>
    <p>{{ user.role }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
```

## Composition API

### 为什么使用 Composition API
- 更好的逻辑复用
- 更灵活的代码组织
- 更好的类型推导

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
const message = ref('Hello')

function increment() {
  count.value++
}

onMounted(() => {
  console.log('组件已挂载')
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">增加</button>
    <p>{{ message }}</p>
  </div>
</template>
```

## 最佳实践

### 组件设计原则
- 单一职责原则
- 保持组件的纯度
- Props 和事件的正确使用
- 合理的组件粒度

### 性能优化
1. 使用 `v-show` 代替频繁切换的 `v-if`
2. 为 `v-for` 设置正确的 key
3. 使用计算属性代替复杂的模板表达式
4. 使用异步组件处理大型组件

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: Array
})

// 使用计算属性
const filteredItems = computed(() => {
  return props.items.filter(item => item.active)
})
</script>

<template>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
```

### 状态管理
- Vuex 的使用场景
- Pinia 的优势
- 本地状态 vs 全局状态

## 路由管理

使用 Vue Router 进行路由管理：

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
```

## 测试

### 单元测试
使用 Vitest 进行单元测试：

```javascript
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

test('increments value on click', async () => {
  const wrapper = mount(Counter)
  await wrapper.find('button').trigger('click')
  expect(wrapper.text()).toContain('1')
}) 