import React from 'react'
import './Home3.css'
import { Link } from '@mui/material'
import { motion } from 'framer-motion'
const Home3 = () => {
  return (
    <div className='home3-main'>
      <div className="hireme">
        <motion.div whileInView={{ y: [25,0] }}
        transition={{ ease: "easeIn", duration: 0.3 }}  className='hireme-heading'><h2>Hire Me!</h2></motion.div>
        <p> I'm not the smartest fellow in the world, But i sure can pick smart colleagues </p>
      </div>
      <a  className='btn btn-default btn-lg' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqzlgrNTKNxQqdSlzLHlnQPhZbfqGShFPlwkWRfzHNjcjlxfHLRDwVhNbJtFDVHGrQWhT">contact me
      </a>
      
    </div>
  )
}

export default Home3
