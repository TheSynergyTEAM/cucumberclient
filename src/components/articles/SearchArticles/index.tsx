import { Empty, Row } from 'antd'
import { SectionBase } from 'components/main/SectionContainer'
import React from 'react'
import Card from '../Card'
import { useSearchArticles } from '../hooks/articles'
import ArticleLoading from '../Loading'

interface SearchArticlesProps {
  search: string
}

const SearchArticles: React.FC<SearchArticlesProps> = ({ search }) => {
  const { articles, loading, empty } = useSearchArticles(search)
  return (
    <SectionBase title="검색결과">
      <h2>{search}(으)로 검색하신 결과입니다.</h2>
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

export default SearchArticles
