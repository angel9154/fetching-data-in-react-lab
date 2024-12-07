
const BASE_URL = 'https://swapi.dev/api/';

export const index = async () => {
    try {
      const response = await fetch(`${BASE_URL}starships/`);
      const data = await response.json();  // Wait for the response to be parsed
      return data.results;  // Return the results
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };
  
  // search function using async/await
  export const search = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}starships/?search=${query}`);
      const data = await response.json();  // Wait for the response to be parsed
      return data.results;  // Return the search results
    } catch (error) {
      console.error('Error searching starships:', error);
    }
  };
