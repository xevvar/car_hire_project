import React from 'react';
import '../styles/car-item.css';
import { Link } from "react-router-dom";

function SingleCarItem({ car }){

  return (
    <div className="car-item-container">
      <h3>{car.carName}</h3>
      
      <img className="car-image" src={car.imgUrl} alt={`${car.brand}`} />
      Car's Capacity: {car.capacity}<br />
      Car's price: {car.price}

      <button className='details-btn'>
            {/* <Link to={`/cars/${carName}`}>Details</Link> */}
            Details
          </button>
      
    </div>
  );
};

export default SingleCarItem;