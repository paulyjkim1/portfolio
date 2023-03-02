import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
  
}
