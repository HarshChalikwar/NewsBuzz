import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(''); 

  const handleSetProgress = (value) => {
    setProgress(value);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Router>
        <Navbar onCountryChange={handleCountryChange} />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="general" setProgress={handleSetProgress} />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="business" setProgress={handleSetProgress} />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="entertainment" setProgress={handleSetProgress} />} />
          <Route path="/general" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="general" setProgress={handleSetProgress} />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="health" setProgress={handleSetProgress} />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="science" setProgress={handleSetProgress} />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="sports" setProgress={handleSetProgress} />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country={selectedCountry} category="technology" setProgress={handleSetProgress} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
