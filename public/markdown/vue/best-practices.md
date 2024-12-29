# Vue.js 最佳实践

## 组件设计原则

### 1. 单一职责原则
每个组件应该只负责一个功能。如果一个组件变得过于复杂，考虑将其拆分为多个小组件。

### 2. 保持组件的纯度
尽量使用计算属性而不是方法来处理数据转换，这样可以利用 Vue 的缓存机制。

```vue
<script>
export default {
  props: ['items'],
  computed: {
    filteredItems() {
      return this.items.filter(item => item.active)
    }
  }
}
</script>
```

### 3. Props 和事件的正确使用
- Props 用于父组件向子组件传递数据
- 事件用于子组件向父组件通信

```vue
<!-- 子组件 -->
<template>
  <button @click="$emit('update', newValue)">
    更新
  </button>
</template>

<!-- 父组件 -->
<template>
  <child-component
    :value="value"
    @update="handleUpdate"
  />
</template>
```

## 性能优化

### 1. 合理使用 v-show 和 v-if
- `v-show` 适用于频繁切换的元素
- `v-if` 适用于条件很少改变的情况

```vue
<!-- 频繁切换使用 v-show -->
<div v-show="isVisible">
  频繁切换的内容
</div>

<!-- 很少改变使用 v-if -->
<div v-if="isLoggedIn">
  用户信息
</div>
```

### 2. 使用 key 优化列表渲染
为 `v-for` 设置唯一的 key，帮助 Vue 优化虚拟 DOM 的更新。

```vue
<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
```

### 3. 异步组件
使用异步组件处理大型组件，减少首屏加载时间。

```javascript
// 异步加载组件
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)
```

### 4. 使用 keep-alive 缓存组件
对于频繁切换的组件，使用 `keep-alive` 保持其状态。

```vue
<template>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>
```

## 状态管理

### Vuex vs Pinia

#### Vuex 适用场景
- 大型应用
- 需要严格的状态管理
- 需要状态快照和时间旅行调试

```javascript
// Vuex store
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
```

#### Pinia 优势
- 更简单的 API
- 更好的 TypeScript 支持
- 更小的包体积
- 不需要嵌套模块

```javascript
// Pinia store
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 测试

### 单元测试
使用 Vitest 和 Vue Test Utils 进行测试：

```javascript
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

test('increments value on click', async () => {
  const wrapper = mount(Counter)
  
  await wrapper.find('button').trigger('click')
  
  expect(wrapper.text()).toContain('1')
}) 