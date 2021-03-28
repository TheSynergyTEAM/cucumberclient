import React from 'react'

type SignInContextType = {
  isSignIn: boolean
}

const initialValue: SignInContextType = {
  isSignIn: false
}

const SignInContext = React.createContext<SignInContextType>(initialValue)

export default SignInContext
