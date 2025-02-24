import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/BannerSection/Banner'
import Welcome from './Components/WelcomeSection/Welcome'
import Sitemaintenance from './Components/SiteMaintenance/Sitemaintenance'
import ContactUs from './Components/ContactUs/ContactUs'
function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Welcome />
      <ContactUs />
      <Sitemaintenance />
    </>
  )
}

export default App
