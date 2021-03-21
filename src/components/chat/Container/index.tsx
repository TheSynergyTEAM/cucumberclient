import React from 'react'
import ChatHeader from '../Header'
import { StyledChatContainer, StyledChatMain } from './style'

interface ChatContainerProps {
  origin: React.ReactNode
}

const ChatContainer: React.FC<ChatContainerProps> = ({ origin }) => {
  return (
    <StyledChatContainer>
      <ChatHeader />
      <StyledChatMain>{origin}</StyledChatMain>
    </StyledChatContainer>
  )
}

export default ChatContainer
