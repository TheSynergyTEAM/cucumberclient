import React, { useState, useContext } from 'react'
import {
  StyledContainer,
  UserInfo,
  NameBox,
  ArticleDesc,
  ButtonBox,
  OtherInfo
} from './style'
import { Link } from 'react-router-dom'
import userContext from 'context/user'
import { postFavourite, deleteFavourite } from 'api/favourite'
import { Button } from 'antd'
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'

interface DetailInfoProps {
  articleInfo: ArticleData
}

const DetailInfo: React.FC<DetailInfoProps> = ({ articleInfo }) => {
  const [like, setLike] = useState<boolean>(false)
  const { user } = useContext(userContext)
  return (
    <StyledContainer>
      {articleInfo ? (
        <>
          <UserInfo>
            <NameBox>
              <img src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525023300360gnuh.jpg" />
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
              채팅 {0} 관심 {0} 조회
              {articleInfo.views}
            </p>
          </OtherInfo>
          <ButtonBox>
            <Button
              onClick={() => {
                setLike(!like)
                if (user) {
                  if (like) {
                    deleteFavourite(articleInfo.itemid, user.id)
                  } else {
                    postFavourite(articleInfo.itemid, user.id)
                  }
                }
              }}
              style={{ width: '20%' }}
            >
              {like ? (
                <HeartFilled style={{ color: 'red' }} />
              ) : (
                <HeartOutlined />
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
