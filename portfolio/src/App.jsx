import React, { useRef, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Routes } from 'react-router-dom';
  import {gsap, Power3} from 'gsap';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExtraPage from './pages/ExtraPage'

// Component

import Header from './components/Header/Header';

const route = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/AboutPage', name: 'About', Component: AboutPage},
  {path: '/ExtraPage', name: 'Extra', Component: ExtraPage},
]

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      {route.map(({path, name, Component, element}) => (
          <Route key={name} path={path} exact element={ <Component />}>
          </Route>
      ))}
    </Routes>
    </Router>
  )
}

export default App