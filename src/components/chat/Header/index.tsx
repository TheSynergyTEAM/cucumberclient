import { Logo } from 'components/Header/style'
import React from 'react'
import { useColumnSize } from '../hooks/column-size'
import { StyledChatHeader, StyledChatHeaderItem } from './style'

const ChatHeader: React.FC = () => {
  const { left, center, right } = useColumnSize()

  return (
    <StyledChatHeader align="middle">
      {left ? (
        <StyledChatHeaderItem span={left}>
          <Logo>오이마켓</Logo>
        </StyledChatHeaderItem>
      ) : null}
      <StyledChatHeaderItem span={!left ? 24 : center}>2</StyledChatHeaderItem>
      {right ? (
        <StyledChatHeaderItem span={right}>3</StyledChatHeaderItem>
      ) : null}
    </StyledChatHeader>
  )
}

export default ChatHeader
