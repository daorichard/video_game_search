import axios from 'axios';
import { gameDetailsUrl } from '../components/api';
export const loadDetail = (id, shortScreenshots) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screens: shortScreenshots,
    },
  });
};
