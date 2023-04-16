import React from 'react'
import { Typography, Stack, Button, Grid, TextField, Container, Box } from '@mui/material';
import Banner from '../.././components/general/img/Banner';
import './About.css'
function About() {
  return (
    <div className='About-section'>
      {/* for image and details  */}
      <h3 className="about_heading">ABOUT US</h3>
      <div className="underline"></div>
      <div className="about">
      <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="image1" className="about_image" />
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
           With this mindset,we tried to create a website that will help the farmers in multiple ways.First of all the user has to sign up in our website for searching his crops.In the search section,the user can  search a crop and will get all the details of the  suitable conditions that are necessary to grow the crop.There will be also be NPK value of the crop.In addition to, we also have graphs(histograms and pie charts) that will give a glance of the whether conditions such as rainfall, humidity, temperature.So by using these parameters, a farmer will get a better idea which crops will be suitable for that particular place.
Also we have  a help section where people can get information about agriculture through our recommended videos specific to agriculture.
          </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About
