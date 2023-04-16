import React, { useState, useEffect } from "react";
import "./DevelopersPage.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import ReactGa from "react-ga";

function Developer() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div class="container">
      <div class="box">
        <div class="imgBox">
          <img
            className="image"
            src="https://res.cloudinary.com/djkn56f5y/image/upload/v1681664389/raj_acrodj.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h2>
            Rajdristant Ghose <br />
            <div className="align">
              <span>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/rajdristant-ghose-286061231/"
                >
                  <LinkedInIcon />
                </Link>
              </span>
              <span>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/rajdristant/"
                >
                  <InstagramIcon />
                </Link>
              </span>
              <span>
                <Link target="_blank" href="https://github.com/Raj217/">
                  <GitHubIcon />
                </Link>
              </span>
            </div>
          </h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img
            className="image"
            src="https://res.cloudinary.com/djkn56f5y/image/upload/v1681664645/AnupamF-9f91f16b_1_-min_mhboew.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h2>
            Anupam Das
            <br />
            <div className="align">
              <span className="anchor">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/anupam-das-b49379182/"
                >
                  <LinkedInIcon />
                </Link>
              </span>
              <span>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/anupam_151101/"
                >
                  <InstagramIcon />
                </Link>
              </span>
              <span>
                <Link target="_blank" href="https://github.com/anupamdas1511">
                  <GitHubIcon />
                </Link>
              </span>
            </div>
          </h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img
            className="image"
            src="https://res.cloudinary.com/djkn56f5y/image/upload/v1681664388/priyajit_fuoflt.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h2>
            Priyajit Paul
            <br />
            <div className="align">
              <span>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/priyajit-paul-4b4840213/"
                >
                  <LinkedInIcon />
                </Link>
              </span>
              <span>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_priyajit_paul27_/"
                >
                  <InstagramIcon />
                </Link>
              </span>
              <span>
                <Link target="_blank" href="https://github.com/priyajit27">
                  <GitHubIcon />
                </Link>
              </span>
            </div>
          </h2>
        </div>
      </div>

      <div class="box">
        <div class="imgBox">
          <img
            className="image"
            src="https://res.cloudinary.com/djkn56f5y/image/upload/v1681664389/AkashF-4a4e565b_1_g2hd0q.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h2>
            Akash Suklabaidya
            <br />
            <div className="align">
              <span>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/akash-suklabaidya-435aa5227/"
                >
                  <LinkedInIcon />
                </Link>
              </span>
              <Link
                target="_blank"
                href="https://www.instagram.com/akash_sb__/"
              >
                <InstagramIcon />
              </Link>
              <span>
                <Link target="_blank" href="https://github.com/akashsb18">
                  <GitHubIcon />
                </Link>
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Developer;
