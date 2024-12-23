import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import AppHeader from './components/AppHeader'
import RouterConfig from './router/routes'
import { AppWrapper } from './style'
import GlobalStyle from './globalStyle'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const ThemedApp = () => {
  const { theme } = useTheme()
  
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <AppHeader/>
        <RouterConfig />
      </AppWrapper>
    </StyledThemeProvider>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ThemedApp />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
