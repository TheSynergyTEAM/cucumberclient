import React, { useState, useEffect } from 'react'
import RouterWrapper from 'pages'
import GlobalStyle from 'styles'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import UserContext from 'context/user'
import ChatContext from 'context/chat'

import { loginByToken } from 'api/auth'

const App: React.FC = () => {
  const [user, setUser] = useState<Nullable<User>>(null)
  const [currentChatroom, setCurrentChatroom] = useState<Nullable<ChatRoom>>(
    null
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const mutateUser = (user: User | null) => {
    if (!user) {
      setUser(null)
      setIsLoggedIn(false)
    } else {
      setUser(user)
      setIsLoggedIn(true)
    }
  }

  const refreshUserInfo = async (refreshToken: string) => {
    const userInfo = await loginByToken(refreshToken)
    setUser(userInfo)
    setIsLoggedIn(true)
  }

  useEffect(() => {
    // localstorage에 토큰이 있는경우 토큰을 사용해 로그인을 합니단
    const refreshToken = localStorage.getItem('token')
    if (refreshToken && !user) {
      refreshUserInfo(refreshToken)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, isLoggedIn, setUser: mutateUser }}>
        <ChatContext.Provider value={{ currentChatroom, setCurrentChatroom }}>
          <ThemeProvider theme={theme}>
            <RouterWrapper />
          </ThemeProvider>
        </ChatContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
