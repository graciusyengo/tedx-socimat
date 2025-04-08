import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import WhatsAppButton  from '../WhatsAppButton/WhatsAppButton'
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main>
        <Outlet />
      </main>

      <WhatsAppButton/>
      <Footer />
    </div>
  )
}

export default Layout