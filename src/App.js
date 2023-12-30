//import REACT from "react";

import React from 'react'
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section1'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Newsletter from './components/Newsletter/Newsletter'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
   
    <Header/>
  <Section1/>
  <About/>
  <Services/>
  <FeaturedProducts/>
  <Contact/>
  <Blogs/>
  <Newsletter/>
  <Footer/>
 
 
    </>
  )
}

export default App