import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FaceBookIcon from '@mui/icons-material/Facebook'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FaceBookIcon/>
            <LinkedinIcon/>
        </div>
        <p>&copy; 2023 hungrystomach.com</p>
    </div>
  )
}

export default Footer