import React from 'react'

import chair1 from '../../assets/images/product-1.png'
import chair2 from '../../assets/images/product-2.png'
import chair3 from '../../assets/images/product-3.png'


import './Section1.css'

const Section1 = () => {
  return (
    <div className='container-fluid '>
        <div className='row  section1'>
            <div className='col-lg-4 '>
            <h1>Crafted with excellent material</h1>
            <p className='py-4 desc'>While simplicity is a hallmark of Nordic design, comfort is not compromised. Nordic chairs often feature ergonomic designs, ensuring that they are not only aesthetically pleasing but also comfortable for everyday use.</p>
           <button className='btn btn-dark'>SHOP NOW</button>
            </div>
            <div className=' col-md-8 chair'>
    <div className='col-md-3'>
        <img src={chair1}/>
       
        <h4 className='text-center pt-4'>Nordic Chair</h4>
        <p className='text-center fw-bold h4'>$50.00</p>
        </div>
        <div className='col-md-3'>
    <img src={chair2}/>
    <h4 className='text-center pt-4'>Kruzo Air Chair</h4>
        <p className='text-center fw-bold h4'>$50.00</p>
    </div>
    <div className='col-md-3'>
    <img src={chair3}/>
    <h4 className='text-center pt-4'>Erogonomic Chair</h4>
        <p className='text-center fw-bold h4'>$50.00</p>
    
    </div>
    </div>
        </div>
        
    </div>
  )
}

export default Section1