import React from 'react';
import logo from '../media/logo.png';

const Footer = () => {
  const footerLogo = {
    width: '3rem',
    margin: '0 4rem',
  };

  const link = {
    fontSize: '1rem',
    color: '#000',
    marginLeft: '1rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <div className="footer text-center">
      <small>
        Copyright &copy; Math Magician
        <img
          src={logo}
          alt="Logo"
          className="footer-logo"
          style={footerLogo}
        />
        Created by
        <a href="https://github.com/Hamzaoutdoors" style={link} target="_blank" rel="noreferrer">Hamza</a>
      </small>
    </div>
  );
};

export default Footer;
