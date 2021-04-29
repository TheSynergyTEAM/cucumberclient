import axios, { AxiosResponse } from 'axios'

// 상품을 등록합니다
export const postArticle: (form: any) => Promise<number> = async (form) => {
  console.log(form)
  try {
    const { data } = await axios.post<any, AxiosResponse<number>>('/item', {
      ...form
    })
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
