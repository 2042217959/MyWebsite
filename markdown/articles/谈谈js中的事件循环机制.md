本篇文章来讲解js中的事件循环机制，涉及到的知识点有**单线程**、**同步任务和异步任务**、**宏任务**和**微任务**。

## JavaScript是单线程

作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。肯定有人会问，为什么js不能是多线程呢？那我们可以假定JavaScript如果同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准呢。所以这决定了它只能是单线程，否则会带来很复杂的同步问题

JavaScript运行时包含以下几个主要部分：

*   **调用栈（Call Stack）** ：这是代码执行的地方，所有的同步代码都会在这里执行。当调用一个函数时，它会被压入调用栈并开始执行。函数执行完毕后，它会被弹出调用栈。
*   **事件队列（Event Queue）** ：异步操作完成后，相关的回调函数会被放入事件队列中等待执行。例如，当定时器（setTimeout）到时，其回调函数会被放入事件队列。
*   **事件循环（Event Loop）** ：事件循环会监视调用栈和事件队列。如果调用栈为空，它会从事件队列中取出一个事件，并将其对应的回调函数放入调用栈中执行。这个过程会不断重复，形成事件循环。

## 同步任务和异步任务

**同步任务**：即主线程上的任务，按照顺序由上⾄下**依次执⾏**，当前⼀个任务执⾏完毕后，才能执⾏下⼀个任务。

**异步任务**：不进⼊主线程，⽽是**进⼊任务队列**的任务，执行完毕之后会产生一个**回调函数**，并且通知主线程。当主线程上的任务执行完后，就会调取最早通知自己的**回调函数**，使其进入主线程中执行。

## 宏任务和微任务

除了广义的同步任务和异步任务，JS 单线程中的任务又可以细分为宏任务和微任务。

*   宏任务（macro-task）：**一般**是 **JS 引擎和宿主环境**发生通信产生的回调任务，比如 setTimeout，setInterval 是浏览器进行计时的，其中回调函数的执行时间需要浏览器通知到 JS 引擎，网络模块, I/O处理的通信回调也是。包含有 setTimeout，setInterval，DOM事件回调，ajax请求结束后的回调，整体 script 代码，setImmediate。

*   微任务（micro-task）：**一般**是宏任务在线程中执行时产生的回调，如 Promise，process.nextTick，Object.observe(已废弃)， MutationObserver（DOM监听），这些都是 JS 引擎自身可以监听到回调。

    *   使用微任务的最主要原因归纳为：**确保任务顺序的一致性**，即便当结果或数据是同步可用的，也要同时减少操作中用户可感知到的延迟而带来的风险。

*   宏任务优先级，**主代码块** > setImmediate > MessageChannel > **setTimeout** / **setInterval**

*   微任务优先级，process.nextTick > **Promise** > **MutationObserver**（DOM监听）

浏览器中常用的宏任务和微任务：

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8be0ee937bc542e99da7bca0383305c6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6a2U6IqL5bCP54uX:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTY2MDc0MDM3NjQ4Mjk3MSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737296449&x-orig-sign=D62ZbHYUFYiIkn9rYfiNckyxwQg%3D)

## 总的执行机制如下：

第一步：先执行主线程里面的同步任务，同时将一些异步任务放到任务队列里面，等到主线程的调用栈为空的时候，再从任务队列里面执行异步任务。

第二步：检测任务队列里面是否有微任务，若微队列不为空，则执行微队列里面的微任务，等到微任务全部执行完，再检测是否有宏队列，有的话则取出宏队列中的一个宏任务执行。

第三步：执行完第一个宏任务之后会继续检测微队列是否为空，如果有新插入的任务，就继续执行第二步；如果微队列为空，则继续执行宏队列中的下一个任务，然后再继续循环执行第三步；

练习题目：

```jsx
console.log('1')
setTimeout(function callback(){
	console.log('2')
}, 1000)

new Promise((resolve, reject) => {
    console.log('3')
    resolve()
})
.then(res => {
    console.log('4');
})

console.log('5')

```

答案是：1 3 5 4 2

*注意 Promise构造函数是同步执行，.then方法为异步执行；*

```jsx
setTimeout( () => {
  console.log('1')
  Promise.resolve().then( () => {
  console.log('2')
  })
},0)

new Promise((resolve, reject) => {
    console.log('3')
    resolve()
})
.then(res => {
    console.log('4');
})

console.log('5')
```

答案是：3 5 4 1 2

参考资料：[深入理解Javascript中的event loop（事件循环）机制\_javascript eventloop-CSDN博客](https://blog.csdn.net/qq_44182284/article/details/121158680)

[程序员 - 面试官：谈谈你对javascript事件循环机制的理解 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000045200511)
