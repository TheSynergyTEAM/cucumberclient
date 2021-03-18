import React, { useEffect, useState } from 'react'
import { StyledStep, StyledStepItem } from './style'

const SignUpStep: React.FC = () => {
  const [leftActive, setLeftActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setLeftActive(true), 100)
  }, [])

  return (
    <StyledStep>
      <StyledStepItem className={`${leftActive ? 'left-active' : ''} left`}>
        <div className="inner">One</div>
      </StyledStepItem>
      <StyledStepItem className="right">
        <div className="inner">Two</div>
      </StyledStepItem>
    </StyledStep>
  )
}

export default SignUpStep
