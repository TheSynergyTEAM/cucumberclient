import React, { useEffect, useState } from 'react'
import withRequiredLogin from 'hoc/RequiredLogin'
import { RouteComponentProps } from 'react-router'
import { Col, Row } from 'antd'
import WriteReview from 'components/review/WriteReview'
import { getArticle } from 'api/article'

const Review: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  // 리뷰 작성, 리뷰 조회를 이 컴포넌트에서 처리하기

  const [targetArticle, setTargetArticle] = useState<Nullable<ArticleData>>()

  const getArticleInfo = async (itemId: string) => {
    const detailInfo = await getArticle(itemId)
    setTargetArticle(detailInfo)
  }

  // 상품관련 정보를 요청합니다.
  useEffect(() => {
    if (props.match) {
      getArticleInfo(props.match.params.id)
    }
  }, [])

  return (
    <Row gutter={20}>
      <Col xs={24} md={24}>
        <WriteReview articleInfo={targetArticle} />
      </Col>
    </Row>
  )
}

export default withRequiredLogin(Review)
