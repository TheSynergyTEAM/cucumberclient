import React from 'react'
import { StyledContainer, ImgBox, ArticleInfo, SubInfo } from './style'
import { HeartOutlined, MessageOutlined } from '@ant-design/icons'

export interface ArticleBoxProps {
  img: string
  name: string
  price: string
  region: string
  like: number
  chat: number
}

const ArticleBox: React.FC<ArticleBoxProps> = ({
  img,
  name,
  price,
  region,
  like,
  chat
}) => {
  return (
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
            <HeartOutlined />
            <span>{like}</span>
          </li>
          <li>
            <MessageOutlined />
            <span>{chat}</span>
          </li>
        </SubInfo>
      </ArticleInfo>
    </StyledContainer>
  )
}

export default ArticleBox
