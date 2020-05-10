import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { StyleSheet,Text} from 'react-native';

import DefaultApp from './src/DefaultApp';


export default class App extends React.Component {
    render() {
      return (
        <Provider store = {store}>
            <DefaultApp/>
        </Provider>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  }
  );