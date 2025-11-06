import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import StatsSection from "../components/StatsSection.jsx";
import Services from "../components/Services.jsx";
import Choose from "../components/Choose.jsx";


function Home() {
  return (
    <>    <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <Choose /></>
  )
}

export default Home