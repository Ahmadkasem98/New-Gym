import React from "react";
import './Programes.css';
import {programsData} from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';


function Programes () {
    return (
        <div className="programes" id="programes">

            {/* Header */} 
            <div className="header-programes">
                <span className="stroke-text">explore our</span>
                <span>programes</span>
                <span className="stroke-text">to shape you</span>
            </div>

            {/* Catagories */ } 
            <div className="programe-catagories">
                {programsData.map((programe,i) => (
                    <div className="catagore" key={i}>
                        {programe.image}
                        <span>{programe.heading}</span>
                        <span>{programe.details}</span>
                        
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt='/' />
                            
                             </div>
                    </div>

                        
                ))}
            </div>


        </div>
    )
}

export default Programes ;