import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router'
import ProfileBox from 'components/profile/ProfileBox'
import ListBox from 'components/profile/ListBox'
import EditProfile from 'components/profile/EditProfile'
import Trade from 'components/profile/Trade'
import Like from 'components/profile/Like'
import { Col, Row } from 'antd'
import { ArticleBoxProps } from 'components/common/ArticleBox'

// test data
const article: ArticleBoxProps = {
  img:
    'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
  name: '자전거팝니다',
  price: '100,000',
  region: '서울 중구',
  like: 3,
  chat: 2
}

const SignUp: React.FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState<string>('my') // my, trade, like, chat

  const selectedContent = useCallback(() => {
    switch (selected) {
      case 'my':
        return <EditProfile />
      case 'trade':
        return <Trade buyList={[article]} sellList={[]} />
      case 'like':
        return <Like likeList={[article, article]} />
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

export default SignUp
