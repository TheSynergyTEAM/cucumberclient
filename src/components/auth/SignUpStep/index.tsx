import SignUpContext from 'context/SignUp'
import React, { useCallback, useContext } from 'react'
import { StyledTitlePrimaryColor } from '../SignUpContainer/style'
import {
  StyledStep,
  StyledStepItem,
  CheckIcon,
  UserIcon,
  StyledDescription,
  StyledInner,
  StyledInnerIconWrap,
  StyledTitle
} from './style'

const SignUpStep: React.FC = () => {
  const { isSignUp } = useContext(SignUpContext)

  const getSignUp = useCallback(
    (direction: 'left' | 'right') => {
      if (direction === 'left') {
        return !isSignUp
      } else {
        return isSignUp
      }
    },
    [isSignUp]
  )

  return (
    <StyledStep>
      <StyledStepItem direction="left" $active={getSignUp('left')}>
        <StyledInner>
          <StyledInnerIconWrap>
            <CheckIcon $active={getSignUp('left')} />
          </StyledInnerIconWrap>
          <StyledTitle>
            <StyledTitlePrimaryColor>양식</StyledTitlePrimaryColor>에 맞춰
            작성하기
          </StyledTitle>
          <StyledDescription>빠진 곳 없이 꼼꼼하게!</StyledDescription>
        </StyledInner>
      </StyledStepItem>
      <StyledStepItem direction="right" $active={getSignUp('right')}>
        <StyledInner>
          <StyledInnerIconWrap>
            <UserIcon $active={getSignUp('right')} />
          </StyledInnerIconWrap>
          <StyledTitle>회원가입 완료</StyledTitle>
          <StyledDescription>우리 동네에서 중고 거래하기</StyledDescription>
        </StyledInner>
      </StyledStepItem>
    </StyledStep>
  )
}

export default SignUpStep
