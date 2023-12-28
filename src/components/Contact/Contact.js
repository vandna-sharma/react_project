import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='container-fluid contact'>
        <div className='row'>
            <div className='m-5 w-50'>
                <h2>Be The First To Know, Everytime!</h2>
                <p>Drop in your favourite Email address so we can update you with latest offers, sales, coupon codes and product launches!</p>
            <form>

                <input type="email"  placeholder='enter your email here...' ></input>
                <button className='btn send'><strong>SEND</strong></button>
            </form>

            </div>

        </div>

    </div>
  )
}

export default Contact