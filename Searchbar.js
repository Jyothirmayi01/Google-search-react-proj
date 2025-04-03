
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';
 
function Searchbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
 
  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?q=${query}`);
    }
  };
 
  return (
    <div className="search-container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" 
      alt="Google Logo"
      className="google-logo"
    />
    <input
      type="text"
      className="search-box"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search Google or type a URL"
    />
    <div className="search-buttons">
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  </div>
);
}
 
export default Searchbar;