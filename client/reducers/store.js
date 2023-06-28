import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
});

// applyMiddleware checks on every action, and so thunk is going to be ran
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
