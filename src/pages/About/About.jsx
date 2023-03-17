import React from 'react'
import './About.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
import aboutimage from '../../assets/1671829300527-01.jpeg'
const About = () => {
  return (
    <div id="root" className="about-page">
      <motion.div
        whileInView={{ y: [35, 0] }}
        transition={{ ease: 'easeIn', duration: 0.2 }}
        className="about-topside"
      >
        About me
      </motion.div>
      <div className="about-lowerside container-fluid">
        <Grid container item lg={12} >
          <Grid lg={4} xl={4} md={4} sm={12} xs={12}>
            <motion.div
              whileInView={{ y: [30, 0] }}
              transition={{ ease: 'easeIn', duration: 0.5 }}
              className="hero-image"
            >
              <img src={aboutimage} alt="" />
            </motion.div>
          </Grid>
          <Grid lg={8} xl={8} md={8} sm={12} xs={12}>
            <motion.div whileInView={{ y: [35, 0] }}
              transition={{ ease: 'easeIn', duration: 0.3 }}
               className="about-hellothere">
              <span>Hello There !</span>
            </motion.div>
            <motion.div whileInView={{ y: [35, 0] }}
              transition={{ ease: 'easeIn', duration: 0.4 }} className="about-description">

              <span>I think of my personal website as my online home. It's a place where people from all over the world can learn about me, find my work, explore my ideas, and connect with me. In the digital age, everyone should have an online presence, and this starts with a personal website.
                <br />
                <br />
                My personal website is also my resume — anyone can Google my name and learn what I do. It's like a magnet for ideas, like-minded people, and work opportunities.
              </span>
            </motion.div>
            <div className="about-button">
              <a href='https://drive.google.com/file/d/1zV2zgJF68y_j_q_rle4aTmWtZHLHS7BV/view?usp=sharing'><button className='btn btn-success'><span>Download my Resume</span></button></a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
