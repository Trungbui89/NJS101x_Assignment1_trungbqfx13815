import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
// import Footer from './Footer'
// import Loading from '../common/loading/Loading'
import './style.scss'

const Layout = ({children}) => {
  const loginState = useSelector((state) => state.authReducer.loginState)
  // const imgUploading = useSelector((state) => state.fileReducer.loading)

  return (
    <>
        {/* {imgUploading ? <Loading /> : null} */}
        {loginState ? <Header /> : null}
        <div className='blur' style={{top: '-18%', right: 0}}/>
        <div className='blur' style={{top: '36%', left: '-8rem'}}/>
        {children}
        {/* <Footer /> */}
    </>
  )
}

export default Layout