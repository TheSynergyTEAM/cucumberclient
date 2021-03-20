import React from 'react'

type SignUpContextType = {
  isSignUp: boolean
  setIsSignUp: (t: boolean) => void
}

const initialValue: SignUpContextType = {
  isSignUp: false,
  setIsSignUp: (_t) => {}
}

const SignUpContext = React.createContext<SignUpContextType>(initialValue)

export default SignUpContext
