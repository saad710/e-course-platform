import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./CourseInfo.css";

const CourseInfo = (props) => {
    const {image,title,instructor,price} = props.course;
    return (
        <div className="main">
            <div>
                <img style={{height:"280px", width:"400px", padding:"30px"}} src={image} alt=""/>
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p className="best_seller">Bestseller</p>
                <p>by: {instructor}</p>
                <p>price: ${price}</p>
                <Button variant="info" className="btn-info" onClick = {() => props.handleAddCourse(props.course)} >Enroll Now</Button>{' '}
            </div>      
        </div>
    );
};

export default CourseInfo;