import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
// import Footer from './Footer'

const Layout = ({children}) => {
  const loginState = useSelector((state) => state.authReducer.loginState)
  return (
    <>
        {loginState ? <Header /> : null}
        {children}
        {/* <Footer /> */}
    </>
  )
}

export default Layout