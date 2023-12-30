import React from 'react'
import './Newsletter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import image1 from '../../assets/images/sofa.png'

const Newsletter = () => {
  return (
    <div className='Container-fluid'>
        <div className='row pt-5 newsletter-section'>
            <div className='col-md-9 newsletter-left'>
           <h3> <FontAwesomeIcon icon={faEnvelope} className='icon' />Subscribe to Newsletter</h3>
            <form className='newsletter-left-form'>
            
              <div className='col-auto'>  <input className='form-control ' type='text' name='name' placeholder='Enter your name'/></div>
              <div className='col-auto'>  <input className='form-control 'type='email' name='email' placeholder='Enter your email'/></div>
              <div className='col-auto'>    <button className='btn btn-success newsletter-button'><FontAwesomeIcon icon={faPaperPlane}/></button></div>
        
                            </form>
            </div>
            <div className='col-md-3 newsletter-right'>
                <img src={image1} className='img-fluid newsletter-image '/>

            </div>

        </div>

    </div>
  )
}

export default Newsletter