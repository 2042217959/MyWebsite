# Vue.js 核心特性

## 响应式数据绑定

Vue.js 最显著的特性就是响应式系统。当数据改变时，视图会自动更新。这个系统使用了 ES5 的 Object.defineProperty 或 ES6 的 Proxy 来追踪数据的变化。

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

## 组件系统

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

## 指令系统

Vue.js 提供了一系列内置指令：

### v-if 条件渲染
```vue
<div v-if="isVisible">这个元素只在 isVisible 为 true 时显示</div>
```

### v-for 列表渲染
```vue
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>
```

### v-model 双向绑定
```vue
<input v-model="message">
<p>输入的内容：{{ message }}</p>
```

### v-on 事件处理
```vue
<button v-on:click="handleClick">点击我</button>
<!-- 简写形式 -->
<button @click="handleClick">点击我</button>
```

## 计算属性和侦听器

### 计算属性
```vue
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
```

### 侦听器
```vue
<script>
export default {
  data() {
    return {
      question: ''
    }
  },
  watch: {
    question(newValue, oldValue) {
      console.log('问题从', oldValue, '变成了', newValue)
    }
  }
}
</script>
``` 