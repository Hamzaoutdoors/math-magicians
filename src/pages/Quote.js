import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter } from 'react-icons/fa';
import quoteImage from '../media/hamzaQuote.png';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const colors = ['#9e4200', '#421c00', '#628500', '#009025', '#391306', '#aa1945', '#3B0918', '#b8390e'];
  const textRef = useRef();
  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNumber]);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * 8)];
  }, [quotes]);

  return (
    <div className="quote">
      <h2>Get motivated with new quote</h2>
      <p className="quote-body" ref={textRef}>
        {quotes.text}
      </p>
      <strong>
        {' '}
        ~
        {quotes.author || 'anonyme'}
      </strong>
      <div className="btnContainer">
        <button
          type="button"
          className="btn btn-warning"
          onClick={getQuotes}
        >
          Get Quote
        </button>
        <a
          href={`http://twitter.com/intent/tweet?text=${quotes.text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning"
        >
          tweet
          <FaTwitter style={{ color: '#1DA1F2', fontSize: '16px', marginLeft: '5px' }} />
        </a>
      </div>
      <img
        src={quoteImage}
        alt="math"
        className="math"
      />
    </div>
  );
};

export default Quote;
