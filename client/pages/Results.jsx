import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
// still has huge issue of redirection to home page
function Results() {
  // extract the data -- it is an array of objects
  const gameResults = useSelector((state) => state.games.searched);
  console.log('from results component accessing state', gameResults);
  return (
    <div>
      <GameList>
        <Games>
          {gameResults.map((game) => (
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
    </div>
  );
}

const GameList = styled(motion.div)`
  margin: 2rem;
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

export default Results;
