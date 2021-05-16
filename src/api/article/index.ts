import axios, { AxiosResponse } from 'axios'

export const getAllArticles: () => Promise<ArticleData[]> = async () => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleData[]>>(
      '/item/list'
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const getAllArticlesWithArea: (
  city: string,
  street: string
) => Promise<ArticleData[]> = async (city, street) => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ArticleData[]>>(
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
    console.error(error)
    throw new Error(error)
  }
}
