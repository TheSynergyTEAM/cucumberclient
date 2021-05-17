import userContext from 'context/user'
import { getAllArticles, getAllArticlesWithArea } from 'api/article'
import { useState, useEffect, useContext } from 'react'

type SortOptions = 'recent' | 'hot'
type SortMethod<T> = (a: T, b: T) => number

interface HooksMeta {
  articles: ArticleData[]
  loading: boolean
  empty: boolean
}

// 보여주는 최대 갯수
export const MAX_VIEW_COUNT = 3
// 컬럼 사이즈
export const COLUMN_SIZE = (24 / MAX_VIEW_COUNT).toFixed(0)

// 최근 순 정렬
const sortRecent: SortMethod<ArticleData> = (cur, next) => {
  return new Date(next.created).getTime() - new Date(cur.created).getTime()
}

// 핫한 매물 정렬
const sortHot: SortMethod<ArticleData> = (cur, next) => {
  return (
    next.views -
    cur.views -
    (new Date(next.created).getTime() - new Date(cur.created).getTime())
  )
}

// 내 지역별 정렬
const sortArea: SortMethod<ArticleData> = (cur, next) => {
  return sortRecent(cur, next)
}

// 매물 정렬
export const useArticles: (sortOption: SortOptions) => HooksMeta = (opt) => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      const articles = await getAllArticles()

      switch (opt) {
        case 'recent':
          articles.sort(sortRecent)
          break
        case 'hot':
          articles.sort(sortHot)
          break
      }

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

// 지역별
export const useAreaArticles: () => HooksMeta = () => {
  const { user } = useContext(userContext)
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(async () => {
        const articles = await getAllArticlesWithArea(user.city, user.street1)

        articles.sort(sortArea)
        setArticles(articles.slice(0, MAX_VIEW_COUNT))
        setLoading(false)
        setEmpty(!articles.length)
      })()

      return () => {
        setArticles([])
        setLoading(true)
        setEmpty(false)
      }
    }
  }, [])

  return { articles, loading, empty }
}
