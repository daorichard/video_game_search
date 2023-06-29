import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GenreDetails from '../components/GenreDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getGameData } from '../actions/actions';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

function Home() {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameData());
  }, []);

  // get that data from state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <div>
      <Navbar />
      <GameList>
        {pathId && <GameDetail />}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              shortScreenshots={game.short_screenshots}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              shortScreenshots={game.short_screenshots}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              shortScreenshots={game.short_screenshots}
            />
          ))}
        </Games>
      </GameList>
      {/* <GenreDetails /> */}
    </div>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  /*  repeats as many times -- 500px is minimum space, otherwise take up as much space you have (1fr) */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
