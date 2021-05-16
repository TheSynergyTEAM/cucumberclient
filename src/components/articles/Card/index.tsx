import { Col, Image, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLUMN_SIZE } from '../hooks/articles'
import { Bottom, Title, Tags, Tag } from './style'

interface CardProps {
  article: ArticleData
}

interface CardTagsProps {
  tags: string[]
}

export const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  return (
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
  )
}

const Card: React.FC<CardProps> = ({ article }) => {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    setTags([
      article.city + '/' + article.street,
      article.categories,
      article.sold ? '판매완료' : '판매중'
    ])
  }, [])

  return (
    <Col span={COLUMN_SIZE}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Link to={`/article/${article.id}`}>
          <Image
            preview={false}
            src={'/thumbnail/' + article.thumbnailid}
            height={200}
            width="100%"
          />
        </Link>
        <Bottom>
          <Link to={`/article/${article.id}`} type="span">
            <Title>{article.title}</Title>
          </Link>
          <CardTags tags={tags} />
        </Bottom>
      </Space>
    </Col>
  )
}

export default Card
