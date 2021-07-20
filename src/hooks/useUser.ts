import { useState, useEffect } from 'react'
import { updateUser } from 'api/auth'

// 사용자의 개인정보를 수정하고 관리합니다
export const useUserInfo: (
  user: Nullable<User>
) => {
  userInfo: Nullable<User>
  requestEditInfo: (obj: { [key: string]: string }) => void
} = (user) => {
  const [userInfo, setUserInfo] = useState<Nullable<User>>()

  const requestEditInfo = async (obj: { [key: string]: string }) => {
    try {
      console.log(userInfo)
      if (userInfo) {
        const response = await updateUser({ ...userInfo, ...obj })
        setUserInfo(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      setUserInfo(user)
    }
  }, [user])

  return {
    userInfo,
    requestEditInfo
  }
}
