import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);
    let discount = 0;
    
    if (total > 60){
        discount = 10.00;
    }
    else if(total > 30){
        discount = 4.00; 
    }
    else if(total > 0){
        discount = 0.00;
    }

    return (
        <div className = "calculation">
            <h3 style={{color: "orange"}}>Enrolled Courses</h3>
            <br></br>
            <h4>Course Selected: {cart.length} </h4>
            <p>SubTotal: ${(total).toFixed(2)}</p>
            <p>Discount: ${discount}</p>
            <p>Total: ${(total - discount).toFixed(2)}</p>
        </div>
    );
};

export default Cart;