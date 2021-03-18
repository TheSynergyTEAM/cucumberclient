import { Col, Row } from 'antd'
import SignUpContainer from 'components/auth/SignUpContainer'
import SignUpForm from 'components/auth/SignUpForm'
import SignUpSide from 'components/auth/SignUpSide'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import SignUpContext from 'context/SignUp'

const { Provider } = SignUpContext

const SignUp: React.FC<RouteComponentProps> = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <Provider value={{ isSignUp, setIsSignUp }}>
      <SignUpContainer>
        <Row gutter={20}>
          <Col xs={24} md={16}>
            <SignUpForm />
          </Col>
          <Col xs={24} md={8}>
            <SignUpSide />
          </Col>
        </Row>
      </SignUpContainer>
    </Provider>
  )
}

export default SignUp
