export {}

declare global {
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
  interface ChatRoom {
    chatId: string
    receiverName: string
    avatar: string
    seller: boolean
    unreadMessages: number
    itemName: string
    lastContent?: string
    completeRoom: boolean
    itemId: number
    receiverId: number
    senderId: number
    senderName: string
    valid: boolean
  }
  interface IndividualChat {
    created: string
    modified: string
    id: number
    chatId: string
    senderId: number
    receiverId: number
    content: string
    messageStatus: string
  }
  interface ChatDetail {
    currentPage: '0'
    totalPages: '2'
    totalMessages: '23'
    contents: IndividualChat[]
  }
}
