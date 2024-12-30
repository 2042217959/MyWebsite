# 现代 CSS 布局技巧

现代 CSS 为我们提供了强大的布局工具，让我们能够更轻松地创建复杂的页面布局。本文将介绍最常用的两种布局方式：Flexbox 和 Grid。

## Flexbox 布局

Flexbox 是一维布局系统，特别适合处理行或列的布局。

### 基础用法

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 常用属性

1. **主轴对齐（justify-content）**：
```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

2. **交叉轴对齐（align-items）**：
```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

3. **弹性增长（flex-grow）**：
```css
.item {
  flex-grow: 1; /* 占用剩余空间 */
}
```

## Grid 布局

Grid 是二维布局系统，适合处理更复杂的页面布局。

### 基础网格

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 响应式布局

使用 `minmax` 和 `auto-fit/auto-fill`：

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

### 网格区域

使用命名网格区域创建布局：

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## 实用布局技巧

### 1. 居中布局

```css
/* Flexbox 方式 */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid 方式 */
.center-grid {
  display: grid;
  place-items: center;
}
```

### 2. 粘性页脚

```css
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

footer {
  margin-top: auto;
}
```

### 3. 卡片网格

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## 最佳实践

1. **移动优先**：
   - 从小屏幕开始设计
   - 使用媒体查询逐步增强

2. **使用相对单位**：
   - rem 用于字体大小
   - em 用于间距
   - vw/vh 用于视口相关尺寸

3. **避免固定宽度**：
   - 使用最大和最小宽度
   - 使用弹性单位（%, fr, auto）

4. **合理使用间距**：
   - 使用 gap 属性
   - 保持一致的间距比例

## 总结

现代 CSS 布局工具让我们能够：
- 更容易创建响应式布局
- 减少媒体查询的使用
- 实现更复杂的布局需求
- 提高代码可维护性

选择合适的布局方式：
- Flexbox 适合一维布局
- Grid 适合二维布局
- 两者可以结合使用 