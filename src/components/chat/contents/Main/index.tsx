import { useColumnSize } from 'components/chat/hooks/column-size'
import React from 'react'
import { StyledChatMain, StyledMessage, StyledMessageWrapper } from './style'

export interface SampleMessage {
  value: string
  type: 'me' | 'y' | 'system'
}

const messages: SampleMessage[] = [
  {
    value: '채팅이 시작되었습니다.',
    type: 'system'
  },
  {
    value: '얼마에 파실거에여',
    type: 'y'
  },
  {
    value: '30에 쿨거 ㄱㄱ',
    type: 'me'
  },
  {
    value: 'ㅇㅋ 오후 8시에 강남역 2번 출구여',
    type: 'y'
  },
  {
    value: 'ㅇㅋㅇㅋ',
    type: 'me'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  },
  {
    value: '메세지 테스트 123123123123123123123123',
    type: 'y'
  }
]

const ChatMain: React.FC = () => {
  const { center } = useColumnSize()

  return (
    <StyledChatMain span={center}>
      <StyledMessageWrapper>
        {messages.map((message) => (
          <StyledMessage
            key={Math.floor(Math.random() * 10000)}
            type={message.type}
          >
            {message.value}
          </StyledMessage>
        ))}
      </StyledMessageWrapper>
    </StyledChatMain>
  )
}

export default ChatMain
