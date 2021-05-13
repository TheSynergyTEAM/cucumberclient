import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer, ImgBox, ArticleInfo, SubInfo } from './style'
import { HeartFilled, MessageOutlined } from '@ant-design/icons'

const ArticleBox: React.FC<ArticleInfo> = ({
  id,
  img,
  name,
  price,
  region,
  like,
  chat
}) => {
  return (
    <Link to={`/article/${id}`}>
      <StyledContainer>
        <ImgBox>
          <img src={img} />
        </ImgBox>
        <ArticleInfo>
          <h2>{name}</h2>
          <h5> {region}</h5>
          <h4>{price}원</h4>
          <SubInfo>
            <li>
              <HeartFilled style={{ color: '#ff4a4a' }} />
              <span>{like}</span>
            </li>
            <li>
              <MessageOutlined />
              <span>{chat}</span>
            </li>
          </SubInfo>
        </ArticleInfo>
      </StyledContainer>
    </Link>
  )
}

export default ArticleBox
