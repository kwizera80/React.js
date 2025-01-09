import React from 'react'
import Welcome from '../components/welcome';
import About from '../components/about'
import Proud from './proud';
import Services from '../pages/Services'
import Profile from '../pages/profile'
import Doctor from '../pages/doctor'
import Doctor1 from '../pages/doctor1'
import Card from '../components/card'
import Work from '../pages/work'
import Pat from'../components/pat'
import Patient from'../pages/patient'

const Home = () => {
  return (
    <div className='container'>
      <Welcome />
      <About />
      <Proud />
      <Services />
      <Profile />
      <Doctor />
      <Card />
      <Doctor1 />
      <Work />
      <Pat/>
      <Patient/>


    </div>
  );
}

export default Home