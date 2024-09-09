// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routine from './components/Routine';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routine />
      <Footer />
    </div>
  );
};

export default App;
