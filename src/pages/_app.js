import '@/styles/globals.css'
import Header from './header'
// import Profile from './profile'
export default function App({ Component, pageProps }) {
  return ( 
  <>
  <Header/> 
{/* <Profile/> */}
   <Component {...pageProps} />
   </> )
  
}
