import { useEffect, useState } from 'react'
import { getChildAddress, getParentAddress } from 'api/address'
import { ChildAddress, ParentAddress } from 'types/address'

// 광역시,도
// 첫 렌더링 때 가져옵니다.
// 광역시,도의 상태와 그 하위 주소들의 상태와
// 하위 주소의 Select box disabled 상태를 반환합니다.
export const useAddrCity: (
  id: Nullable<number>
) => {
  parentAddress: ParentAddress[]
  childAddress: Nullable<ChildAddress>
  childAddrDisabled: boolean
} = (id) => {
  const [parentAddress, setParentAddress] = useState<ParentAddress[]>([])
  const [childAddress, setChildAddress] = useState<Nullable<ChildAddress>>(null)
  const [childAddrDisabled, setChildAddrDisabled] = useState(true)

  // 광역시,도를 가져와서 세팅합니다.
  useEffect(() => {
    const getParentAddrInner = async () => {
      try {
        const address = await getParentAddress()
        setParentAddress(address)
      } catch (error) {
        console.log(error)
      }
    }
    getParentAddrInner()
  }, [])

  // 광역시,도가 변경될 때마다 하위 주소들을 업데이트 합니다.
  // 모든 값을 가져오면 disabled를 해제하고 상태 값을 업데이트 합니다.
  useEffect(() => {
    if (id !== null && id !== undefined) {
      const getChildAddrInner = async (id: number) => {
        try {
          setChildAddrDisabled(true)
          const address = await getChildAddress(id)
          setChildAddress(address)
          setChildAddrDisabled(false)
        } catch (error) {
          console.error(error)
        }
      }
      getChildAddrInner(id)
    } else {
      setChildAddrDisabled(true)
    }
  }, [id])

  return {
    parentAddress,
    childAddress,
    childAddrDisabled
  }
}
