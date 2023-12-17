// CarsList.js
import React from 'react';
import carData from './assets/data/carData'; // Adjust the import path accordingly
import "/home/btsalwa/class/car_hire_project/src/Components/CarList.css"

function CarsList() {
  return (
    <div className="cars-list">
      {carData.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.imgUrl} alt={car.carName} />
          <h3>{car.carName}</h3>
          <p>{car.description}</p>
          {/* Add other details you want to display */}
        </div>
      ))}
    </div>
  );
}

export default CarsList;
