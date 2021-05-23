import { Col, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLUMN_SIZE } from '../hooks/articles'
import {
  Bottom,
  Title,
  Tags,
  Tag,
  StyledSpace,
  SubInfo,
  IconBox,
  Price
} from './style'
import { HeartOutlined, MessageOutlined } from '@ant-design/icons'

interface CardProps {
  article: ArticleCardData
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
      <StyledSpace direction="vertical" style={{ width: '100%' }}>
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
          <Price>{article.price}원</Price>
          <CardTags tags={tags} />
          <SubInfo>
            <IconBox>
              <HeartOutlined style={{ color: '#cdcdcd' }} />
              <p>{5}</p>
            </IconBox>
            <IconBox>
              <MessageOutlined style={{ color: '#cdcdcd' }} />
              <p>{5}</p>
            </IconBox>
          </SubInfo>
        </Bottom>
      </StyledSpace>
    </Col>
  )
}

export default Card
