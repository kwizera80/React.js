import React from 'react'
import Ifoto from '../assets/5.jpg'
import "../styles/work.css"
import { IoStar } from "react-icons/io5";
function Work() {
    return (
        <div className='works-container'>

            <div className="yvona">



                <div className='wcontainer'>
                    <div className='workimage-continer'>
                        <img src={Ifoto} alt="man pic" />
                    </div>
                    <div className="info">

                        <h4>  em ipsum dolor</h4>
                        <div>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>
                </div>
                <p> Aut quae eaque ut accusamus officiis laborum consequatur? Veritatis facilis deleniti temporibus!</p>


            </div>
            
            <div className="yvona">



                <div className='wcontainer'>
                    <div className='workimage-continer'>
                        <img src={Ifoto} alt="man pic" />
                    </div>
                    <div className="info">

                        <h4>  em ipsum dolor</h4>
                        <div>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>
                </div>
                <p> Aut quae eaque ut accusamus officiis laborum consequatur? Veritatis facilis deleniti temporibus!</p>


            </div>
            
            <div className="yvona">



                <div className='wcontainer'>
                    <div className='workimage-continer'>
                        <img src={Ifoto} alt="man pic" />
                    </div>
                    <div className="info">

                        <h4>  em ipsum dolor</h4>
                        <div>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                    </div>
                </div>
                <p> Aut quae eaque ut accusamus officiis laborum consequatur? Veritatis facilis deleniti temporibus!</p>


            </div>
            
       
        </div>
    )
}

export default Work;