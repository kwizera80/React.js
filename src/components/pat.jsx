import React from 'react'
import "../styles/pat.css"
import doctor from "../assets/2.jpg"
const Pat = () => {

  return (
    <div className='pat-container' >
      <div className="left-container">
        <h1>What our patient say.</h1>
        <p> world-class care for everyone.our health system offers unmatched expert health care</p>
        <img src={doctor} alt="doctor pic" />
        </div>
    </div>

  )
}


export default Pat