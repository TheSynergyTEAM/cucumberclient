import React from 'react'
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledList,
  StyledListItem
} from './style'

const SignUpSide: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>이런 것이 가능해요!</StyledTitle>
      <StyledDescription>
        항목 외에도 여러 가지 기능을 제공해요.
      </StyledDescription>
      <StyledList>
        <StyledListItem>우리 동네 중고 거래</StyledListItem>
        <StyledListItem>판매자와 실시간 채팅</StyledListItem>
        <StyledListItem>판매자에 대한 평가</StyledListItem>
        <StyledListItem>거래 후기 제공</StyledListItem>
        <StyledListItem>우리 동네 인기 매물</StyledListItem>
        <StyledListItem>관심 상품 조회</StyledListItem>
      </StyledList>
    </StyledContainer>
  )
}

export default SignUpSide
