import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/mockup1.jpg'

import image1 from '../../assets/images/img-grid-1.jpg'
import image2 from '../../assets/images/inside-weather-dbH_vy7vICE-unsplash.jpg'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'



const Header = () => {
  return (
    <Router>
    <div className='container-fluid header'>
        <div className='row d-flex justify-space-between'>
            <div className='col-md-2 logo'>
           <a href="" ><img src={logo} style={{width:200}}/></a>
            </div> 
<div className=' col-sm-12 col-lg-8'>
    <div className='navbar'>
       
        <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/Shop'>Shop</Link></li>
            <li><Link to ='/about'>About Us</Link></li>
            <li><Link to ='/services'>Services</Link></li>
            <li><Link to ='/Blog'>Blog</Link></li>
            <li><Link to ='/contact'>Contact</Link> </li>
            
        </ul>
       
    </div>
</div>
<div className='col-md-2 text-end'>
    <button className='btn btn-dark'>Sign Up</button>
</div>

   
    </div>

<div className='row slider'>
<div className='col-md-6 left'>
<h1>Modern Interior <span className='span-text'> Design Studio</span></h1>
<p>Introducing our Sofa Set, a masterpiece that seamlessly blends comfort and style to elevate your living space. Immerse yourself in the lap of luxury with this exquisite sofa set designed for those who appreciate the finer things in life.</p>
<div className='button-hero'>
<button className='btn shop shadow '>SHOP NOW</button>
<button className='btn btn-dark shadow'>EXPLORE</button>
</div>
    </div>
    <div className='col-md-6 right'>
    <img src={image1} className='img-fluid' style={{height:500}}/>
   <img src={image2} className='img-fluid second' style={{height:400}}/>
  
   
    </div>

</div>
<Routes>
            <Route path='/'></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      
    </div>
    </Router>
    
  )
}

export default Header