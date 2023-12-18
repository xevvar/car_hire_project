import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CarDetails() {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:3001/cars/${carId}`)
      .then(response => {

        const data = response.data;
        setCarDetails(data);
      })
  }, [carId]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
  
    axios.post(
      `http://localhost:3001/cars/${carId}/reviews`,
      { review: reviewText },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(response => {
        const updatedCarDetails = response.data;
        setSubmittedReviews(updatedCarDetails.reviews);
        setReviewText('');
        setCarDetails(updatedCarDetails);
      })
      .catch(error => {
        console.error('Error submitting review:', error.message);
      });
  };
  
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

      <form onSubmit={handleReviewSubmit}>
        <label>
          Write a Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>

      {/* Display submitted reviews */}
      <h3>Submitted Reviews:</h3>
      <ul>
        {submittedReviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

    </div>
  );
};

export default CarDetails;
