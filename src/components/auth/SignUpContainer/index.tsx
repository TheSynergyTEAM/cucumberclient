import React from 'react'
import {
  StyledContainer,
  StyledTitle,
  StyledTitlePrimaryColor,
  StyledDescription
} from './style'

const SignUpContainer: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledTitle>
        <StyledTitlePrimaryColor>오이마켓</StyledTitlePrimaryColor>에 가입하기
      </StyledTitle>
      <StyledDescription>우리 동네 중고 거래 서비스</StyledDescription>
      {children}
    </StyledContainer>
  )
}

export default SignUpContainer
