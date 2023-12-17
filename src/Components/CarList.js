import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            <ul>
                {cars.map((car) => (
            <li key={car.id}>
                <h4> {car.carName}</h4>
                <img src={car.imgUrl} alt={`${car.carName}`}/>

            </li>
        ))}
            </ul>


        </div>
    )
}

export default CarList