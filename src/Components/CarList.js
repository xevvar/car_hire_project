import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleCarItem from './SingleCarItem';

function CarList() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars')
          .then(response => setCars(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>
            <h2>Our Cars</h2>
            {cars.map((car) => (
        <div key={car.id}>
          <SingleCarItem car={car} />
        </div>
      ))}
        </div>
    )
}

export default CarList