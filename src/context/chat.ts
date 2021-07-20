import { createContext } from 'react'

interface ChatContext {
  currentChatroom: Nullable<ChatRoom>
  selectChatroom: (chatroom: ChatRoom | null) => void
}

const chatContext = createContext<ChatContext>({
  currentChatroom: null,
  selectChatroom: () => {}
})

export default chatContext
