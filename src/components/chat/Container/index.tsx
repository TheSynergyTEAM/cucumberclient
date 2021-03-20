import React from 'react'
import ChatHeader from '../Header'
import { StyledChatContainer } from './style'

const ChatContainer: React.FC = ({ children }) => {
  return (
    <StyledChatContainer>
      <ChatHeader />
      {children}
    </StyledChatContainer>
  )
}

export default ChatContainer
