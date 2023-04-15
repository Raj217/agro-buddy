import React, { useState, useEffect } from 'react'
import './DevelopersPage.css'

function Developer() {

    return (
        <>
            <div class="container">
                <div class="box">
                    <div class="imgBox">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />

                    </div>
                    <div class="content">
                        <h2>Rajdristant Ghose <br />
                            <span>Sophomore - CSE</span>
                        </h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox">
                        <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h2>Anupam Das<br />
                            <span>Sophomore - CSE</span></h2>
                    </div>
                </div >
                <div class="box">
                    <div class="imgBox">
                        <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h2>Priyajit Paul<br />
                            <span>Sophomore - CSE</span></h2>
                    </div>
                </div >
                <div class="box">
                    <div class="imgBox">
                        <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                    </div>
                    <div class="content">
                        <h2>Akash Suklabaidya<br />
                            <span>Sophomore - CSE</span></h2>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Developer;