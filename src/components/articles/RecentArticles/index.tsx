import { Empty, Row } from 'antd'
import { SectionBase } from 'components/main/SectionContainer'
import React from 'react'
import Card from '../Card'
import { useRecentArticles } from '../hooks/articles'
import ArticleLoading from '../Loading'

const RecentArticles: React.FC = () => {
  const { articles, loading, empty } = useRecentArticles()

  return (
    <SectionBase title="최근 매물">
      <Row gutter={20} justify="center">
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

export default RecentArticles
