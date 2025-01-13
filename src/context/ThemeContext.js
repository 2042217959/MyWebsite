import React, { createContext, useState, useContext } from 'react'

// 浅色主题配置
export const lightTheme = {
  primary: '#1890ff',
  secondary: '#F5F5F5',
  text: {
    primary: '#333333',
    secondary: '#666666'
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F8F8'
  },
  hover: '#40a9ff',
  card: {
    background: '#FFFFFF',
    border: 'rgba(24, 144, 255, 0.1)'
  }
}

// 深色主题配置
export const darkTheme = {
  primary: '#74B9FF',
  secondary: '#2A2A4C',
  text: {
    primary: '#FFFFFF',
    secondary: '#B2BEC3'
  },
  background: {
    primary: '#2D3436',
    secondary: '#353B48'
  },
  hover: '#6DC0FF',
  card: {
    background: '#2F3640',
    border: 'rgba(116, 185, 255, 0.2)'
  }
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
    // 当 isDark 改变时，theme 会自动更新为新的主题对象
  const theme = isDark ? darkTheme : lightTheme
  // 实现主题切换的函数
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  // 使用 useContext 获取 ThemeContext 中的值
  const context = useContext(ThemeContext)
  
  // 如果在 ThemeProvider 外使用，context 将为 undefined
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  // 返回主题相关的所有内容：theme对象、isDark状态、toggleTheme方法
  return context
}