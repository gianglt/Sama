import {createStore} from 'redux';

import allReducers from './reducers';


//const store = createStore(allReducers,{"count":0});
const store = createStore(allReducers);

export default store;