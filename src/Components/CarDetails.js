import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/car-details.css'

function CarDetails() {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);

  useEffect(() => {

    axios.get(`https://test-api-ui2d.onrender.com/cars/${carId}`)
      .then(response => {

        const data = response.data;
        setCarDetails(data);
      })
  }, [carId]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    axios.post(
      `https://test-api-ui2d.onrender.com/cars/${carId}/reviews`,
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
    <div className="car-details-container">
      <h1>{carDetails.carName} Details</h1>
      <img className="car-image" src={carDetails.imgUrl} alt={`${carDetails.carName}`} />
      <p className="car-price">Price: ${carDetails.price}</p>
      <p className="car-automatic">Car Transmission: {carDetails.transmission}</p>
      <h3 className="reviews-heading">Reviews:</h3>
      <ul className="reviews-list">
        {carDetails.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>


      <p>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Write a Review:
          <textarea
            className="review-textarea"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      </p>

      <div className="submitted-reviews-container">
        <h3 >Submitted Reviews:</h3>
        <ul  className="submitted-reviews-list">
          {submittedReviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CarDetails;
