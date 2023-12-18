import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleCarItem from './SingleCarItem';
import '../styles/car-list.css';

function CarList() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
      axios.get('https://test-api-ui2d.onrender.com/cars')
        .then(response => setCars(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);


    
    return (
        <div>
            <h2>Our Cars</h2>

            <div className="car-list-container">

            {cars.map((car) => (
        <div key={car.id}>
          <SingleCarItem car={car} />
        </div>
        
      ))}
      </div>
        </div>
    )
}

export default CarList