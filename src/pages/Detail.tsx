import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import DetailInfo from 'components/detail/DetailInfo'
import ImgBox from 'components/detail/ImgBox'
import { getArticle } from 'api/article'

const Detail: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [articleInfo, setArticleInfo] = useState<ArticleData>()

  const getArticleInfo = async (itemId: string) => {
    const detailInfo = await getArticle(itemId)
    setArticleInfo(detailInfo)
  }

  // 상품관련 정보를 요청합니다.
  useEffect(() => {
    getArticleInfo(props.match.params.id)
  }, [])
  return (
    <Row justify="space-between">
      {articleInfo ? (
        <>
          {articleInfo.fileid.length > 0 && (
            <Col xs={24} md={11}>
              <ImgBox fileList={articleInfo.fileid} />
            </Col>
          )}
          <Col xs={24} md={articleInfo.fileid.length > 0 ? 11 : 24}>
            <DetailInfo articleInfo={articleInfo} />
          </Col>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Row>
  )
}

export default Detail
