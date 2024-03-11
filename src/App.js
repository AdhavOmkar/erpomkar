import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import SearchBar2 from './components/SearchBar2';
import Card from './components/card';
import Aboutus from './components/Aboutus';
import HeaderMin from './components/HeaderMin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modules, setModules] = useState([]);
  const [filteredModules, setFilteredModules] = useState([]);

  useEffect(() => {
    // Fetch data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
        setFilteredModules(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      // If search term is empty, display all modules
      setFilteredModules(modules);
    } else {
      // Filter modules based on search term
      const filtered = modules.filter(
        (module) =>
          module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          module.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredModules(filtered);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {windowWidth >= 1200 ? (
            <Route path="/" element={<Homego />} />
          ) : (
            <Route path="/" element={ <MINI onSearch={handleSearch} filteredModules={filteredModules} />} />
          )}
          <Route path="/about" element={<HeaderAndAbout />} />
        </Routes>
      </div>
    </Router>
  );
}

function HeaderAndAbout() {
  return (
    <div>
      <HeaderMin />
      <Aboutus />
    </div>
  );
}

function Homego() {
  return (
    <div>
      <Home />
    </div>
  );
}


function MINI({ onSearch, filteredModules }) {
  return (
    <>
      <HeaderMin />
      <h1>ERP Modules</h1>
      <SearchBar2 onSearch={onSearch} />
      <div className="card-container">
        {filteredModules.map((module, index) => (
          <Card key={index} {...module} />
        ))}
      </div>
    </>
  );
}
export default App;
