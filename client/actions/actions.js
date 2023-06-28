import { popularGamesUrl } from '../components/api';
import axios from 'axios';
//ACTION CREATOR
export const getGameData = () => async (dispatch) => {
  const popData = await axios.get(popularGamesUrl());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popData.data.results,
    },
  });
};
