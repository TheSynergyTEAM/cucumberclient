import axios from 'axios'

// 좋아요눌렀을때의 처리
export const postFavourite: (
  itemid: number,
  memberid: number
) => Promise<any> = async (itemid, memberid) => {
  try {
    const { data } = await axios.post('/favourite', {
      itemid,
      memberid
    })
    return data
  } catch (error) {
    throw error.response.data
  }
}

// 내가 좋아요 누른 상품리스트 받아오기
export const getFavouriteList: (
  userid: number
) => Promise<ArticleCardData[]> = async (userId) => {
  try {
    const { data: favouriteList } = await axios.get(`/favourite?user=${userId}`)
    return favouriteList
  } catch (error) {
    throw error.response.data
  }
}

// 찜하기 취소
export const deleteFavourite: (
  itemId: number,
  memberId: number
) => Promise<void> = async (itemId: number, memberId: number) => {
  try {
    const { data } = await axios.delete(`/favourite/${itemId}/${memberId}`)
    return data
  } catch (error) {
    throw error.response.data
  }
}
