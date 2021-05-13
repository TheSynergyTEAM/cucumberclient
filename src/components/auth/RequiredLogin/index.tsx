/* eslint-disable */
import { message } from 'antd'
import userContext from 'context/user'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'

const withRequiredLogin: (Component: React.ComponentType<any>) => React.FC = (
  Component
) => {
  const Wrapper: React.FC = () => {
    const { isLoggedIn } = useContext(userContext)
    const history = useHistory()

    useEffect(() => {
      if (!isLoggedIn) {
        history.push('/')
        message.error({ content: '해당 페이지는 로그인이 필요합니다.' })
      }
    }, [])

    return <Component />
  }

  return Wrapper
}

export default withRequiredLogin
