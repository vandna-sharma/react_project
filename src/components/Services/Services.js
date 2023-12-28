import React from 'react'
import './Services.css'
import services1 from '../../assets/images/truck.svg'
import services2 from '../../assets/images/bag.svg'
import services3 from '../../assets/images/return.svg'
import services4 from '../../assets/images/support.svg'

import services6 from '../../assets/images/data_sofa-beds_alfonso-fabric-sofa-cum-bed_left-align_indigo-blue_1-810x702.webp'

const Services = () => {
  return (
    <div className='container-fluid'>
        <div className='row my-5 bg-light'>
            <div className='col-md-7 services-desc'>
              <h1 className='text-center'>Our Services</h1>
              <p className='pt-2'>At <strong>SOFASYMPHONY</strong>, we are committed to providing more than just exceptional sofa sets; we offer a range of services to ensure your entire shopping experience is seamless and enjoyable. Our dedicated team is here to assist you at every step, making sure you find the perfect sofa set for your home.</p>
                <div className='services-points'>
                  <div className='col-md-6'>
                  <img src={services1}/>
                  <p><strong>Fast & Free Shipping</strong></p>
                  <p> we understand the excitement of anticipating a new addition to your home, and we believe that your shopping experience should be as convenient as it is delightful. </p>
                  </div>
                  <div className='col-md-6'>
                  <img src={services2}/>
                  <p><strong>Easy to Shop</strong></p>
                  <p> where the joy of finding the perfect sofa set meets unparalleled convenience. We've designed our online shopping experience to be as easy , delightful and convenient.</p>
                  </div>
                  </div>
                  <div className='services-points'>
                    <div className='col-md-6'>
                  <img src={services3}/>
                  <p><strong>Hassle Free Returns</strong></p>
                  <p>customers can easily and smoothly return products they are dissatisfied with or that are defective. </p>
                  </div>
                  <div className='col-md-6'>
                  <img src={services4}/>
                  <p><strong>24/7 Support</strong></p>
                  <p> we understand that your needs and inquiries can arise at any time, day or night.</p>
                  </div>

                </div>
            </div>
<div className='col-md-5 services-image py-5'>
  <img src={services6} className='img1'/>
 
 

</div>
        </div>
    </div>
  )
}

export default Services