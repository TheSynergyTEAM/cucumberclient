import SignUpContainer from 'components/auth/SignUpContainer'
import SignUpForm from 'components/auth/SignUpForm'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const SignUp: React.FC<RouteComponentProps> = () => {
  return (
    <SignUpContainer>
      <SignUpForm />
    </SignUpContainer>
  )
}

export default SignUp
