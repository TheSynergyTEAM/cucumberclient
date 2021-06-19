import { Avatar, Divider, Rate } from 'antd'
import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useContext, useState, useEffect } from 'react'
import chatProvider from 'context/chat'
import { getMember } from 'api/auth'
import theme from 'styles/theme'
import {
  StyledFlex,
  StyledUserDealInfo,
  StyledUserName,
  StyledWrapper
} from './style'

const ChatUserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<Nullable<User>>()

  const { right } = useColumnSize()
  const { currentChatroom } = useContext(chatProvider)

  useEffect(() => {
    const getUserInfo = async (userId: number) => {
      const responseInfo = await getMember(userId)
      setUserInfo(responseInfo)
    }
    if (currentChatroom) {
      getUserInfo(currentChatroom.receiverId)
    }
  }, [currentChatroom])

  return (
    <StyledWrapper span={right}>
      <StyledFlex $center>
        <Avatar src="https://i.pravatar.cc/150?img=10" size={100} />
        <StyledUserName>{userInfo?.name}</StyledUserName>
        <StyledUserDealInfo>
          <p>판매 {6}건</p>
          <Divider
            type="vertical"
            style={{ backgroundColor: theme.palette.grey[0] }}
          />
          <p>구매 {10}건</p>
        </StyledUserDealInfo>
        <Rate value={userInfo?.ratingScore} disabled />
      </StyledFlex>
      <StyledFlex $center>
        <Divider
          type="horizontal"
          style={{ backgroundColor: theme.palette.grey[0] }}
        />
        <p>위 사람과 거래를 하셨으면, 아래의 거래완료 버튼을 눌러주세요</p>
      </StyledFlex>
    </StyledWrapper>
  )
}

export default ChatUserInfo
