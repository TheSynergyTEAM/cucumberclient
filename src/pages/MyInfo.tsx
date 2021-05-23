import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router'
import ProfileBox from 'components/myInfo/ProfileBox'
import ListBox from 'components/myInfo/ListBox'
import EditProfile from 'components/myInfo/EditProfile'
import Trade from 'components/myInfo/Trade'
import Like from 'components/myInfo/Like'
import { Col, Row } from 'antd'

const MyInfo: React.FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState<string>('my') // my, trade, like, chat

  const selectedContent = useCallback(() => {
    switch (selected) {
      case 'my':
        return <EditProfile />
      case 'trade':
        return <Trade />
      case 'like':
        return <Like />
    }
  }, [selected])

  const handleChange = useCallback((type: string) => {
    setSelected(type)
  }, [])

  return (
    <Row gutter={20}>
      <Col xs={24} md={8}>
        <ProfileBox />
        <ListBox selected={selected} handleChange={handleChange} />
      </Col>
      <Col xs={24} md={16}>
        {selectedContent()}
      </Col>
    </Row>
  )
}

export default MyInfo
