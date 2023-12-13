// Write all the code here

import React from "react"; 
import {motion} from "framer-motion"; 
import Founder from "./Founder"; 
import Menu from "./Menu"; 
import MenuCard from "./MenuCard";
import bg from "../../assets/bg.jpg";

const options ={ 
    initial:{ 
        x:"-100%",
        opacity:0,
    },
    whileInView:{ 
        x:0,
        opacity:1,
    }
}

function Home(){ 
    return(
      <div className="home"> 
      <div>
        <h1>Burger Shop</h1>
        <p>Give Yourself A Tasty Burger</p>

        
      </div>
      
      <a href="/Menu">Explore Menu</a>
        
      </div>
    );
}
export default Home; 

