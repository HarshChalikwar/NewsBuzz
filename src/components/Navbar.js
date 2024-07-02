import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import countryCodes from './countryCodes';
import './Navbar.css'; // Ensure this CSS file is correctly imported

const Navbar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`);
      const matches = Object.keys(countryCodes).filter((key) =>
        key.toLowerCase().match(regex)
      );

      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (selectedCountry) => {
    setInputValue(selectedCountry);
    setSuggestions([]);
    const countryCode = countryCodes[selectedCountry]; 
    props.onCountryChange(countryCode); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search performed:", inputValue);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsBuzz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
            <form className="d-flex position-relative" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search country"
                aria-label="Search"
                value={inputValue}
                onChange={handleChange}
              />
              {/* Suggestions list */}
              {suggestions.length > 0 && (
                <ul className="autocomplete">
                  {suggestions.map((country) => (
                    <li key={country} onClick={() => handleSelect(country)}>
                      {country} - {countryCodes[country]}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
