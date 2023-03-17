import React from 'react'
import './Work.css'

import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Why = () => {
  
  return (
    <div >
      <div className="work-main">
        <motion.div
          whileInView={{ y: [40, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
          className="work"
        >
          <span>Work</span>
        </motion.div>

        <div className="cards container">
          <Grid className="container-fluid" container item spacing={3} lg={12}>
            <Grid md={6} lg={3} sm={12} xs={12} xl={3}>
              <motion.div
                className="div container"
                whileInView={{ y: [50, 0] }}
                transition={{ ease: 'easeIn', duration: 0.2 }}
              >
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    className="image"
                    src="https://m.media-amazon.com/images/I/71MwcH2AAcL._UL1500_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Static Website</Card.Title>
                    <Card.Text>
                      Build a Static website for my friends for their new
                      startup Taan tote.
                    </Card.Text>
                    <a
                      className="card-btn"
                      href="https://taantote.github.io/taan_tote/index.html"
                    >
                      <Button>Go to the project</Button>
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Grid>
            <Grid md={6} lg={3} sm={12} xs={12} xl={3}>
              <motion.div
                className="div container"
                whileInView={{ y: [50, 0] }}
                transition={{ ease: 'easeIn', duration: 0.3 }}
              >
                <Card style={{ width: '18rem' }} className="cardspace">
                  <Card.Img
                    variant="top"
                    className="image"
                    src="https://twisthink.com/wp-content/uploads/2018/02/IoT-Monitoring-System-Developed-to-Track-Water-Quality-Conditions.jpeg"
                  />
                  <Card.Body>
                    <Card.Title>Water Quality Monitoring System</Card.Title>
                    <Card.Text>
                      Build a system that monitors the quality of water in
                      realtime.
                    </Card.Text>
                    <a
                      className="card-btn"
                      href="https://docs.google.com/presentation/d/1cI_IFKUrjMz1tGC3MAxDNQ0o76gV2BNY/edit?usp=sharing&ouid=115146467678692744528&rtpof=true&sd=true"
                    >
                      <Button variant="primary">Go to the project</Button>
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Grid>
            <Grid md={6} lg={3} sm={12} xs={12} xl={3}>
              <motion.div
                whileInView={{ y: [50, 0] }}
                transition={{ ease: 'easeIn', duration: 0.4 }}
                className='div container'
              >
                <Card style={{ width: '18rem' }} className="cardspace1">
                  <Card.Img
                    variant="top"
                    className="image"
                    src="https://www-file.huawei.com/-/media/corp2020/sustainability/story/vmall.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Smart E Waste Bin</Card.Title>
                    <Card.Text>
                      Enabling them to simplify recycling. It sorts and
                      compresses the waste automatically
                    </Card.Text>
                    <a className="card-btn" href="https://www.bine.world/">
                      <Button variant="primary">Go to the project</Button>
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Grid>
            <Grid md={6} lg={3} sm={12} xs={12} xl={3}>
              <motion.div
                whileInView={{ y: [50, 0] }}
                transition={{ ease: 'easeIn', duration: 0.5 }}
                className='div container'
              >
                <Card style={{ width: '18rem' }} className="cardspace2">
                  <Card.Img
                    variant="top"
                    className="image"
                    src="https://www.unitear.com/resources/img/3-3-1-1.png"
                  />
                  <Card.Body>
                    <Card.Title>Web AR</Card.Title>
                    <Card.Text>
                      Web AR is a digital technology which help us to share
                      arugmented reality experiences
                    </Card.Text>
                    <a
                      className="card-btn"
                      href="https://docs.google.com/presentation/d/1g0NSed3WqznINGHPdQ_5sAGRxKZHu72i/edit?usp=sharing&ouid=115146467678692744528&rtpof=true&sd=true"
                    >
                      <Button variant="primary">Go to the journal</Button>
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div
        className="work-submain"
      >
        <motion.div
          whileInView={{ y: [35, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
          className="my-services"
        >
          <span>My Services</span>
        </motion.div>
        <Grid lg={12} item container>
          <Grid lg={3} xl={3} md={4} sm={6} xs={12}>
            <motion.div whileInView={{ y: [35, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
            className="service-body">
              <div className="service-icons">
                <i class="fa-brands fa-react"></i>
              </div>
              <span>Web Development</span>
            </motion.div>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={6} xs={12}>
            <motion.div whileInView={{ y: [35, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
            className="service-body">
              <div className="service-icons">
                <i class="fa-solid fa-c"></i>
              </div>
              <span>C Projects</span>
            </motion.div>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={6} xs={12}>
            <motion.div whileInView={{ y: [35, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
           className="service-body">
              <div className="service-icons">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <span>Designing</span>
            </motion.div>
          </Grid>
          <Grid lg={3} xl={3} md={4} sm={6} xs={12} >
            <motion.div whileInView={{ y: [35, 0] }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
           className="service-body">
              <div className="service-icons">
                <i className="fa-solid fa-object-group service-icon"></i>
              </div>
              <span>Marketing</span>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Why
