/* eslint-disable */
import { message } from 'antd'
import userContext from 'context/user'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'

const withRequiredLogin: (
  Component: React.ComponentType<any>
) => React.FC<RouteComponentProps> = (Component) => {
  const Wrapper: React.FC<RouteComponentProps> = (props) => {
    const { isLoggedIn } = useContext(userContext)
    const history = useHistory()

    useEffect(() => {
      if (!isLoggedIn) {
        history.push('/')
        message.error({ content: '해당 페이지는 로그인이 필요합니다.' })
      }
    }, [])

    return <Component {...props} />
  }

  return Wrapper
}

export default withRequiredLogin
