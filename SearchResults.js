import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';
  const [results, setResults] = useState([]);

  // Sample Data for Searching
  const data = [
    { "title": "Inception", "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.", "link": "https://www.example.com/inception" },
    { "title": "The Matrix", "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "link": "https://www.example.com/the-matrix" },
    { "title": "Interstellar", "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", "link": "https://www.example.com/interstellar" },
    { "title": "The Dark Knight", "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", "link": "https://www.example.com/the-dark-knight" },
    // more items...
  ];

  useEffect(() => {
    if (query) {
      let filteredResults = [];

      for (let i = 0; i < data.length; i++) {
        // Check if title or description matches the query
        let titleMatch = data[i].title.toLowerCase().includes(query);
        let descriptionMatch = data[i].description.toLowerCase().includes(query);

        if (titleMatch || descriptionMatch) {
          filteredResults.push(data[i]);
        }
      }

      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="search-results">
      <h2>Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result">
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
