import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router'
import ProfileBox from 'components/profile/ProfileBox'
import ListBox from 'components/profile/ListBox'
import { Col, Row } from 'antd'

const SignUp: React.FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState<string>('chat') // my, trade, like, chat

  const handleChange = useCallback((type: string) => {
    console.log(type)
    setSelected(type)
  }, [])

  return (
    <Row gutter={20}>
      <Col xs={24} md={8}>
        <ProfileBox handleChange={handleChange} />
        <ListBox selected={selected} handleChange={handleChange} />
      </Col>
      <Col xs={24} md={16}></Col>
    </Row>
  )
}

export default SignUp
