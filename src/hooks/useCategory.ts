import { useEffect, useState } from 'react'
import { getCategories } from 'api/article'

// 첫 렌더링시 카테고리정보를 받아옵니다
export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const requestCategory = async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }
    requestCategory()
  }, [])

  return {
    categories
  }
}
