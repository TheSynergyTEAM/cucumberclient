import axios from 'axios'

// axios를 사용하기 전 인스턴스에 대한 내용을 설정합니다.
export default function createAxiosInstance(): void {
  axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : ''

  // 요청 혹은 응답을 가로채서 어떤 행위를 할 수 있는 인터셉터를 정의합니다.
  // 참고: https://xn--xy1bk56a.run/axios/guide/interceptors.html
  axios.interceptors.request.use((value) => {
    const token = localStorage.getItem('token')
    if (token) {
      value.headers.Authorization = token
    }
    return value
  })
  axios.interceptors.response.use((value) => {
    if (value.headers.authorization) {
      localStorage.setItem('token', value.headers.authorization)
    }
    return value
  })
}
