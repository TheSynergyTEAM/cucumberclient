import { Avatar, Button, Divider, Rate } from 'antd'
import { useColumnSize } from 'components/chat/hooks/column-size'
import { useHistory } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react'
import chatProvider from 'context/chat'
import { getMember } from 'api/auth'
import { sellArticle } from 'api/article'
import theme from 'styles/theme'
import {
  StyledFlex,
  StyledUserDealInfo,
  StyledUserName,
  StyledWrapper
} from './style'

const ChatUserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<Nullable<User>>()
  const history = useHistory()
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

      {/* 아래 부분 로직개선필요 */}
      {/* 판매자 */}
      {currentChatroom && currentChatroom.seller && (
        <StyledFlex $center>
          <Divider
            type="horizontal"
            style={{ backgroundColor: theme.palette.grey[0] }}
          />
          {!currentChatroom.valid ? (
            currentChatroom.completeRoom ? (
              <div>위 사람과 거래가 완료되었습니다.</div>
            ) : (
              <></>
            )
          ) : (
            <>
              <p>
                위 사람과 거래를 하셨으면, 아래의 거래완료 버튼을 눌러주세요
              </p>
              <Button
                onClick={() =>
                  sellArticle(
                    currentChatroom.itemId,
                    currentChatroom.senderId,
                    currentChatroom.receiverId
                  )
                }
              >
                거래완료
              </Button>
            </>
          )}
        </StyledFlex>
      )}
      {/* 구매자 */}
      {currentChatroom && !currentChatroom.seller && (
        <StyledFlex $center>
          <Divider
            type="horizontal"
            style={{ backgroundColor: theme.palette.grey[0] }}
          />
          {!currentChatroom.valid &&
            (currentChatroom.completeRoom ? (
              <>
                <div>위 사람과 거래가 완료되었습니다.</div>
                <Button
                  onClick={() =>
                    history.push(`/review/write/${currentChatroom.itemId}`)
                  }
                >
                  리뷰 작성하기
                </Button>
              </>
            ) : (
              <>거래가 종료된 상품입니다.</>
            ))}
        </StyledFlex>
      )}
    </StyledWrapper>
  )
}

export default ChatUserInfo
