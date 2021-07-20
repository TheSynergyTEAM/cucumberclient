import axios from 'axios'

// 모든 채팅 리스트 받아오기
export const getChatRoomList: (userId: number) => Promise<ChatRoom[]> = async (
  userId
) => {
  try {
    const { data: chatRoomData } = await axios.get(`/chatroom/${userId}`)
    return chatRoomData
  } catch (error) {
    throw error.response.data
  }
}

// 특정 채팅방 조회하기 with paging
export const getChattingInfo: (
  senderId: number,
  receiverId: number,
  itemId: number,
  pageIndex: number
) => Promise<ChatDetail> = async (senderId, receiverId, itemId, pageIndex) => {
  try {
    const { data: chatData } = await axios.get(
      `message/${senderId}/${receiverId}/${itemId}?page=${pageIndex}`
    )
    return chatData
  } catch (error) {
    throw error.response.data
  }
}
