import React, { useState } from 'react'
import {
  StyledContainer,
  UserInfo,
  NameBox,
  ArticleDesc,
  ButtonBox,
  OtherInfo
} from './style'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'

interface DetailInfoProps {
  articleInfo: ArticleData
}

const DetailInfo: React.FC<DetailInfoProps> = ({ articleInfo }) => {
  const [like, setLike] = useState<boolean>(true)

  return (
    <StyledContainer>
      {articleInfo ? (
        <>
          <UserInfo>
            <NameBox>
              <img src="https://pgnqdrjultom1827145.cdn.ntruss.com/img/48/45/484566523fa21c60f55661c3dae19dd2df2a089ce81f8e10a8927b8f95c32bcb_v1.jpg" />
              <div>
                <h4>{articleInfo.member}</h4>
                <p>
                  {articleInfo.city} {articleInfo.street}
                </p>
              </div>
            </NameBox>
            <div>
              <p>{`🥒`.repeat(5)}</p>
            </div>
          </UserInfo>
          <ArticleDesc>
            <h3>{articleInfo.title}</h3>
            <p>
              {articleInfo.categories} . {articleInfo.created.split('T')[0]}
            </p>
            <h5>{articleInfo.price}원</h5>
            <h6>{articleInfo.spec}</h6>
          </ArticleDesc>
          <OtherInfo>
            <p>
              채팅 {articleInfo.views} 관심 {0} 조회
              {0}
            </p>
          </OtherInfo>
          <ButtonBox>
            <Button onClick={() => setLike(!like)} style={{ width: '20%' }}>
              {like ? (
                <HeartOutlined />
              ) : (
                <HeartFilled style={{ color: 'red' }} />
              )}
            </Button>
            <Button style={{ width: '20%' }}>
              <ShareAltOutlined />
            </Button>
            <Link to="/chat">
              <Button type="primary" style={{ width: '100%' }}>
                판매자와 채팅하기
              </Button>
            </Link>
          </ButtonBox>
        </>
      ) : (
        <div>데이터를 불러오는중입니다...</div>
      )}
    </StyledContainer>
  )
}

export default DetailInfo
