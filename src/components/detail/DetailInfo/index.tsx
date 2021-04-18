import React, { useState } from 'react'
import {
  StyledContainer,
  UserInfo,
  NameBox,
  ArticleDesc,
  ButtonBox
} from './style'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'

interface DetailInfoProps {
  articleInfo: ArticleDetail
}

const DetailInfo: React.FC<DetailInfoProps> = ({ articleInfo }) => {
  const [like, setLike] = useState<boolean>(true)

  return (
    <StyledContainer>
      <UserInfo>
        <NameBox>
          <img src={articleInfo.user_profile} />
          <div>
            <h4>{articleInfo.nickname}</h4>
            <p>{articleInfo.region}</p>
          </div>
        </NameBox>
        <div>
          <p>{`🥒`.repeat(articleInfo.rating)}</p>
        </div>
      </UserInfo>
      <ArticleDesc>
        <h3>{articleInfo.name}</h3>
        <p>
          {articleInfo.category} . {articleInfo.upload_time}
        </p>
        <h5>{articleInfo.price}</h5>
        <h6>{articleInfo.desc}</h6>
        <p>
          채팅 {articleInfo.chat} 관심 {articleInfo.like} 조회
          {articleInfo.views}
        </p>
      </ArticleDesc>
      <ButtonBox>
        <Button onClick={() => setLike(!like)}>
          {like ? <HeartOutlined /> : <HeartFilled style={{ color: 'red' }} />}
        </Button>
        <Button>
          <ShareAltOutlined />
        </Button>
        <Link to="/chat">
          <Button type="primary">판매자와 채팅하기</Button>
        </Link>
      </ButtonBox>
    </StyledContainer>
  )
}

export default DetailInfo
