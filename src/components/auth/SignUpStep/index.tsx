import SignUpContext from 'context/SignUp'
import React, { useCallback, useContext } from 'react'
import { StyledTitlePrimaryColor } from '../SignUpContainer/style'
import { StyledStep, StyledStepItem, CheckIcon, UserIcon } from './style'

const SignUpStep: React.FC = () => {
  const { isSignUp } = useContext(SignUpContext)

  const getSignUp = useCallback(
    (direction: 'left' | 'right') => {
      if (direction === 'left') {
        return !isSignUp ? 'left-active' : ''
      } else {
        return isSignUp ? 'right-active' : ''
      }
    },
    [isSignUp]
  )

  return (
    <StyledStep>
      <StyledStepItem className={`${getSignUp('left')} left`}>
        <div className="inner">
          <div className="inner-icon-wrap">
            <CheckIcon className={getSignUp('left')} />
          </div>
          <div className="title">
            <StyledTitlePrimaryColor>양식</StyledTitlePrimaryColor>에 맞춰
            작성하기
          </div>
          <div className="description">빠진 곳 없이 꼼꼼하게!</div>
        </div>
      </StyledStepItem>
      <StyledStepItem className={`${getSignUp('right')} right`}>
        <div className="inner">
          <div className="inner-icon-wrap">
            <UserIcon className={getSignUp('right')} />
          </div>
          <div className="title">회원가입 완료</div>
          <div className="description">우리 동네에서 중고 거래하기</div>
        </div>
      </StyledStepItem>
    </StyledStep>
  )
}

export default SignUpStep
