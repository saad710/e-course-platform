import React, { useState } from 'react';
import Cart from './Cart';
import CourseInfo from './CourseInfo';
import fakedata from './fakedata';
import "./Shop.css";

const Shop = () => {
    
    const first15 = fakedata.slice(0,15);
    const [course, setCourse] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course)=>{
        console.log("added",course);
        const newCart = [...cart, course];
        setCart(newCart); 
    }
    return (
        <div className="main-section">
            <div className="data">
                {course.map(ci => <CourseInfo handleAddCourse ={handleAddCourse} course = {ci}>
                </CourseInfo> ) 
            }       
            </div>
            <div className="cart">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;