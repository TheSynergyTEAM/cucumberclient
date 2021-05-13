import axios, { AxiosResponse } from 'axios'

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
