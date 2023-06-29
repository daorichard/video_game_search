import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GenreDetails from '../components/GenreDetails';
import { useDispatch } from 'react-redux';
import { getGameData } from '../actions/actions';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameData());
  });
  return (
    <div>
      <Navbar />
      <GenreDetails />
      Home
    </div>
  );
}

export default Home;
