import React from "react";
import MyOrders from "./MyOrders";

function OrderDetails(){ 
    return(
        <div className="orderDetails"> 
            <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>Address:</p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>Name:</p>
                <p>Phone:</p>
            </div>

            <div>
                <h1>Order Status</h1>
                <p>Placed:</p>
                <p>Delivered:</p>
            </div>


            </main>
        </div>
    );
}

export default OrderDetails; 