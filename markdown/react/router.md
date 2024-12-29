# React Router

React Router 是 React 应用中最常用的路由库，它让你能够创建单页应用（SPA）。

## 基础组件

### BrowserRouter
包裹整个应用，启用 React Router。

```jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* 你的应用组件 */}
    </BrowserRouter>
  );
}
```

### Route
定义路由路径和对应的组件。

```jsx
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
  );
}
```

### Link
用于导航的组件。

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
    </nav>
  );
}
```

## Hooks

### useNavigate
编程式导航。

```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // 登录成功后跳转
    navigate('/dashboard');
  };
  
  return <button onClick={handleLogin}>登录</button>;
}
```

### useParams
获取 URL 参数。

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>用户 ID: {id}</div>;
}
```

## 嵌套路由

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}
```

## 路由守卫

```jsx
function PrivateRoute({ children }) {
  const auth = useAuth(); // 自定义 hook 检查认证状态
  const navigate = useNavigate();
  
  if (!auth.isAuthenticated) {
    // 重定向到登录页
    return <Navigate to="/login" replace />;
  }
  
  return children;
} 