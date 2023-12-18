import React from 'react'

function CarDetails() {
    const { carId } = useParams();

    // Fetch details of the specific car using carId
  
    return (
      <div>
        <h2>Car Details</h2>
        <p>Details for car with ID: {carId}</p>
        {/* Display other car details here */}
      </div>
    );
}

export default CarDetails