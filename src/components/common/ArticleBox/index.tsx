import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer, ImgBox, ArticleInfo, SubInfo } from './style'
import { HeartFilled, MessageOutlined } from '@ant-design/icons'

const ArticleBox: React.FC<ArticleData> = ({
  id,
  city,
  street,
  title,
  price,
  fileid
}) => {
  return (
    <Link to={`/article/${id}`}>
      <StyledContainer>
        <ImgBox>
          <img src={`/image/${fileid[0]}`} />
        </ImgBox>
        <ArticleInfo>
          <h2>{title}</h2>
          <h5>
            {city} {street}
          </h5>
          <h4>{price}원</h4>
          <SubInfo>
            <li>
              <HeartFilled style={{ color: '#ff4a4a' }} />
              <span>{0}</span>
            </li>
            <li>
              <MessageOutlined />
              <span>{0}</span>
            </li>
          </SubInfo>
        </ArticleInfo>
      </StyledContainer>
    </Link>
  )
}

export default ArticleBox
