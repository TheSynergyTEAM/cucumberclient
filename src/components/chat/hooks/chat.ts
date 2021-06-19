import { useState, useEffect, useCallback } from 'react'
import { getChatRoomList } from 'api/chat'

// 채팅방리스트의 내용을 얻어옴
export const useChatRoom = (
  userId: number
): {
  chatRoom: ChatRoom[]
  setChatRoom: React.Dispatch<React.SetStateAction<ChatRoom[]>>
} => {
  const [chatRoom, setChatRoom] = useState<ChatRoom[]>([])

  const getChatroom = useCallback(
    async (userId: number) => {
      const data = await getChatRoomList(userId)
      setChatRoom(data)
    },
    [userId]
  )

  useEffect(() => {
    if (userId) {
      getChatroom(userId)
    }
  }, [userId])

  return {
    chatRoom,
    setChatRoom
  }
}
