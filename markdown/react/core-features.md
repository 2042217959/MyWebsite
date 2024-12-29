# React 核心特性

## 组件化开发

React 的核心思想是组件化开发。组件是 React 应用的基本构建块，它们可以帮助你将界面拆分成独立可复用的部分。

### 函数组件
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 类组件
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Props 和 State

### Props（属性）
Props 是组件的只读属性，用于组件间的数据传递。

```jsx
// 父组件传递 props
<UserProfile name="Alice" age={25} />

// 子组件接收 props
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

### State（状态）
State 是组件的内部状态，可以随时间变化。

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

## 生命周期

React 组件的生命周期分为三个主要阶段：

### 1. 挂载（Mounting）
- constructor()
- render()
- componentDidMount()

### 2. 更新（Updating）
- shouldComponentUpdate()
- render()
- componentDidUpdate()

### 3. 卸载（Unmounting）
- componentWillUnmount()

在函数组件中使用 useEffect 处理生命周期：

```jsx
function ExampleComponent() {
  useEffect(() => {
    // 组件挂载后执行
    console.log('Component mounted');
    
    // 返回清理函数
    return () => {
      // 组件卸载前执行
      console.log('Component will unmount');
    };
  }, []); // 空依赖数组

  return <div>Example</div>;
}
```

## 事件处理

React 事件处理采用驼峰命名法：

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      点击我
    </button>
  );
}
```

## 条件渲染

React 中可以使用多种方式进行条件渲染：

```jsx
function Greeting({ isLoggedIn }) {
  // 使用三元运算符
  return (
    <div>
      {isLoggedIn ? (
        <h1>欢迎回来！</h1>
      ) : (
        <h1>请登录</h1>
      )}
    </div>
  );
}

function Message({ isVisible }) {
  // 使用逻辑与运算符
  return (
    <div>
      {isVisible && <p>这是一条消息</p>}
    </div>
  );
}
```

## 列表渲染

使用 map 方法渲染列表：

```jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```

## 表单处理

React 中的受控组件：

```jsx
function Form() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">提交</button>
    </form>
  );
}
```