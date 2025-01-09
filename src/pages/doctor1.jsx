import React from 'react'
import Card1 from '../components/card1'
import { ourdoctor } from '../data/ourdoctor'
import "../styles/me.css"
function Doctor1() {
    return (
        <div className='doctor1'>
            <div className="info">
                <h1>lorem5</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repudiandae distinctio dolor omnis? Veniam quas alias reiciendis minima eaque iste?</p>
            </div>
            <div className="card-wraper">
                {
                    ourdoctor.map((item,index) => (

                        <Card1
                            title={item.title}
                            key={index}
                            image={item.Image}
                            icon={item.icon}
                            desc={item.Description}
                            patient={item.patient}
                            name={item.name}

                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Doctor1