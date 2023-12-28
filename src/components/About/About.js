import React from 'react'
import './About.css'
import about from '../../assets/images/about.jpg'

const About = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-5 about-image'>
        <img src={about}/>
        </div>
        <div className='col-lg-7'>
          <h1 className='text-center'>About Us</h1>
    <p className='about-desc'>
    Founded in [2000], <strong>SOFASYMPHONY</strong> has been a trusted name in the furniture industry, dedicated to providing our customers with an unparalleled shopping experience. Our journey began with a passion for creating functional yet aesthetically pleasing furniture that enhances the beauty of any living space.
    </p>
   <p className='about-desc'>
   At <strong>SOFASYMPHONY</strong>, our mission is to curate a diverse collection of furniture that caters to various tastes and preferences. We believe in offering not just products but solutions that reflect your personality and lifestyle. Quality, affordability, and customer satisfaction are the cornerstones of our business.
   </p>
   <ol>
    <li>
   <strong> Quality Craftsmanship:</strong> Each piece in our collection is meticulously crafted by skilled artisans who take pride in their workmanship.
    </li>
    <li><strong>Variety and Versatility:</strong> From contemporary designs to timeless classics, we offer a wide range of furniture options to suit every style and space.</li>
   <li><strong>Affordable Luxury:</strong> We believe that everyone deserves a beautifully furnished home. That's why we strive to offer affordable yet luxurious furniture without compromising on quality.</li>
   <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. Our knowledgeable and friendly team is here to assist you in finding the perfect pieces for your home.</li>
   </ol>
        </div>

      </div>
    </div>
  )
}

export default About