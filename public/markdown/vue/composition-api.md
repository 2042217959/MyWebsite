# Composition API

## 为什么使用 Composition API？

Composition API 是 Vue 3 中引入的新特性，它提供了一种更灵活的方式来组织组件逻辑。主要优势包括：

- 更好的逻辑复用
- 更灵活的代码组织
- 更好的类型推导
- 更小的打包体积

## 基础用法

### Setup 函数
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

## 响应式系统

### ref 和 reactive
```vue
<script setup>
import { ref, reactive } from 'vue'

// ref 用于基本类型
const count = ref(0)

// reactive 用于对象
const state = reactive({
  user: {
    name: 'John',
    age: 25
  },
  settings: {
    theme: 'dark'
  }
})
</script>
```

### computed 和 watch
```vue
<script setup>
import { ref, computed, watch } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// 计算属性
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// 侦听器
watch(firstName, (newValue, oldValue) => {
  console.log(`名字从 ${oldValue} 变成了 ${newValue}`)
})
</script>
```

## 生命周期钩子

```vue
<script setup>
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount
} from 'vue'

onBeforeMount(() => {
  console.log('组件即将挂载')
})

onMounted(() => {
  console.log('组件已挂载')
})

onBeforeUpdate(() => {
  console.log('组件即将更新')
})

onUpdated(() => {
  console.log('组件已更新')
})

onBeforeUnmount(() => {
  console.log('组件即将卸载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
</script>
```

## 组合式函数（Composables）

```javascript
// useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    increment,
    decrement
  }
}
```

使用组合式函数：
```vue
<script setup>
import { useCounter } from './useCounter'

const { count, increment, decrement } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
``` 