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
export const getSellArticles: (
  userId: number
) => Promise<ArticleCardData[]> = async (userId) => {
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
export const getBuyArticles: (
  userId: number
) => Promise<ArticleCardData[]> = async (userId) => {
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

// 특정 사용자와 거래를 완료함
export const sellArticle: (
  itemId: number,
  sellerId: number,
  buyerId: number
) => Promise<ChatDetail> = async (itemId, sellerId, buyerId) => {
  try {
    const { data: soldData } = await axios.post('/item/sold', {
      itemId,
      sellerId,
      buyerId
    })
    return soldData
  } catch (error) {
    throw error.response.data
  }
}

// 검색한 상품에 대한 정보를 받아옵니다
export const getSearchArticles: (
  keyword: string
) => Promise<ArticleCardData[]> = async (keyword) => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleCardData[]>>(
      `item/search/2?keyword=${keyword}`
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 특정 상품을 삭제합니다.
export const deleteArticle: (
  itemId: number
) => Promise<ArticleCardData[]> = async (itemId) => {
  try {
    const { data } = await axios.delete<any, AxiosResponse<ArticleCardData[]>>(
      `item/${itemId}`
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 특정 상품을 판매상태를 변경합니다.
export const changeArticleStatus: (
  itemId: number,
  status: string
) => Promise<any> = async (itemId, status) => {
  try {
    const { data } = await axios.patch<any, AxiosResponse<any>>('/item/change', {
      itemId,
      status
    })
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
