import React, { useState, useCallback, useContext } from 'react'
import withRequiredLogin from 'hoc/RequiredLogin'
import { RouteComponentProps } from 'react-router'
import ProfileBox from 'components/myInfo/ProfileBox'
import ListBox from 'components/myInfo/ListBox'
import EditProfile from 'components/myInfo/EditProfile'
import Trade from 'components/myInfo/Trade'
import Like from 'components/myInfo/Like'
import Review from 'components/myInfo/Review'
import { Col, Row } from 'antd'
import userContext from 'context/user'

const MyInfo: React.FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState<string>('my') // my, trade, like, chat, review
  const { user } = useContext(userContext)

  const selectedContent = useCallback(() => {
    switch (selected) {
      case 'my':
        return <EditProfile user={user} />
      case 'trade':
        return <Trade userId={user?.id} />
      case 'like':
        return <Like />
      case 'review':
        return <Review userId={user?.id} />
    }
  }, [selected])

  const handleChange = useCallback((type: string) => {
    setSelected(type)
  }, [])

  return (
    <Row gutter={20}>
      <Col xs={24} md={8}>
        <ProfileBox user={user} />
        <ListBox selected={selected} handleChange={handleChange} />
      </Col>
      <Col xs={24} md={16}>
        {selectedContent()}
      </Col>
    </Row>
  )
}

export default withRequiredLogin(MyInfo)
