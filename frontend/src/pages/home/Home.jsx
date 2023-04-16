import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Youtube from "../../components/Youtube/Youtube";
import ReactGa from "react-ga";

useEffect(() => {
  ReactGa.pageview(window.location.pathname);
}, []);

function Home() {
  return (
    <div>
      <Hero />
      <Youtube />
    </div>
  );
}

export default Home;
