import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  if (!starships || starships.length === 0) {
    return <p>No starships found.</p>;
  }

  return (
    <section>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;


  /* <li key={index}>{starship.starship_class}</li> 
          <li key={index}>{starship.manufacturer}</li> 
          <li key={index}>{starship.model}</li>  */