import { useEffect, useState } from 'react'

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
export const useAddrCity: () => {
  cities: City[]
} = () => {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    const getCitiesInner = async () => {
      // API 연계
      // 광역시,도 정보를 가져옵니다.
      const _cities = await getCities()
      setCities(_cities)
    }
    getCitiesInner()
  }, [])

  return {
    cities
  }
}

// API 연계용 테스트 코드
const getCities: () => Promise<City[]> = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, name: '서울특별시' },
          { id: 2, name: '경기도' }
        ]),
      500
    )
  })
}
