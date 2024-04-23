import React from 'react'
import Heder from './Heder'
import Home from './Home'
import About from './About'
import Keyfunction from './Keyfunction'
import Footer from './Footer'
const Homepage = () => {
  return (
    <div className=' !scroll-smooth'>
        <Heder/>
        <Home/>
        <About/>
        <Keyfunction/>
        <Footer/>
    </div>
  )
}

export default Homepage
