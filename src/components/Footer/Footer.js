import React from 'react'

import './Footer.css'

const FooterCol=(props)=>{
    return(
<div className='col-md-3 pt-4'>
              <h4>{props.title}</h4>
                <p>{props.link1}</p>
                <p>{props.link2}</p>
                <p>{props.link3}</p>
                <p>{props.link4}</p>
                <p>{props.link5}</p>
              
             
                  
            </div>
    )
}

const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className='row pt-5'>
            <FooterCol title="Corporate" link1="About Us" link2="Corporate Governance" link3="Pepperfry in the News" link4="Careers"/>
            <FooterCol title="Useful Links" link1="Explore Gift Cards" link2="Buy in Bulk" link3="Discover Our Brands" link4="Check Out Bonhomie, Our Blog" link5="Find a Store"/>
            <FooterCol title="Partner With Us" link1="Sell on Pepperfry" link2="Become a Franchisee" link3="Become Our Channel Partner" link4="Our Marketplace Policies" link5="Merchant Dashboard Login"/>
            <FooterCol title="Shop Built Safe Products" link1="Kids & Pet Friendly" link2="Certified Non-Toxic" link3="Made with Vegetarian Glue" link4="Scratch Resistant Finish"/>


            <hr/>
        </div>
      
    </div>
  )
}

export default Footer