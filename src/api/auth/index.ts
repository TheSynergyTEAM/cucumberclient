import axios from 'axios'

type LoginUser = {
  email: string
  password: string
}

// 로그인
export const login: (user: LoginUser) => Promise<User> = async (user) => {
  try {
    const { data, headers } = await axios.post('/login', {
      email: user.email,
      password: user.password
    })
    // 로컬 스토리지에 토큰 등록
    localStorage.setItem('token', headers.authorization)
    return data
  } catch (error) {
    throw error.response.data
  }
}
