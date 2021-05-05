import axios, { AxiosResponse } from 'axios'

export const getAllArticles: () => Promise<ArticleData[]> = async () => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleData[]>>('/item')
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
