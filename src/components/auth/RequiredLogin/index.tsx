import { message } from 'antd'
import userContext from 'context/user'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'

export default function withRequiredLogin(
  Component: React.ComponentType<any>
): React.ComponentType<any> {
  const { isLoggedIn } = useContext(userContext)
  const history = useHistory()

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/')
      message.error({ content: '해당 페이지는 로그인이 필요합니다.' })
    }
  }, [])

  return Component
}
