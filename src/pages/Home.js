/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import LandingPage from './LandingPage';
import Mobile from './Mobile';

function Home() {
  return (
    <div>
      <>
        <div className="hidden md:block lg:block ">
          <LandingPage />
        </div>{' '}
        <div className="md:hidden lg:hidden ">
          <Mobile />
        </div>{' '}
      </>{' '}
    </div>
  );
}

export default Home;
