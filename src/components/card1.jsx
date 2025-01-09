import React from 'react'
function Card1({title,name,image,desc,icon,specialization,patient}) {
  return (
    <div className="card">
        <div className='doctor-image'>
        <image src={image} alt=""/>
        <h1>{name}</h1>
        <span>{title}</span>
        <span>{specialization}</span>

        </div>
    <div className="content">
        <div>
            <h4>{patient}
            </h4>
            <p>{desc}</p>
        </div>
        <div className="icon">
            <i>{icon}</i>
        </div>
    </div>
    </div>
  )
}

export default Card1;