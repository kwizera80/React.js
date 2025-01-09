import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import doctor from "../assets/no.jpg"
import "../styles/page.css"
function about() {
    return (
        <div className='about-container'>
            <div className='about-upper'>
                <h1>providing the best medical services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, eaque!</p>
            </div>
            <div className='about-lower'>
                <div className="aboutcard">
                    <div className="cardimage"><img src={doctor} alt="" /></div>
                    <div className="cardcontent">
                        <h1>FindDoctor</h1>
                        <p>Lorem,  tempora consequatur! </p>

                    </div>
                    <span className='icon'> <FaArrowRight /></span>
                </div>
                <div className="aboutcard">
                    <div className="cardimage"><img src={doctor} alt="" /></div>
                    <div className="cardcontent">
                        <h1>KAMBANDA Yvonne</h1>
                        <h4>Acuruza ibitindi muri pharmacy ! </h4>

                    </div>
                    <span className='icon'> <FaArrowRight /></span>
                </div>
                <div className="aboutcard">
                    <div className="cardimage"><img src={doctor} alt="" /></div>
                    <div className="cardcontent">
                        <h1>GetDoctor</h1>
                        <p>Lorem,  tempora consequatur! </p>

                    </div>
                    <span className='icon'> <FaArrowRight /></span>
                </div>
            </div>

        </div>
    )
}

export default about