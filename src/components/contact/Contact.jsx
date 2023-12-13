
import React from 'react';
import { motion } from "framer-motion";
import Popup from 'reactjs-popup';
import burger from '../../assets/burger2.png'; 

function Contact(){
return(
<div className='contact'>

<motion.form
               initial={{
                x: "-100vw",
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{ delay: 0.2}}
        >
            <h2>Contact Us</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />

            <textarea placeholder="Message..." cols="30" rows="10"></textarea>
            <Popup trigger={<button type="button">Send</button>}
            >
                <div style={{color:"red", transform: 'translate(25%, -700%)', backgroundColor: '#fff',padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Thank you for contacting us! We will get back to you shortly.</div>

            </Popup>
            </motion.form> 

<div className='formBorder'>
    <div>
        <img src={burger} alt="" />
    </div>
</div>


</div>); 
}
export default Contact; 