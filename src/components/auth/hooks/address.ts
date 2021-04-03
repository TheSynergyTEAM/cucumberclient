// import { useEffect, useState } from 'react'

// 광역시,도에 관련된 타입
export interface City {
  id: number
  name: string
}

// 광역시,도의 하위 타입
// OO구 OO동 등
export interface CityChild {
  city: string
  streetList: string[]
}

// 광역시,도
// 첫 렌더링 때 가져옵니다.
export const useAddrCity = () => {
  return null
}
