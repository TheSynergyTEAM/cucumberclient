import { getAllArticles } from 'api/article'
import { useState, useEffect } from 'react'

interface HooksMeta {
  articles: ArticleData[]
  loading: boolean
  empty: boolean
}

// 보여주는 최대 갯수
export const MAX_VIEW_COUNT = 4
// 컬럼 사이즈
export const COLUMN_SIZE = (24 / MAX_VIEW_COUNT).toFixed(0)

// 상품을 가져온 뒤 등록일로 정렬한 후 5개까지만 가져옵니다.
export const useRecentArticles: () => HooksMeta = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      const articles = await getAllArticles()
      // 최근 순으로 정렬
      articles.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      )
      setArticles(articles.slice(0, MAX_VIEW_COUNT))
      setLoading(false)
      setEmpty(!articles.length)
    })()
    return () => {
      setArticles([])
      setLoading(true)
      setEmpty(false)
    }
  }, [])

  return {
    articles,
    loading,
    empty
  }
}
