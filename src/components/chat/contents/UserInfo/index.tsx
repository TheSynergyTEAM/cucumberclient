import { Avatar, Divider, Rate } from 'antd'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React from 'react'
import theme from 'styles/theme'
import {
  StyledFlex,
  StyledUserDealInfo,
  StyledUserName,
  StyledWrapper
} from './style'

const ChatUserInfo: React.FC = () => {
  const { right } = useColumnSize()

  return (
    <StyledWrapper span={right}>
      <StyledFlex $center>
        <Avatar src="https://i.pravatar.cc/150?img=10" size={100} />
        <StyledUserName>유진</StyledUserName>
        <StyledUserDealInfo>
          <p>판매 {5}건</p>
          <Divider
            type="vertical"
            style={{ backgroundColor: theme.palette.grey[0] }}
          />
          <p>구매 {10}건</p>
        </StyledUserDealInfo>
        <Rate value={5} disabled />
      </StyledFlex>
    </StyledWrapper>
  )
}

export default ChatUserInfo
