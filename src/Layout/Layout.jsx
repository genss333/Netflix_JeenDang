import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
  const { isLogin } = useSelector((state) => state.loginStatus);
  useEffect(() => {
    console.log(isLogin)
  }, [isLogin])
  
  return (
    <Fragment>
        {isLogin ? <Header/> : null}
        <Outlet />
        <Footer/>
    </Fragment>
  )
}

export default Layout