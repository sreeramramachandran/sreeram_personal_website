import React from 'react'
import './Home1.css'
import { Grid } from '@mui/material'
import {Link} from '@mui/material'
import profilepic from '../../../assets/1671829300527-01.jpeg'
const Home1 = () => {
  return (
    <div id="root" className="home1-main-body">
      <Grid container lg={12} item>
        <Grid lg={12} md={12} sm={12} xs={12} xl={12}>
          <div className="main-content ">
            <img src={profilepic} alt="" />
            <span>- Sreerama Chandran -</span>
            <span>Web Developer | Engineer</span>
          </div>
          <div className="icons ">
           <a href='https://twitter.com/Sreeramxxxxx'> <i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.facebook.com/sreeram.navaloor'><i class="fa-brands fa-square-facebook"></i></a>
            <a href='https://linkedin.com/in/sreeramachandran-n'><i  class="fa-brands fa-linkedin-in"></i></a>
            
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFqzlgrNTKNxQqdSlzLHlnQPhZbfqGShFPlwkWRfzHNjcjlxfHLRDwVhNbJtFDVHGrQWhT'><i class="fa-solid fa-envelope"></i></a>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home1
