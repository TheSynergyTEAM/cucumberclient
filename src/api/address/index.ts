import axios, { AxiosResponse } from 'axios'
import type { ChildAddress, ParentAddress } from 'types/address'

// 광역시,도를 가져옵니다.
export const getParentAddress: () => Promise<ParentAddress[]> = async () => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ParentAddress[]>>(
      '/address/city'
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

// 광역시,도의 아이디로 "구" 단위를 가져옵니다.
export const getChildAddress: (id: number) => Promise<ChildAddress> = async (
  id
) => {
  try {
    const { data } = await axios.get<any, AxiosResponse<ChildAddress>>(
      `/address/city/${id}`
    )
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
