import { Logo } from 'components/Header/style'
import React from 'react'
import { useColumnSize } from '../hooks/column-size'
import {
  StyledChatHeader,
  StyledChatHeaderItem,
  StyledHeaderDesc,
  StyledHeaderUser
} from './style'

const ChatHeader: React.FC = () => {
  const { left, center, right } = useColumnSize()

  return (
    <StyledChatHeader align="middle">
      {left ? (
        <StyledChatHeaderItem span={left}>
          <Logo>오이마켓</Logo>
        </StyledChatHeaderItem>
      ) : null}
      <StyledChatHeaderItem span={!left ? 24 : center} $center>
        <StyledHeaderUser>유진님과의 채팅방</StyledHeaderUser>
        <StyledHeaderDesc>
          @판매자 LG 울트라 와이드 모니터 UL37XMCLD
        </StyledHeaderDesc>
      </StyledChatHeaderItem>
      {right ? (
        <StyledChatHeaderItem span={right}>
          뭘 넣을지 모르겠네
        </StyledChatHeaderItem>
      ) : null}
    </StyledChatHeader>
  )
}

export default ChatHeader
