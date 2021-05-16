import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
// import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #f2f7f3;
    overflow-y: auto;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Noto Sans KR', sans-serif;
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

  .ant-skeleton-element {
    width: 100%;
  }
`

export default GlobalStyle
