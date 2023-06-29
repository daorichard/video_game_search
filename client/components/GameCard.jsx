import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailActions';

function GameCard({ name, released, image, id, shortScreenshots }) {
  // LOAD DETAILS
  const dispatch = useDispatch();
  // GETTING THE ID -- USE THIS FOR GENRES LATER
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, shortScreenshots));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  /* background-color: blue; */
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default GameCard;
