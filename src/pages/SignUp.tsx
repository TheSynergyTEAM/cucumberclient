import { Col, Row } from 'antd'
import SignUpContainer from 'components/auth/SignUpContainer'
import SignUpForm from 'components/auth/SignUpForm'
import SignUpSide from 'components/auth/SignUpSide'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const SignUp: React.FC<RouteComponentProps> = () => {
  return (
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
  )
}

export default SignUp
