import axios from 'axios'

// 로그인
export const login: (user: LoginUser) => Promise<User> = async (user) => {
  try {
    const { data: loginData } = await axios.post('/login', {
      email: user.email,
      password: user.password
    })
    // 프로필 데이터 조회
    const userData = await getMember(loginData.id)
    return userData
  } catch (error) {
    throw error.response.data
  }
}

// 회원가입
export const signUp: (user: SignUpInfo) => Promise<boolean> = async (user) => {
  try {
    const { data } = await axios.post('/members', user)
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
export const updateUser: (user: User) => Promise<User> = async (user) => {
  try {
    const { data } = await axios.patch(`/member/${user.id}`)
    return data
  } catch (error) {
    throw error.response.data
  }
}
