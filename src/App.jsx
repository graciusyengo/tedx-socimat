import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Sponsors from './pages/Sponsors/Sponsors';
import Partners from './pages/Partners/Partners';
import BecomeSpeaker from './pages/BecomeSpeaker/BecomeSpeaker';
import Loader from '../src/components/Loader/Loader';
import './App.css';

function App() {
  return (
    <Router>
      <Loader />
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="partners" element={<Partners />} />
            <Route path="become-speaker" element={<BecomeSpeaker />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
