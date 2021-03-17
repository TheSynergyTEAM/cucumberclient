import React from 'react'
import { StyledContainer, StyledTitle } from './style'

const SignUpContainer: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledTitle>회원가입</StyledTitle>
      {children}
    </StyledContainer>
  )
}

export default SignUpContainer
