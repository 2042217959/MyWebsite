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