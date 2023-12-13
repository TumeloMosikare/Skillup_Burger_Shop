
import React from 'react';
import Popup from 'reactjs-popup';
import burger from '../../assets/burger2.png'; 

function Contact(){
return(
<div className='contact'>

<form  action="">
<h2>Contact Us</h2>

<input type="text" name="name" placeholder='Enter Your Name '  />
<input type="email" name="email" id="email" placeholder='Enter Your Email'/>
<textarea name="" id="" cols="30" rows="10" placeholder='Enter Your message...'></textarea>

<Popup trigger=
{<button type="button">Send</button>}
>
</ Popup>

</form>
<div className='formBorder'>
    <div>
        <img src={burger} alt="" />
    </div>
</div>


</div>); 
}
export default Contact; 