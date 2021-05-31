import axios, { AxiosResponse } from 'axios'

export const getAllArticles: () => Promise<ArticleCardData[]> = async () => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleCardData[]>>(
      '/item/list'
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 상품을 등록합니다
export const postArticle: (form: FormData) => Promise<number> = async (
  form
) => {
  console.log(form)
  try {
    const { data } = await axios.post<any, AxiosResponse<number>>('/item', form)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const getAllArticlesWithArea: (
  city: string,
  street: string
) => Promise<ArticleCardData[]> = async (city, street) => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleCardData[]>>(
      `/item/area`,
      {
        params: {
          city,
          street
        }
      }
    )
    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

// 카테고리 정보를 받아옵니다
export const getCategories: () => Promise<Category[]> = async () => {
  try {
    const { data } = await axios.get<any, AxiosResponse<Category[]>>(
      '/category'
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 특정 상품에 대한 정보를 받아옵니다
export const getArticle: (itemId: string) => Promise<ArticleData> = async (
  itemId
) => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleData>>(
      `/item/${itemId}`
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 판매한 상품에 대한 정보를 받아옵니다
export const getSellArticles: (userId: number) => Promise<ArticleCardData[]> =
  async (userId) => {
    try {
      const { data } = await axios.get<any, AxiosResponse<ArticleCardData[]>>(
        `item/sell?user=${userId}`
      )
      return data
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

// 구매한 상품에 대한 정보를 받아옵니다
export const getBuyArticles: (userId: number) => Promise<ArticleCardData[]> =
  async (userId) => {
    try {
      const { data } = await axios.get<any, AxiosResponse<ArticleCardData[]>>(
        `item/buy?user=${userId}`
      )
      return data
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
