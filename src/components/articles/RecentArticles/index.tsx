import { SectionBase } from 'components/main/SectionContainer'
import React from 'react'
import Card from '../Card'
import { useRecentArticles } from '../hooks/articles'

const RecentArticles: React.FC = () => {
  const articles = useRecentArticles()

  return (
    <SectionBase title="최근 매물">
      {articles.map((article, i) => (
        <Card article={article} key={`card-${i}`} />
      ))}
    </SectionBase>
  )
}

export default RecentArticles
