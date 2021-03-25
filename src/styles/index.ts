import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #f2f7f3;
    overflow: hidden;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  p {
    border: none;
    outline: none;
  }

`

export default GlobalStyle
