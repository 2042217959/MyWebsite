import React, { createContext, useState, useContext } from 'react'

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
  hover: '#40a9ff'
}

export const darkTheme = {
  primary: '#1890ff',
  secondary: '#2A2A2A',
  text: {
    primary: '#FFFFFF',
    secondary: '#E0E0E0'
  },
  background: {
    primary: '#141414',
    secondary: '#1F1F1F'
  },
  hover: '#40a9ff',
  card: {
    background: '#262626',
    border: 'rgba(255, 255, 255, 0.1)'
  }
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
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

export const useTheme = () => useContext(ThemeContext) 