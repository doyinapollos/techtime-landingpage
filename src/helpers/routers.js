/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WorldMap from '../pages/WorldMap';
import Home from '../pages/Home';
import { NonAuthRoutes } from './url';

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{' '}
        <Route path={NonAuthRoutes.worldMap} element={<WorldMap />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default routers;
