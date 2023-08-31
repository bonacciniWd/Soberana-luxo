import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Ensaio from './components/services/Ensaio';
import Debutante from './components/services/Debutante';
import Convidada from './components/services/Convidada';
import Formanda from './components/services/Formanda';
import Noiva from './components/services/Noiva';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/ensaio" element={<Ensaio />} />
          <Route path="/15anos" element={<Debutante />} />
          <Route path="/convidada" element={<Convidada />} />
          <Route path="/formanda" element={<Formanda />} />
          <Route path="/noiva" element={<Noiva />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
