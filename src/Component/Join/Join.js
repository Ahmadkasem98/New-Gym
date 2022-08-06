import React, { useRef } from "react";
import './join.css';
import emailjs from 'emailjs-com';

function Join() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_149igp8', 'template_r5p9aik', form.current, 'ls2n0-L8tZ_bEyOhF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="join" id="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO </span>
                    <span>  LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">  WITH US?</span>
                </div>
            </div>
            <div className="right-j">

                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type='text' name='user_email' placeholder='Enter your email' />
                    <button className="btn btn-j">Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join ;
