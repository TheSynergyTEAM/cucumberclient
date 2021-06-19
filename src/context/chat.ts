import { createContext } from 'react'

interface ChatContext {
  currentChatroom: Nullable<ChatRoom>
  setCurrentChatroom: (chat: ChatRoom | null) => void
}

const chatContext = createContext<ChatContext>({
  currentChatroom: null,
  setCurrentChatroom: () => {}
})

export default chatContext
