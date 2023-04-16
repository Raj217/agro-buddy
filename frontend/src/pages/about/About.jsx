import React from 'react'
import { Typography, Stack, Button, Grid, TextField, Container, Box } from '@mui/material';
import Banner from '../.././components/general/img/Banner';
import Team from './Images/team_thumbnail.png'

import './About.css'
function About() {
  return (
    <div className='About-section'>
      {/* for image and details  */}
      <h3 className="about_heading">ABOUT US</h3>
      <div className="underline"></div>
      <div className="about">
        <img className='image' src={Team} />
        <div className="about_text_div">
          <div className="about_text">
            <div className="about_agro">
              <b> ABOUT Agro-Budddy: </b>
              Agro-buddy ... This site is developed to find agriculture information, expert and products information.
              <br></br>
              <br></br>
              A huge population of our country is directly or indirectly dependent on farming.
              The national GDP from farming is around 20% every year.
              It gives employment to over 60%​ of the population.
              <br></br>
              <br></br>
              With this mindset, we have created a website that aims to help farmers in multiple ways. Firstly, users will need to sign up on our website to search for their crops. In the search section, users can search for a crop and will be provided with all the details about the suitable conditions necessary to grow that particular crop. The NPK value of the crop will also be provided.

              In addition, we have included graphs (histograms and pie charts) that will provide a quick overview of weather conditions such as rainfall, humidity, and temperature. By using these parameters, farmers can get a better idea of which crops will be suitable for their particular location.

              Furthermore, we have a help section where users can find information about agriculture through our recommended videos specifically tailored to agriculture.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
