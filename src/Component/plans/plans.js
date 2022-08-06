import React from "react";
import './plans.css';
import {plansData} from '../../data/plansData'
import WhiteTick from '../../assets/whiteTick.png'

function Plans() {

    return (
        <div className="plans">
          <div className="blur plans-blur-1"></div>
          <div className="blur plans-blur-2"></div>

         <div className="plans-head">
            <span className="stroke-text">Ready To Start</span>
            <span>your journey</span>
            <span className="stroke-text">now withus</span>
         </div>

         { /* body of plans */}
        
          <div className="plans-container">
            {plansData.map((plan , i) => {
                return (
                <div className="plans-body" key={i}>
                        {plan.icon}
                      <span>{plan.name}</span> 
                      <span>$ {plan.price}</span> 
                    
                    <div className="features">
                      {plan.features.map((feat , i) => {
                        return (
                            <div className="feat" key={i}>
                                <img src={WhiteTick} alt='/' />
                                <span>{feat}</span>
                                
                            </div>
                        )
                      })}
                      </div>

                      <div>
                        <span>See more benefitd -></span>
                      </div>
                      <button className="btn">Join Now</button>

                </div>
                )
            })
            
        }
        </div>


        
        </div>
    )
}

export default Plans ;