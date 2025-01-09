import React from 'react';
import Card from "../components/card"
import { doctors } from '../data/doctorjson';
import "../styles/doctor.css";
const Doctor = () => {
    return (
        <div className="doctor-container">
            {doctors.map((item, index) => (
                <Card
                    key={index}
                    tittle={item.tittle}
                    image={item.image}
                    desc={item.desc}
                    icon={item.icon}
                    patients={item.patient}
                    name={item.name}
                />
            )
            )}
        </div>
    )
}

export default Doctor