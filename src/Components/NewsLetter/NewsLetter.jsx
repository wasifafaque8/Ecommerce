import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email </h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input  type="email"  placeholder='Enter you email' />
        </div>
        <button>Subscribe</button>
      
    </div>
  )
}

export default NewsLetter
