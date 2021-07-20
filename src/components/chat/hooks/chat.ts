import { useState, useCallback } from 'react'
import { getChatRoomList } from 'api/chat'

// 채팅방리스트의 내용을 얻어옴
export const useChatRoom = (): {
  chatRoom: ChatRoom[]
  setChatRoom: React.Dispatch<React.SetStateAction<ChatRoom[]>>
  getChatRoom: (userId: number) => void
  changeChatRoomInfo: (receiverId: number, changedInfo: ChatRoom) => void
} => {
  const [chatRoom, setChatRoom] = useState<ChatRoom[]>([])

  const getChatRoom = useCallback(async (userId: number) => {
    const data = await getChatRoomList(userId)
    if (data.length > 0) {
      setChatRoom(data)
    }
  }, [])
  console.log(chatRoom)

  // 채팅룸 정보 변경
  const changeChatRoomInfo = useCallback(
    (receiverId: number, changedInfo: ChatRoom) => {
      const plate = chatRoom.map((room) => {
        console.log(room)
        if (room.receiverId === receiverId) {
          return changedInfo
        }
        return room
      })
      console.log(plate)
      setChatRoom(plate)
    },
    [chatRoom, setChatRoom]
  )

  return {
    chatRoom,
    setChatRoom,
    getChatRoom,
    changeChatRoomInfo
  }
}
