# React Hooks

React Hooks 是 React 16.8 引入的新特性，让你在函数组件中使用状态和其他 React 特性。

## useState

用于在函数组件中管理状态。

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect

用于处理副作用，如数据获取、订阅等。

```jsx
import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // 获取用户数据
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
      
    // 清理函数
    return () => {
      // 清理订阅等
    };
  }, [userId]); // 依赖项数组
  
  if (!user) return <div>Loading...</div>;
  
  return <div>{user.name}</div>;
}
```

## useContext

用于获取上下文数据。

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ background: theme === 'dark' ? '#000' : '#fff' }}>
      I am styled by theme context!
    </button>
  );
}
```

## useRef

用于保存可变的引用值。

```jsx
import React, { useRef, useEffect } from 'react';

function TextInputWithFocus() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // 组件挂载时自动聚焦
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" />;
}
```

## 自定义 Hook

你可以创建自定义 Hook 来复用状态逻辑。

```jsx
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
``` 