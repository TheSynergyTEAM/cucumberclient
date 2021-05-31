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
