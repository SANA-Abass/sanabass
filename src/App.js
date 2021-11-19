import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/competences" element={<Knowledges/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cv" element={<Cv/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;