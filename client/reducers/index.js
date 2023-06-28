import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

// const initState = {
//   name: '',
//   isLogged: false,
// };

// const userReducer = (state = initState, action) => {
//   switch (action.type) {
//     default:
//       return { ...state };
//   }
// };

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
