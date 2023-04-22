import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden  '>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      <Toaster/>
    </div>
  );
};

export default App;
