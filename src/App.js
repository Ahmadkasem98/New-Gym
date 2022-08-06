import React from 'react';
import './App.css';
import Hero from './Component/Hero';
import Programes from './Component/programes/Programes'
import Reasons from './Component/Reasons/Reasons';
import Plans from './Component/plans/plans';
import Testimonials from './Component/Testimonials/Testimonials';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programes />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
