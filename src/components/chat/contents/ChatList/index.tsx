import { SearchOutlined } from '@ant-design/icons'
import { Avatar, List } from 'antd'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useContext } from 'react'
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

interface SampleData {
  key: number
  name: string
  avatar: string
  seller: boolean
  unReadMessageCount: number
  stuffName: string
  lastMessage?: string
}

const sample: SampleData[] = [
  {
    key: 10,
    name: '유진',
    avatar: 'https://i.pravatar.cc/150?img=10',
    seller: true,
    unReadMessageCount: 1,
    stuffName: 'LG 울트라 와이드 모니터 UL37XMCLD',
    lastMessage: '언제 거래할래여?'
  },
  {
    key: 12,
    name: '형준',
    avatar: 'https://i.pravatar.cc/150?img=2',
    seller: true,
    unReadMessageCount: 0,
    stuffName: '다이슨 무선 청소기'
  },
  {
    key: 11,
    name: '혜원',
    avatar: 'https://i.pravatar.cc/150?img=20',
    seller: false,
    unReadMessageCount: 49,
    stuffName: '2019 맥북 프로 13인치 미개봉 풀박스',
    lastMessage: '내일 서현역 오후 7시에 거래해여'
  }
]

const ChatList: React.FC = () => {
  const { left } = useColumnSize()
  const theme = useContext(ThemeContext)

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
        dataSource={sample}
        renderItem={(item) => (
          <StyledListItemWrapper>
            <List.Item key={item.key} style={{ padding: theme.paddings.xl }}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size="large" />}
                title={
                  <StyledItemTitle>
                    {item.name}
                    <StyledBadge
                      key={item.key}
                      size="default"
                      count={item.unReadMessageCount}
                    />
                  </StyledItemTitle>
                }
                description={
                  <>
                    @{item.seller ? '판매자 ' : '구매자 '}
                    {item.stuffName}
                  </>
                }
              />
              <div>{item.lastMessage || ''}</div>
            </List.Item>
          </StyledListItemWrapper>
        )}
      ></List>
    </StyledChatList>
  )
}

export default ChatList
