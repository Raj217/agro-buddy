import React, { useEffect } from "react";
import Team from "./Images/team_thumbnail.png";
import ReactGa from "react-ga";
import "./About.css";

useEffect(() => {
  ReactGa.pageview(window.location.pathname);
}, []);

function About() {
  return (
    <div className="About-section">
      {/* for image and details  */}
      <h3 className="about_heading">ABOUT US</h3>
      <div className="underline"></div>
      <div className="about">
        <img className="image" src={Team} />
        <div className="about_text_div">
          <div className="about_text">
            <div className="about_agro">
              <b> ABOUT Agro-Budddy: </b>
              This site is developed to find agriculture information and to help
              the farmers around the world to make farming easy.
              <br></br>
              <br></br>A huge population of our country is directly or
              indirectly dependent on farming. The national GDP from farming is
              around 20% every year. It gives employment to over 60%​ of the
              population.
              <br></br>
              <br></br>
              With this mindset,we tried to create a website that will help the
              farmers in multiple ways.First of all the user has to sign up in
              our website for searching his crops.There is a filter section
              where the user will give NPK value, humidity, temperature of the
              required conditions and after clicking the button there will be
              series of crops that will be shown which be feasible to grow with
              respect to these conditions .Also,in the search section,the user
              can search a crop and will get all the details of the suitable
              conditions that are necessary to grow the crop.There will be also
              be NPK value of the crop.In addition to, we also have
              graphs(histograms and pie charts) that will give a glance of the
              whether conditions such as rainfall, humidity, temperature.So by
              using these parameters, a farmer will get a better idea which
              crops will be suitable for that particular place. Also we have a
              help section where people can get information about agriculture
              through our recommended videos specific to agriculture.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
