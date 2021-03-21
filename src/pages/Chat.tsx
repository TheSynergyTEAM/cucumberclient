import ChatList from 'components/chat/contents/ChatList'
import ChatMain from 'components/chat/contents/Main'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React from 'react'

const Chat: React.FC = () => {
  const { left } = useColumnSize()

  return (
    <>
      {left ? <ChatList /> : null}
      <ChatMain />
    </>
  )
}

export default Chat
