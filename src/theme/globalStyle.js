import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  .firstliitem{
    border-left: 1px solid #272c31;
    background-color: #32383C;
  }
  .liborderright{
    border-right: 1px solid #272C31;
  }
 
`

export default GlobalStyle
