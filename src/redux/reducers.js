  
import {combineReducers} from 'redux';



import counterReducer from './counter/counterReducer';
import placeReducer from './searchPlace/placeReducer';

const allReducers= combineReducers({
  count: counterReducer,
  places: placeReducer
});
export default allReducers;