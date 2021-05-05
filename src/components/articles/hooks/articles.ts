import UserContext from 'context/user'
import { getAllArticles } from 'api/article'
import { useState, useEffect, useContext } from 'react'

// 상품을 가져온 뒤 등록일로 정렬한 후 5개까지만 가져옵니다.
export const useRecentArticles: () => ArticleData[] = () => {
  const { isLoggedIn } = useContext(UserContext)
  const [articles, setArticles] = useState<ArticleData[]>([])

  useEffect(() => {
    if (isLoggedIn) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(async () => {
        const articles = await getAllArticles()
        // 최근 순으로 정렬
        articles.sort(
          (a, b) => new Date(b.create).getTime() - new Date(a.create).getTime()
        )
        setArticles(articles.slice(0, 5))
      })()
    }
    return () => {
      setArticles([])
    }
  }, [isLoggedIn])

  return articles
}
