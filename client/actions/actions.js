import { popularGamesUrl } from '../components/api';

//ACTION CREATOR
export const getGameData = () => async (dispatch) => {
  const popData = await fetch(popularGamesUrl());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popData.data.results,
    },
  });
};
