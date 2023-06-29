import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
function GameDetail() {
  // get data from useSelector hook
  const { screens, game } = useSelector((state) => state.details);
  console.log('game', game);
  console.log(screens);

  return (
    <div className='card-shadow'>
      <div className='detail'>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platforms?.map((data) => {
                <h3 key={data.platform.id}>{data.platform.name}</h3>;
              })}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} alt='image' />
        </div>
        <div className='gallery'>
          {screens?.map((screenshot) => (
            <img
              src={screenshot.image}
              key={screenshot.id}
              alt='game screenshot'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
