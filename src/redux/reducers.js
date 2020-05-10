  
import {combineReducers} from 'redux';



import counterReducer from './counter/counterReducer';
import placeReducer from './searchPlace/placeReducer';
import theDataReducer from './getMovies/movieReducer';

const allReducers= combineReducers({
  count: counterReducer,
  places: placeReducer,
  theData: theDataReducer,
});
export default allReducers;