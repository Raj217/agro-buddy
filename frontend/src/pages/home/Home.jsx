import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import SignIn from '../../components/forms/SignIn';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import Whyus from '../WhyUS/Whyus';
import SearchCrops from '../../components/SearchCrops/SearchCrops';
import SearchCard from '../../components/SearchCrops/SearchCard';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';

function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <SignIn /> */}
      {/* <Whyus />  */}
      {/* <Footer /> */}
      {/* <SearchCrops />
      <SearchCard /> */}
      {/* <ForgotPassword /> */}
      <ResetPassword />
    </div>
  )
}

export default Home
