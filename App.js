import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './Searchbar';
import SearchResults from './SearchResults';
import './App.css';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
 
export default App;