import React from 'react'
import Portofilo from '../../components/HomeComponents/Portfolio'
import Services from '../../components/HomeComponents/Services'
import Welcome from '../../components/HomeComponents/Welcome'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <Services/>
    <Portofilo/>
    </>
  )
}

export default Home