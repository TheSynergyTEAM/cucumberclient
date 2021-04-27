import { message } from 'antd'
import userContext from 'context/user'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'

const RequiredLogin: React.FC = () => {
  const { isLoggedIn } = useContext(userContext)
  const history = useHistory()

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/')
      message.error({ content: '해당 페이지는 로그인이 필요합니다.' })
    }
  }, [])

  return <></>
}

export default RequiredLogin
