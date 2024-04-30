import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'

const Home = () => {
  return (
    <div className='header'>
     <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinay expertise.</p>
        <button>View Menu</button>
     </div>
    </div>
  )
}

export default Home
