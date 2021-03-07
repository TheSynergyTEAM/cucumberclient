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
    font-family: 'Roboto', sans-serif;
    background-color:"#f2f7f3";
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

 @font-face {
    font-family: 'Recipekorea';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle
