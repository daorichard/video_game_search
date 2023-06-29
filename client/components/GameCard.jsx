import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailActions';
import { Link } from 'react-router-dom';

function GameCard({ name, released, image, id, shortScreenshots }) {
  const dispatch = useDispatch();
  // GETTING THE ID -- USE THIS FOR GENRES LATER
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id, shortScreenshots));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>Release Date: {released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  /* change below to set cards colors */
  /* background-color: blue; */
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  p {
    color: #6a6868;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default GameCard;
