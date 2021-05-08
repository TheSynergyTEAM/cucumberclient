import { Col, Image, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { COLUMN_SIZE } from '../hooks/articles'

interface CardProps {
  article: ArticleData
}

const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <Col span={COLUMN_SIZE}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Image
          preview={false}
          src="/images/no-data.png"
          height={250}
          width="100%"
        />
        <Link to={`/article/${article.id}`} type="div">
          {article.title}
        </Link>
      </Space>
    </Col>
  )
}

export default Card
