import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function GenreDetails() {
  // useState: store the data in genre array
  const [genre, setGenre] = useState([]);

  // useEffect: run this when component gets mounted - based on empty array
  useEffect(() => {
    getGenre();
  }, []);

  const getGenre = async () => {
    const check = localStorage.getItem('genre');
    // checking local storage instead of fetching all the time
    if (check) {
      setGenre(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
      );
      const data = await response.json();
      localStorage.setItem('genre', JSON.stringify(data.results));
      setGenre(data.results);
      console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Genres</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
          }}
        >
          {genre.map((game) => {
            return (
              <SplideSlide key={game.id}>
                <Card>
                  <Gradient />
                  <p>{game.name}</p>
                  <img src={game.image_background} alt={game.name} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem 2rem;
  text-align: center;
  height: 500px;
  h3 {
    margin-bottom: 20px;
  }
`;
const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  min-height: 25rem;
  margin-bottom: 2rem;
  position: relative;

  /* margin-right: 1rem; */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    margin-top: 1rem;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default GenreDetails;
