import React, { useState } from 'react';
import { useEffect } from 'react';
function GenreDetails() {
  // useState: store the data in genre array
  const [genre, setGenre] = useState([]);

  // useEffect: run this when component gets mounted based on empty array
  useEffect(() => {
    getGenre();
  }, []);

  const getGenre = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setGenre(data.results);
  };

  return (
    <div>
      {genre.map((genre) => {
        return (
          <div key={genre.id} className='genre-container'>
            <p>{genre.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GenreDetails;
