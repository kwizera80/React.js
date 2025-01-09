import React from 'react'
import "../styles/service.css"
function Servicecard({ title, content, icons, number }) {
  return (
    <div>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className='iconsnumber'>
        <span className='card-icon'>{icons}</span>
        <span className='card-number'>{number}</span>
      </div>
    </div>
  )
}

export default Servicecard;