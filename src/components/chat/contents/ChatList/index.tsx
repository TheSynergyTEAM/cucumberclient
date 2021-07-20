import { SearchOutlined } from '@ant-design/icons'
import { Avatar, List } from 'antd'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useContext, useEffect } from 'react'
import chatContext from 'context/chat'
import { ThemeContext } from 'styled-components'
import {
  StyledChatList,
  StyledChatListSearch,
  StyledChatListSearchWrapper,
  StyledChatListTitle,
  StyledItemTitle,
  StyledListItemWrapper,
  StyledBadge
} from './style'

interface ChatListProps {
  chatRoom: ChatRoom[]
  changeChatRoomInfo: (receiverId: number, changedInfo: ChatRoom) => void
}

const ChatList: React.FC<ChatListProps> = ({
  chatRoom,
  changeChatRoomInfo
}) => {
  const { left } = useColumnSize()
  const { selectChatroom } = useContext(chatContext)
  const theme = useContext(ThemeContext)

  // const { chatRoom, changeChatRoomInfo } = useChatRoom()

  const changeChatroom = (chatroom: ChatRoom) => {
    selectChatroom(chatroom)
    changeChatRoomInfo(chatroom.receiverId, {
      ...chatroom,
      unreadMessages: 0
    } as ChatRoom)
  }
  console.log(chatRoom)
  // 여기 chatroom을 지워야할지도모름 일단은 이렇게 놔두고 수정하기
  // >> 의존성에있던 chatroom 지움
  useEffect(() => {
    if (chatRoom.length > 0) {
      console.log('여기임?!?!?!?!?!?!?!?!?!?')
      selectChatroom(chatRoom[0])
    }
  }, [])

  return (
    <StyledChatList span={left}>
      <StyledChatListTitle>
        현재 진행중인 거래 {chatRoom.length || 0}건
      </StyledChatListTitle>
      <StyledChatListSearchWrapper>
        <StyledChatListSearch
          prefix={<SearchOutlined />}
          placeholder="채팅방 검색하기"
        />
      </StyledChatListSearchWrapper>
      <List
        itemLayout="vertical"
        dataSource={chatRoom}
        renderItem={(item) => (
          <StyledListItemWrapper onClick={() => changeChatroom(item)}>
            <List.Item key={item.chatId} style={{ padding: theme.paddings.xl }}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size="large" />}
                title={
                  <StyledItemTitle>
                    {item.receiverName}
                    <StyledBadge
                      key={item.chatId}
                      size="default"
                      count={item.unreadMessages}
                    />
                  </StyledItemTitle>
                }
                description={
                  <>
                    @{item.seller ? '판매자 ' : '구매자 '}
                    {item.itemName}
                  </>
                }
              />
              <div>{item.lastContent || ''}</div>
            </List.Item>
          </StyledListItemWrapper>
        )}
      ></List>
    </StyledChatList>
  )
}

export default ChatList
