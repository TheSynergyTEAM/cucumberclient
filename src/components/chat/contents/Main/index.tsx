import { useColumnSize } from 'components/chat/hooks/column-size'
import React from 'react'
import {
  StyledChatMain,
  StyledMessage,
  StyledMessageDate,
  StyledMessageValue,
  StyledMessageWrapper
} from './style'

export interface SampleMessage {
  value: string
  type: 'me' | 'y' | 'system'
  date?: string
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
    type: 'me',
    date: '07:22'
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
    value:
      '메세지 테스트 123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123',
    type: 'y',
    date: '07:44'
  }
]

const ChatMain: React.FC = () => {
  const { center } = useColumnSize()

  return (
    <StyledChatMain span={center}>
      <StyledMessageWrapper>
        {messages.map((message) => (
          <>
            <StyledMessage
              key={Math.floor(Math.random() * 99999)}
              type={message.type}
            >
              <StyledMessageValue type={message.type}>
                {message.value}
              </StyledMessageValue>
              <StyledMessageDate type={message.type}>
                {message.date}
              </StyledMessageDate>
            </StyledMessage>
          </>
        ))}
      </StyledMessageWrapper>
    </StyledChatMain>
  )
}

export default ChatMain
