import React from 'react';
import quoteImage from '../media/hamzaQuote.png';

const Quote = () => (
  <div className="quote">
    <h2>Motivational math quotes</h2>
    <p className="quote-body">
      If people do not believe that mathematics is simple,
      it is only because they do not realize how complicated life is.
    </p>
    <strong> ~ John von Neumann, American-hungarian mathematician</strong>
    <img
      src={quoteImage}
      alt="math"
      className="math"
    />
  </div>
);

export default Quote;
