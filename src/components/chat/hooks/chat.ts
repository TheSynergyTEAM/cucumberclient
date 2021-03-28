import { useState } from 'react'

// 테스트
export interface SampleMessage {
  // 메세지 내용
  value: string
  // 내가 보낸 메세지, 상대가 보낸 메세지, 시스템이 보낸 메세지
  type: 'me' | 'y' | 'system'
  // 메세지 생성 시점
  date: number
  // 메세지 생성 시점을 보기 편하게 문자열로 변환
  displayDate?: string
}

type Message = SampleMessage[] | []

export const useChatMessages = (): {
  messages: Message
  setMessages: React.Dispatch<React.SetStateAction<Message>>
} => {
  const [messages, setMessages] = useState<Message>([])

  // @TODO......

  return {
    messages,
    setMessages
  }
}
