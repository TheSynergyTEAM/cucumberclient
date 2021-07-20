import React, { useEffect, useState } from 'react'
import { StyledContainer, Title, EmptyBox } from './style'
import ArticleBox from 'components/common/ArticleBox'
// import { getBuyReviewArticles, getSellReviewArticles } from 'api/review'
import { getAllReviewArticles } from 'api/review'

interface ReviewProps {
  userId: Nullable<number>
}

const Review: React.FC<ReviewProps> = ({ userId }) => {
  const [type, setType] = useState<Nullable<'sell' | 'buy'>>(null)
  const [reviewList, setReviewList] = useState<ArticleCardData[]>([])
  // const [sellList, setSellList] = useState<ArticleCardData[]>([])
  // const [buyList, setBuyList] = useState<ArticleCardData[]>([])

  useEffect(() => {
    if (userId) {
      getAllReviewArticles(userId).then((res) => setReviewList(res))
      // getBuyReviewArticles(userId).then((res) => setBuyList(res))
      // getSellReviewArticles(userId).then((res) => setSellList(res))
    }
  }, [])

  return (
    <StyledContainer>
      <p>모든 리뷰</p>
      <Title type={type}>
        <p onClick={() => setType('buy')}>내가 작성한 리뷰</p>
        <p> | </p>
        <p onClick={() => setType('sell')}>판매상품</p>
      </Title>
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
