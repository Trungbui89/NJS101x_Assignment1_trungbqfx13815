import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
// import Footer from './Footer'
import './style.scss'

const Layout = ({children}) => {
  const loginState = useSelector((state) => state.authReducer.loginState)
  return (
    <>
        {loginState ? <Header /> : null}
        <div className='blur' style={{top: '-18%', right: 0}}/>
        <div className='blur' style={{top: '36%', left: '-8rem'}}/>
        {children}
        {/* <Footer /> */}
    </>
  )
}

export default Layout