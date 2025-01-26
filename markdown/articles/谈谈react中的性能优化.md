文章主要介绍了 React 组件性能优化的五种方式，包括跳过不必要组件的更新、列表项使用 key 属性、批量更新，减少 Render 次数、组件懒加载、避免内联函数等。
# 一、跳过不必要组件的更新
## 1. 使用PureComponent（类组件）和React.memo（函数组件）
  -  **(1) PureComponent**
PureComponent 是 React 的一个基类组件，它自动实现了 shouldComponentUpdate 方法，用于优化组件的性能。通过浅比较（shallow comparison）props 和 state，PureComponent 可以判断当前渲染是否必要，从而避免不必要的渲染。
	 - 工作原理：
PureComponent 会自动对比组件的 props 和 state，只有在它们发生变化时，组件才会重新渲染。如果 props 和 state 没有发生变化，PureComponent 会阻止重新渲染。

	 - 示例：
```javascript
class MyComponent extends React.PureComponent {
  render() {
    console.log('Rendering MyComponent');
    return <div>{this.props.value}</div>;
  }
}

// 如果 MyComponent 的 props 没有变化，它就不会重新渲染。
```
 - **(2) React.memo**
React.memo 是一个高阶组件（HOC），可以用于函数组件。它与 PureComponent 的作用类似，都是通过避免不必要的重新渲染来提高性能。React.memo 会对组件的 props 进行浅比较，如果 props 没有变化，则阻止重新渲染。

	 - 工作原理：
React.memo 会对传入的函数组件进行优化，只有在 props 发生变化时，组件才会重新渲染。

	 - 示例：

```javascript
const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
});

// 如果 MyComponent 的 props 没有变化，它就不会重新渲染。
自定义比较函数：
```

React.memo 还允许传入一个自定义的**比较函数**，来决定何时重新渲染组件。自定义比较函数会接收两个参数：**当前的 props** 和**下一个 props**。如果返回 true，则表示组件不需要重新渲染；返回 false，表示组件需要重新渲染。

```javascript
const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
}, (prevProps, nextProps) => {
  // 只有当 value 属性发生变化时才重新渲染
  return prevProps.value === nextProps.value;
});
```

## 2. useMemo 和 useCallback
**useMemo** 和 **useCallback** 都是 React 中的性能优化钩子（hook），它们可以帮助避免不必要的重新计算或重新创建函数，从而提升应用的性能。它们的工作方式有些相似，但在实际用途上略有不同。下面是对这两个钩子的详细解释。
 - **1. useMemo**
	 -  useMemo 会返回一个“记忆”值，只有在其依赖项发生变化时，才会重新计算该值。它可以确保只有在依赖项发生变化时才会执行计算，否则返回上一次计算的结果。
 	-  示例：

```javascript
import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  // 只有当 a 或 b 改变时，才会重新计算 result
  const result = useMemo(() => {
    console.log('Recomputing result');
    return a + b;
  }, [a, b]); // 依赖项：a 和 b

  return <div>Result: {result}</div>;
}
```

在这个例子中，useMemo 会缓存 result，只有当 a 或 b 发生变化时才会重新计算它。如果 a 和 b 没有变化，React 会直接返回缓存的 result。
 - **2. useCallback**
	 - useCallback 用于记忆化函数，避免在每次渲染时都重新创建相同的函数实例。它是 useMemo 的特化版本，只不过它专门用于**缓存函数**，而不是一般的值。它只有在其依赖项发生变化时，才会重新创建该函数。如果依赖项没有变化，它会返回之前的函数实例。

	 -  示例：

```javascript
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // 依赖项为空数组，意味着这个函数只会在首次渲染时创建

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
    </div>
  );
}
```

在这个例子中，handleClick 函数只有在 handleClick 的依赖项变化时才会重新创建。由于 handleClick 的依赖项是空数组 [ ]，所以这个函数只会在**首次渲染时创建一次**，而不会在每次渲染时都创建新实例。
 - **3. useMemo vs useCallback**
	 - useMemo 用于记忆化计算结果（值）。
	 - useCallback 用于记忆化函数。
两者的使用方式非常相似，差别在于 useMemo 处理的是值（通常是**计算结果**），而 useCallback 处理的是**函数**。
# 二、列表项使用 key 属性
当渲染列表项时，如果不给组件设置不相等的属性 key，就会收到如下报警。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/47ec52c159584b6b9fc2cae6f9c092c7.png)

key 属性到底在优化了什么呢？
举个 ，在不使用 key 时，组件两次 Render 的结果如下。

```javascript
<!-- 前一次 Render 结果 -->
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
 
<!-- 新的 Render 结果 -->
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

此时 React 的 Diff 算法会按照

出现的先后顺序进行比较，得出结果为需要更新前两个

并创建内容为 Villanova 的li，一共会执行两次 DOM 更新、一次 DOM 创建。

如果加上 React 的 key 属性，两次 Render 结果如下。

```javascript
<!-- 前一次 Render 结果 -->
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
 
<!-- 新的 Render 结果 -->
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

React Diff 算法会把 key 值为 2015 的虚拟 DOM 进行比较，发现 key 为 2015 的虚拟 DOM 没有发生修改，不用更新。同样，key 值为 2016 的虚拟 DOM 也不需要更新。结果就只需要创建 key 值为 2014 的虚拟 DOM。相比于不使用 key 的代码，使用 key 节省了两次 DOM 更新操作。

如果把例子中的 < l i >换成自定义组件，并且自定义组件使用了 PureComponent 或 React.memo 优化。那么使用 key 属性就不只节省了 DOM 更新，还避免了组件的 Render 过程。

React 官方推荐将每项数据的 ID 作为组件的 key，以达到上述的优化目的。并且不推荐使用每项的索引作为 key，因为传索引作为 key 时，就会退化为不使用 key 时的代码。那么是否在所有列表渲染的场景下，使用 ID 都优于使用索引呢？

答案是否定的，在常见的分页列表中，第一页和第二页的列表项 ID 都是不同，假设每页展示三条数据，那么切换页面前后组件 Render 结果如下。

```javascript
<-- 第一页的列表项虚拟 DOM -->
<li key="a">dataA</li>
<li key="b">dataB</li>
<li key="c">dataC</li>
 
<-- 切换到第二页后的虚拟 DOM -->
<li key="d">dataD</li>
<li key="e">dataE</li>
<li key="f">dataF</li>
```

切换到第二页后，由于所有< l i >的 key 值不同，所以 Diff 算法会将第一页的所有 DOM 节点标记为删除，然后将第二页的所有 DOM 节点标记为新增。整个更新过程需要三次 DOM 删除、三次 DOM 创建。如果不使用 key，Diff 算法只会将三个

节点标记为更新，执行三次 DOM 更新。参考 Demo 没有添加、删除、排序功能的分页列表，使用 key 时每次翻页耗时约为 140ms，而不使用 key 仅为 70ms。

尽管存在以上场景，React 官方仍然推荐使用 ID 作为每项的 key 值。其原因有两：

在列表中执行删除、插入、排序列表项的操作时，使用 ID 作为 key 将更高效。而翻页操作往往伴随着 API 请求，DOM 操作耗时远小于 API 请求耗时，是否使用 ID 在该场景下对用户体验影响不大。

使用 ID 做为 key 可以维护该 ID 对应的列表项组件的 State。举个例子，某表格中每列都有普通态和编辑态两个状态，起初所有列都是普通态，用户点击第一行第一列，使其进入编辑态。然后用户又拖拽第二行，将其移动到表格的第一行。如果开发者使用索引作为 key，那么第一行第一列的状态仍然为编辑态，而用户实际希望编辑的是第二行的数据，在用户看来就是不符合预期的。尽管这个问题可以通过将「是否处于编辑态」存放在数据项的数据中，利用 Props 来解决，但是使用 ID 作为 key 不是更香吗？
# 三、批量更新，减少 Render 次数
有一个常见的react面试题：React 类组件中 setState 是同步的还是异步的？如果你对类组件中的 setState 不熟悉，可以将其类比为 React 函数组件中的 useState 和 useState 的第二个返回值（即更新函数）。

```javascript
const [counter, setCounter] = useState(0);
```

这里的 setCounter 和 setState 是相似的，它们都用于更新状态。但 useState 返回的更新函数是同步的，你通常不会在调用更新函数之后立即读取最新的状态值，因为状态更新仍然会触发重渲染。
答案是异步的， 怎么理解呢?
可以通过一个简单的例子来说明异步和同步的不同：

```javascript
class MyComponent extends React.Component {
  state = { counter: 0 };

  handleClick = () => {
    console.log(this.state.counter);  // 假设当前是 0
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);  // 输出仍然是 0，而不是 1
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```
在点击按钮时，this.setState 并不会立即改变 state.counter，因此第二次 console.log 会输出的是旧的状态（0），而不是更新后的 1。这说明 setState 可能是异步的，直到 React 完成本轮事件循环并执行更新。
批量更新 setState 时，多次执行 setState 只会触发一次 Render 过程。相反在立即更新 setState 时，每次 setState 都会触发一次 Render 过程，就存在性能影响。假设有如下组件代码，该组件在 getData() 的 API 请求结果返回后，分别更新了两个 State 。

```javascript
import React, { useState, useEffect } from 'react';

function NormalComponent() {
  const [list, setList] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setList(data.list);
      setInfo(data.info);
    })();
  }, []);

  return (
    <div>
      非批量更新组件时 Render 次数：
      {renderOnce('normal')}
    </div>
  );
}

export default NormalComponent;
```

该组件会在 setList(data.list) 后触发组件的 Render 过程，然后在 setInfo(data.info) 后再次触发 Render 过程，造成性能损失。遇到该问题，开发者有两种实现批量更新的方式来解决该问题：

将多个 State 合并为单个 State。例如 **useState({ list: null, info: null })** 替代 list 和 info 两个 State，从而减少了组件的渲染次数。
使用 React 官方提供的 unstable_batchedUpdates 方法，将多次 setState 封装到 unstable_batchedUpdates 回调中。修改后代码如下：

```javascript
function BatchedComponent() {
  const [list, setList] = useState(null)
  const [info, setInfo] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await getData()
      unstable_batchedUpdates(() => {
        setList(data.list)
        setInfo(data.info)
      })
    })();
  }, [])

  return (
    <div>
      批量更新组件时 Render 次数：
      {renderOnce('batched')}
    </div>
  )
}
```
# 四、懒加载（Lazy Loading）
懒加载是指在需要的时候才加载资源，而不是在应用启动时就加载所有资源。这样可以减少初次加载时的资源大小，提升页面的加载速度。React 提供了 **React.lazy** 和 **Suspense** 来实现懒加载。

## 1. React.lazy：
React.lazy 允许我们动态地导入组件，这意味着这个组件只有在真正需要时才会加载。例如，只有当用户访问某个页面或某个功能时，相关的组件才会被加载到页面中，而不是一开始就加载所有的组件。

## 2. Suspense：
Suspense 用来处理懒加载的过程。它是一个包裹组件，用来指定在组件加载过程中显示的内容（例如“Loading...”）。当被懒加载的组件还没有加载完成时，Suspense 会展示 fallback 属性中的内容。

### 示例代码：

```javascript
import React, { Suspense, lazy } from 'react';

// 使用 lazy() 来懒加载 MyComponent 组件
const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      {/* Suspense 用来包裹懒加载的组件，fallback 用于指定加载时的内容 */}
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}
```

在这个例子中：

MyComponent 组件是通过 lazy 动态导入的。
Suspense 会在 MyComponent 加载过程中显示“Loading...”字样。
一旦 MyComponent 加载完成，React 会替换掉加载中的占位符，展示实际的组件。
## 为什么懒加载有助于性能优化？

 - 减少初次加载时间：初次渲染时只会加载必要的代码，其他部分的组件和资源会在用户需要时再加载。
 - 提升用户体验：通过避免一次性加载大量资源，页面加载速度会更快，提升用户体验。

# 五、避免内联函数
内联函数是指将函数直接写在 JSX 代码中，例如将 onClick 事件的处理函数写在 JSX 内部。每次组件渲染时，内联函数都会被重新创建，这可能导致一些性能问题，特别是在子组件通过 props 接收函数时，可能会导致子组件不必要的重新渲染。

问题：
在 React 中，组件每次渲染时都会重新创建每个函数实例。如果在 JSX 内部使用内联函数（比如 ***onClick={() => { }}***），React 会认为这是一个新的函数实例，从而触发重新渲染子组件，增加不必要的性能开销。

解决方案：**使用 useCallback**：
React 提供了 useCallback Hook，可以用来缓存函数的引用，只有当依赖的值发生变化时，才会重新创建函数实例。这样可以避免每次渲染时都创建新的函数，减少子组件的重新渲染。

示例代码：

```javascript
import React, { useCallback } from 'react';

function App() {
  // 使用 useCallback 来缓存 handleClick 函数，避免每次渲染都创建新的函数实例
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);  // 传递空依赖数组，表示函数不会在后续渲染中重新创建

  return <button onClick={handleClick}>Click me</button>;
}
```

在这个例子中：

useCallback 保证了 handleClick 函数只有在组件第一次渲染时被创建，以后的渲染都复用相同的函数实例。
这样可以避免将一个新函数实例作为 onClick 的回调传递给 button 元素，从而避免子组件不必要的重新渲染。

为什么避免内联函数有助于性能优化？

 - 减少渲染次数：每次渲染时，内联函数会创建新的函数实例，导致 React 认为这是一个新的 props，从而重新渲染子组件。使用 useCallback 可以确保函数不会频繁变化，避免子组件不必要的重新渲染。
 - 减少内存消耗：内联函数会增加内存使用量，因为每次渲染时都会创建新的函数实例，尤其是在大型应用中，频繁创建新函数可能会导致性能下降。

# 参考文章：
[React 性能优化完全指南，将自己这几年的心血总结成这篇！](https://cloud.tencent.com/developer/article/1810002)
[React 函数式组件性能优化指南](https://cloud.tencent.com/developer/article/1541280)
