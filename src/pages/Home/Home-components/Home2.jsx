import React from 'react'
import './Home2.css'
import { Fade, Grid, Hidden } from '@mui/material'

import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";
import 'react-circular-progressbar/dist/styles.css'
import ProgressBar from 'react-animated-progress-bar'
const Home2 = () => {
  
  return (
    <div className="home2">
      <div className="submain">
        <motion.div
        initial="hidden"
        whileInView={{ y: [30,0] }}
        transition={{ ease: "easeIn", duration: 0.2 }}><h1 className='skills'>Skills</h1></motion.div>
      </div>
      <motion.div initial="hidden"
        whileInView={{ y: [50,0] }}
        transition={{ ease: "easeIn", duration: 0.3 }} className="progress-bar-section">
        <Grid lg={12} item container>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="95"
            />
            <h3>HTML</h3>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="90"
            />
            <h3>CSS3</h3>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="85"
            />
            <h3>BOOTSTRAP</h3>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="75"
            />
            <h3>REACT.JS</h3>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="75"
            />
            <h3>C Language</h3>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={4} xs={6}>
            <ProgressBar
              className="progress-bar"
              width="230"
              trackWidth="13"
              percentage="50"
            />
            <h3>Node.js</h3>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default Home2
