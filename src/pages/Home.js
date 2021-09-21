/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import homeBanner from '../media/home_banner.png';

const Home = () => (
  <div className="home-page">
    <h1>Welcome to our page</h1>
    <p>
      <span>S</span>
      tudents who understand why the skills they're learning are
      important are more engaged and better able to take ownership of their education.

      And while you do your best to explain why exploring, practicing,
      and learning math skills is a critical part of being successful in
      the 21st-century, students still need to hear this message from
      a variety of influential voices before it sticks.
    </p>

    <p>
      <span>T</span>
      his week, I have compiled a list of 17 of my favorite and most
      inspiring math-related quotes from a variety of thought leaders
      and unique individuals including Albert Einstein,
      Neil DeGrasse Tyson, George Cantor, and Snoop Dogg.

      So, if you have some empty space on your classroom walls
      (or if that Garfield poster from the 90s is ready to be retired),
      try posting some of these quote graphics as a daily reminder of
      why math is an important, exciting, inspiring—and yes, groovy—field of study.
    </p>
    <img
      src={homeBanner}
      alt="Logo"
      className="home-banner"
    />
  </div>
);

export default Home;
