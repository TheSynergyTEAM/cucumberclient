import React from 'react'
import RouterWrapper from 'pages'
import GlobalStyle from 'styles'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterWrapper />
      </ThemeProvider>
    </>
  )
}

export default App
