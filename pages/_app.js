import '../styles/globals.css'
import { AppWrapper as DeckProvider } from '../src/Context/AppContext'

function MyApp({ Component, pageProps }) {
  return <DeckProvider>
    <Component {...pageProps} />
  </DeckProvider>
}

export default MyApp
