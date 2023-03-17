import React from 'react'
import './Contact.css'
import profilepic from '../../assets/1671829300527-01.jpeg'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="first-half-contact">
        <div className="contact-image">
          <img src={profilepic} alt="" />
        </div>
      </div>
      <div className="second-half-contact">
        <div className="contact-icons">
        <div className="icons ">
           <a href='https://twitter.com/Sreeramxxxxx'> <i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.facebook.com/sreeram.navaloor'><i class="fa-brands fa-square-facebook"></i></a>
            <a href='https://linkedin.com/in/sreeramachandran-n'><i  class="fa-brands fa-linkedin-in"></i></a>
            <a href='https://www.instagram.com/_traveloggeder/'><i  class="fa-brands fa-instagram"></i></a>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqzlgrNTKNxQqdSlzLHlnQPhZbfqGShFPlwkWRfzHNjcjlxfHLRDwVhNbJtFDVHGrQWhT'><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
