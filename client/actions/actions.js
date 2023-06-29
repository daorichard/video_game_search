import {
  popularGamesUrl,
  newGamesUrl,
  upcoming_gamesUrl,
} from '../components/api';

import axios from 'axios';
//ACTION CREATOR
export const getGameData = () => async (dispatch) => {
  const popData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcoming_gamesUrl());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
