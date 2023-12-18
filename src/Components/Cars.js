// Cars.js
import React from "react";
import carData from "./assets/data/carData";

const Cars = () => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {carData.map((car) => (
          <li key={car.id}>
            <img src={car.imgUrl} alt={`${car.brand} ${car.carName}`} />
            <p>{`${car.brand} ${car.carName}`}</p>
            {/* Add other car details if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
