import React from 'react'
import { RouteComponentProps } from 'react-router'
import ProfileContainer from 'components/profile/ProfileContainer'
import ProfileBox from 'components/profile/ProfileBox'
import UsageInfo from 'components/profile/UsageInfo'
import { Col, Row } from 'antd'

const SignUp: React.FC<RouteComponentProps> = () => {
  return (
    <ProfileContainer>
      <Row gutter={20}>
        <Col xs={24} md={8}>
          <ProfileBox />
        </Col>
        <Col xs={24} md={16}>
          <UsageInfo />
        </Col>
      </Row>
    </ProfileContainer>
  )
}

export default SignUp
