import React from 'react';
import {Provider} from 'react-redux';


import DefaultApp from './src/DefaultApp';
import store from './src/redux/store';


export default class App extends React.Component {
    render() {
      return (
        <Provider store = {store}>
            <DefaultApp/>
        </Provider>
      );
    }
  }

