import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarDetails () {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    
    const dummyDetails = {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      image: 'toyota_camry.jpg',
      price: 9,
      transmission: 'automatic',
      reviews: ['Great car!', 'Smooth ride.'],
    };
    
    setCarDetails(dummyDetails);
  }, [carId]);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{carDetails.carName} Details</h1>
      <img src={carDetails.imgUrl} alt={`${carDetails.carName}`} />
      <p>Price: ${carDetails.price}</p>
      <p>Car Transmission: {carDetails.transmission}</p>
      <h3>Reviews:</h3>
      <ul>
        {carDetails.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarDetails;
