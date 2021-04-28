import withRequiredLogin from 'components/auth/RequiredLogin'
import ChatList from 'components/chat/contents/ChatList'
import ChatMain from 'components/chat/contents/Main'
import ChatUserInfo from 'components/chat/contents/UserInfo'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React from 'react'

const Chat: React.FC = () => {
  const { left, right } = useColumnSize()

  return (
    <>
      {left ? <ChatList /> : null}
      <ChatMain />
      {right ? <ChatUserInfo /> : null}
    </>
  )
}

export default withRequiredLogin(Chat)
