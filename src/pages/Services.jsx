import React from 'react'
import Servicecard from '../components/servicecard'
import { cardData } from '../data/jsondata'
import "../styles/service.css"
const Services = () => {
  return (
    <div className='service-container'>

      <div className='service-content'>
        <h1>never give up</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="service-card-wraper">
        {
          cardData.map((item, index) => (
            <Servicecard
              key={index}
              title={item.title}
              content={item.description}
              icons={item.icon}
              number={index + 1} />
          ))
        }
  
      </div>
    </div>
  )
}

export default Services