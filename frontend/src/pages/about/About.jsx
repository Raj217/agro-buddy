import React from 'react'
import { Typography, Stack, Button, Grid, TextField, Container, Box } from '@mui/material';
import Banner from '../.././components/general/img/Banner';
import './About.css'
function About() {
  return (
    <div className='about1'>
      {/* for image and details  */}
      <h3 className="about_heading">ABOUT US</h3>
      <div className="underline"></div>
      <div className="about">
      <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="image1" className="about_image" />
        <div className="about_text_div">
          <div className="about_text">
          <div className="about_agro">
           <b> ABOUT Agro-Budddy: </b>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos reiciendis tenetur iusto obcaecati. Officiis provident sequi beatae cupiditate eos excepturi dolor possimus laudantium vel dolores ut, laborum cumque, magnam quam ab dolore consectetur? Iste, explicabo inventore architecto laborum sunt quasi quibusdam? Quasi totam possimus vero! Officiis asperiores ips!
           <br></br>
           <br></br>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos reiciendis tenetur iusto obcaecati. Officiis provident sequi beatae cupiditate eos excepturi dolor possimus laudantium vel dolores ut, laborum cumque, magnam quam ab dolore consectetur? Iste, explicabo inventore architecto laborum sunt quasi quibusdam? Quasi totam possimus vero! Officiis asperiores ipsa!
           <br></br>
           <br></br>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos reiciendis tenetur iusto obcaecati. Officiis provident sequi beatae cupiditate eos excepturi dolor possimus laudantium vel dolores ut, laborum cumque, magnam quam ab dolore consectetur? Iste, explicabo inventore architecto laborum sunt quasi quibusdam? Quasi totam possimus vero! Officiis asperiores ipsa!
          </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About
