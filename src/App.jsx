// src/App.jsx
import React, { useState, useEffect} from 'react'
import StarshipSearch from './components/StarshipSearch';
import { index, search } from './services/starshipService';  // Import the functions
import StarshipList from './components/StarshipList';  // Import the StarshipList component
import './App.css';
const App = () => {
  const [starships, setStarships] = useState([]); // State to store the list of starships
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [filteredStarships, setFilteredStarships] = useState([]); // State to store filtered starships
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await index();  // Fetch starships from the API
        setStarships(data);  // Set the fetched starships into state
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  // Filter the starships based on the search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredStarships(starships);  // If the search query is empty, show all starships
    } else {
      const filtered = starships.filter((starship) =>
        starship.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStarships(filtered);  // Update the filtered list based on search
    }
  }, [searchQuery, starships]);  // This effect runs when `searchQuery` or `starships` changes

  return (
    <div>
      <h1>Starship List</h1>
      
      {/* Pass the searchQuery and setSearchQuery as props */}
      <StarshipSearch 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      {/* Pass the filtered starships to StarshipList */}
      <StarshipList starships={filteredStarships} />
    </div>
  );
};

export default App

