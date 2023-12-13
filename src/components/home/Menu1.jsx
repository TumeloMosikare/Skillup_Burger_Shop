import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


function Menu(){ 


return(
<div id="menu">
<h1>Menu</h1> 


<MenuCard
 itemNum={1}
 burgerSrc={burger1}
 price={200}
 title="Cheese Burger"
 //handler={addToCartHandler}
  handler={1}
 delay={0.1}
/>
<MenuCard
 itemNum={1}
 burgerSrc={burger1}
 price={200}
 title="Cheese Burger"
 //handler={addToCartHandler}
  handler={1}
 delay={0.1}
/>
<MenuCard
 itemNum={1}
 burgerSrc={burger1}
 price={200}
 title="Cheese Burger"
 //handler={addToCartHandler}
  handler={1}
 delay={0.1}
/>

</div>

);
}
export default Menu;