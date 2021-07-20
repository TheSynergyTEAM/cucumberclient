import axios from 'axios'

// 리뷰를 등록합니다
export const postReview: (review: FormData) => Promise<ReviewData> = async (
  review
) => {
  try {
    const { data } = await axios.post('/review', review)
    return data
  } catch (error) {
    throw error.response.data
  }
}

// 내가 작성한 모든 리뷰에 대한 정보를 받아옵니다
export const getAllReviewArticles: (
  userId: number
) => Promise<ArticleCardData[]> = async (userId) => {
  try {
    const { data } = await axios.get(`/review/list/all?user=${userId}`)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 판매상품 리뷰 대한 정보를 받아옵니다
export const getSellReviewArticles: (
  userId: number
) => Promise<ArticleCardData[]> = async (userId) => {
  try {
    const { data } = await axios.get(`/review/list/sell?user=${userId}`)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 구매상품 리뷰에 대한 정보를 받아옵니다
export const getBuyReviewArticles: (
  userId: number
) => Promise<ArticleCardData[]> = async (userId) => {
  try {
    const { data } = await axios.get(`/review/list/buy?user=${userId}`)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
