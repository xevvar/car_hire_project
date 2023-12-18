// CarDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = ({ carData }) => {
  const { carId } = useParams();
  const car = carData.find((car) => car.id === parseInt(carId));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h2>{`${car.brand} ${car.carName}`}</h2>
      {/* Display other car details here */}
    </div>
  );
};

export default CarDetails;
