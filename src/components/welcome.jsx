import React from 'react'
import "../styles/welcome.css"
import doctor from "../assets/2.jpg"
const Welcome = () => {
  return (
    <div className='welcome-container'>

      <div className="left-container">
        <h1>Welcome to Medicare We help patient live a health, longer life.</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi aut distinctio nulla libero, adipisci odit tempora porro deleniti dolorum molestiae enim incidunt iure qui rem esse alias impedit modi cumque animi recusandae voluptates ut ratione id! Possimus, in. Reiciendis? </p>
        <button>Request an Appointment</button>

        <div className="contents">
          <div>
            <span>30+</span>
            <p>Years of Experience</p>
          </div>
          <div>
            <span>15+</span>
            <p>Clinic Location</p>
          </div>
          <div>
            <span>100%</span>
            <p>Patient Stisfaction</p>
          </div>
        </div>
      </div>

      <div className="right-container">
        <img src={doctor} alt="doctor pic" />
      </div>
      <div>
      </div>

    </div>
  )
}

export default Welcome