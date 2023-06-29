import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
function GameDetail() {
  // get data from useSelector hook
  const { screens, game } = useSelector((state) => state.details);
  //   console.log('game', game);
  //   console.log(screens);

  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms &&
                game.platforms?.map((data) => <h3>{data.platform.name}</h3>)}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt='image' />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className='gallery'>
          {screens?.map((screenshot) => (
            <img
              src={screenshot.image}
              key={screenshot.id}
              alt='game screenshot'
            />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  width: 85%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* dont know if i need object fit */
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
