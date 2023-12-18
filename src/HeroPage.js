// HeroPage.js
import React from 'react';

import BookingForm from './Components/BookingForm/BoorkingForm'; 

function HeroPage() {
  return (
    <div className="hero-page">
      <div className="hero-image">
        {/* Place your hero image or banner here */}
        <h1>Find your best car here</h1>
      </div>
      <div className="booking-section">
        <h2>Book Your Dream Car</h2>
        
        <BookingForm />
      </div>
    </div>
  );
}

export default HeroPage;
