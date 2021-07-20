import withRequiredLogin from 'hoc/RequiredLogin'
import ChatList from 'components/chat/contents/ChatList'
import ChatMain from 'components/chat/contents/Main'
import ChatUserInfo from 'components/chat/contents/UserInfo'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useContext, useEffect } from 'react'
import { useChatRoom } from 'components/chat/hooks/chat'
import userContext from 'context/user'

const Chat: React.FC = () => {
  const { left, right } = useColumnSize()
  const { user } = useContext(userContext)

  const { chatRoom, getChatRoom, changeChatRoomInfo } = useChatRoom()
  useEffect(() => {
    if (user) {
      getChatRoom(user.id)
    }
  }, [user])

  return (
    <>
      {left ? (
        <ChatList chatRoom={chatRoom} changeChatRoomInfo={changeChatRoomInfo} />
      ) : null}
      <ChatMain changeChatRoomInfo={changeChatRoomInfo} />
      {right ? <ChatUserInfo /> : null}
    </>
  )
}

export default withRequiredLogin(Chat)
