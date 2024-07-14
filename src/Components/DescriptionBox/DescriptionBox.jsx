import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
        An e-commerce website is an online platform for
         businesses to sell products or services to customers.
        It features product listings, a shopping cart, secure 
        payment processing, user accounts, search and navigation
         tools, customer reviews, and order management systems. 
         E-commerce sites often include marketing tools and provide
          the convenience of shopping anytime and anywhere, offering a
         wider selection of products than physical stores.
        
        <p>
        E-commerce websites also offer user account 
        functionality, allowing customers to create
         profiles, track their orders, and manage their
          personal information. Advanced search and navigation
          \ tools help customers find products easily through 
          filters and categories. Customer reviews and ratings sections
         provide valuable feedback for other shoppers.
        </p>
        </div>
    </div>
  )
}

export default DescriptionBox 
