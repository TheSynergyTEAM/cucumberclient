import { Logo } from 'components/Header/style'
import React, { useContext } from 'react'
import chatContext from 'context/chat'
import { useColumnSize } from '../hooks/column-size'
import {
  StyledChatHeader,
  StyledChatHeaderItem,
  StyledHeaderDesc,
  StyledHeaderUser
} from './style'
import { Link } from 'react-router-dom'

const ChatHeader: React.FC = () => {
  const { left, center, right } = useColumnSize()
  const { currentChatroom } = useContext(chatContext)

  return (
    <StyledChatHeader align="middle">
      {left ? (
        <StyledChatHeaderItem span={left}>
          <Logo>
            <Link to="/">오이마켓</Link>
          </Logo>
        </StyledChatHeaderItem>
      ) : null}
      <StyledChatHeaderItem span={!left ? 24 : center} $center>
        <StyledHeaderUser>
          {currentChatroom?.receiverName}과의 채팅방
        </StyledHeaderUser>
        <StyledHeaderDesc>@{currentChatroom?.itemName}</StyledHeaderDesc>
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
