import { SearchOutlined } from '@ant-design/icons'
import { Avatar, List } from 'antd'
import { useChatRoom } from 'components/chat/hooks/chat'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useContext, useEffect } from 'react'
import userContext from 'context/user'
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

const ChatList: React.FC = () => {
  const { left } = useColumnSize()
  const { user } = useContext(userContext)
  const { setCurrentChatroom } = useContext(chatContext)
  const theme = useContext(ThemeContext)

  const { chatRoom } = useChatRoom(user?.id || 0)
  useEffect(() => {
    if (chatRoom.length > 0) {
      setCurrentChatroom(chatRoom[0])
    }
  }, [chatRoom])

  return (
    <StyledChatList span={left}>
      <StyledChatListTitle>현재 진행중인 거래 n건</StyledChatListTitle>
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
          <StyledListItemWrapper onClick={() => setCurrentChatroom(item)}>
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
