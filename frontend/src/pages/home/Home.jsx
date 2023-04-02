import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import SignIn from '../../components/forms/SignIn';

function Home() {
  return (
    <div>
      {/* <Navbar />
      <Footer /> */}
      {/* <SignUp /> */}
      <SignIn />
    </div>
  )
}

export default Home
