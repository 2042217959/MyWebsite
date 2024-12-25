import React, { createContext, useContext, useState } from 'react'

const lightTheme = {
  primary: '#1890ff',
  hover: '#40a9ff',
  background: {
    primary: '#ffffff',
    secondary: '#f5f5f5'
  },
  text: {
    primary: '#2c3e50',
    secondary: '#666666'
  }
}

const darkTheme = {
  primary: '#1890ff',
  hover: '#40a9ff',
  background: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d'
  },
  text: {
    primary: '#ffffff',
    secondary: '#b3b3b3'
  }
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true) // 默认使用深色主题
  const theme = isDark ? darkTheme : lightTheme

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
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 