import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import Banner from '../assets/banner.png'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer' >
            <h1>Hungry Stomach</h1>
            <p>All Kinds of food available</p>
            <Link to="/menu">
                <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home