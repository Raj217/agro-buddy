import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import SignIn from '../../components/forms/SignIn';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import Whyus from '../WhyUS/Whyus';
import SearchCrops from '../../components/search/components/SearchCrops';
import SearchCard from '../../components/search/components/SearchCard';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import Youtube from '../../components/Youtube/Youtube';
import Content from '../../components/content/Content';
import Search from '../../components/search/Search';
import DevelopersPage from '../../components/DevelopersPage/DevelopersPage';

function Home() {
  return (
    <div>
      <Hero />
      {/* <SignIn /> */}
      {/* <Whyus />  */}
      {/* <Footer /> */}
      {/* <SearchCrops />
      <SearchCard /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <SearchCard /> */}
      {/* <Search /> */}
      {/* <Footer /> */}

      <DevelopersPage />


    </div>
  )
}

export default Home
