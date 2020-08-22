import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

* {
  padding: 0;
  box-sizing: border-box;
   margin: 0;
}

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default globalStyles
