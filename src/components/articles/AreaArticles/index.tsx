import { Empty, Row } from 'antd'
import { SectionBase } from 'components/main/SectionContainer'
import React from 'react'
import Card from '../Card'
import { useAreaArticles } from '../hooks/articles'
import ArticleLoading from '../Loading'

const AreaArticles: React.FC = () => {
  const { articles, loading, empty } = useAreaArticles()

  return (
    <SectionBase title="최근 매물">
      <Row gutter={20} justify="start">
        {loading ? (
          <ArticleLoading />
        ) : empty ? (
          <Empty description="데이터가 없습니다." image="/images/no-data.png" />
        ) : (
          articles.map((article, i) => (
            <Card article={article} key={`card-${i}`} />
          ))
        )}
      </Row>
    </SectionBase>
  )
}

export default AreaArticles
