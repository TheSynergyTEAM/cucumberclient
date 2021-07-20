import axios from 'axios'

// 로그인
export const login: (user: LoginUser) => Promise<User> = async (user) => {
  try {
    const { data: userData } = await axios.post('/login', {
      email: user.email,
      password: user.password
    })
    return userData
  } catch (error) {
    throw error.response.data
  }
}

// 토큰으로 사용자정보 받아오기
export const loginByToken: (token: string) => Promise<User> = async (token) => {
  try {
    const { data: userData } = await axios.post('/refresh', {
      token
    })
    return userData
  } catch (error) {
    throw error.response.data
  }
}

// 회원가입
export const signUp: (user: SignUpInfo) => Promise<boolean> = async (user) => {
  try {
    const { data } = await axios.post('/member', user)
    return !!data.id
  } catch (error) {
    throw error.response.data
  }
}

// 프로필 조회
export const getMember: (id: number) => Promise<User> = async (id) => {
  try {
    const { data } = await axios.get(`/member/${id}`)
    return data
  } catch (error) {
    throw error.response.data
  }
}

// 로그아웃
export const logout: () => void = () => {
  // localStorage에 저장된 토큰을 삭제
  return localStorage.removeItem('token')
}

// 회원정보 수정
export const updateUser: (editData: User) => Promise<User> = async (
  editData
) => {
  try {
    const { data } = await axios.patch(`/member/${editData.id}`, editData)
    return data
  } catch (error) {
    throw error.response.data
  }
}

// 회원탈퇴하기
export const deleteUser: (userId: number) => Promise<User> = async (userId) => {
  try {
    const { data } = await axios.delete(`/member/${userId}`)
    return data
  } catch (error) {
    throw error.response.data
  }
}
