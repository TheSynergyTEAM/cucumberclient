import React, { useEffect, useState } from 'react'
import { StyledContainer, Header, Title, EmptyBox } from './style'
import { Select } from 'antd'

import ArticleBox from 'components/common/ArticleBox'
import { getBuyReviewArticles, getSellReviewArticles } from 'api/review'
import { getAllReviewArticles } from 'api/review'

interface ReviewProps {
  userId: Nullable<number>
}

type ReviewType = 'all' | 'sell' | 'buy'

const Review: React.FC<ReviewProps> = ({ userId }) => {
  const [type, setType] = useState<ReviewType>('all')
  const [reviewList, setReviewList] = useState<ArticleCardData[]>([])

  const { Option } = Select

  function handleSelect(value: ReviewType) {
    setType(value)
  }

  useEffect(() => {
    if (userId) {
      if (type === 'all') {
        getAllReviewArticles(userId).then((res) => setReviewList(res))
      }
      if (type === 'buy') {
        getBuyReviewArticles(userId).then((res) => setReviewList(res))
      }
      if (type === 'sell') {
        getSellReviewArticles(userId).then((res) => setReviewList(res))
      }
    }
  }, [type])

  return (
    <StyledContainer>
      <Header>
        <Title>리뷰</Title>
        <Select
          defaultValue="all"
          style={{ width: 100, textAlign: 'center' }}
          onChange={handleSelect}
        >
          <Option value="all">모든리뷰</Option>
          <Option value="buy">구매리뷰</Option>
          <Option value="sell">판매리뷰</Option>
        </Select>
      </Header>
      <div>
        {reviewList.length > 0 ? (
          reviewList.map((article, index) => (
            <div key={index}>
              <ArticleBox {...article} />
            </div>
          ))
        ) : (
          <EmptyBox>리뷰가 없습니다.</EmptyBox>
        )}
      </div>
    </StyledContainer>
  )
}

export default Review
