import React from "react";
import Header from "./Header/Header";
import './Hero.css';
import './Header/Header';
import Hero_image from '../../src/assets/hero_image.png';
import Hero_image_back from '../../src/assets/hero_image_back.png';
import Heart from '../../src/assets/heart.png'
import calories from '../../src/assets/calories.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type:'spring' , duration:3}
    const mobile = window.innerWidth <= 768 ? true : false ;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="lift-h">
                <Header />

       {/* best Add  */}
                <div className="best-add">
                    <motion.div
                    initial={{left: mobile ? '170' : '238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}>
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Text */ }

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                { /* Start Figure */ }
                <div className="figure">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={985} start={800} delay='4' preFix='+' />
                        </span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={40} start={0} delay='2' preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* here are buttons */ }
                <div className="hero-button">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div
                initial={{right:'-1rem'}}
                whileInView={{right:'3rem'}}
                transition={transition}
                className="Heart">
                    <img src={Heart} alt='/' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero images */}
                <div className="hero-images">
                    <img src={Hero_image} alt="" className='Hero_image' />
                    <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                    src={Hero_image_back} alt="" className='Hero_image_back' />
                </div>
                {/* Calories */} 
                <motion.div
                initial={{right:'37rem'}}
                whileInView={{right:'28rem'}}
                transition={transition}
                className="calories"
                >
                    <img src={calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero ;