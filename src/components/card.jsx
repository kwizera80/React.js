import React from 'react'
const Card = ({ image, name, tittle, patients, desc, icon }) => {
    return (
        <div className='doctor-card'>

            <div className="dimage">
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <h4 className="tittle">{tittle}</h4>
            <div className="dcontent">
                <div>
                    <p>{patients} patients</p>
                    <p>{desc}</p>
                </div>
                <div className="dicon">
                    <i className="icon">{icon}</i>
                </div>
            </div>





        </div>
    )
}

export default Card