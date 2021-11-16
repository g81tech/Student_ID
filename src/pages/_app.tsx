import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  Header from '../components/Header'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
