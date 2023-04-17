import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Youtube from "../../components/Youtube/Youtube";
import ReactGa from "react-ga";

function Home() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Hero />
      <Youtube />
    </div>
  );
}

export default Home;
