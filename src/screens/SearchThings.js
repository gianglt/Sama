// App.js

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';


import ListItem from './components/ListItem';
import { addPlace } from '../redux/searchPlace/place';

export class SearchThings extends Component {


  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
    this.setState({
      placeName: ''
    });
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  placesOutput = () => {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
          />
        )}
      />
    )
  }



  render() {
    return (
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Add Places"
            style = { styles.placeInput }
            value = { this.state.placeName }
            onChangeText = { this.placeNameChangeHandler }
          ></TextInput>
          <Button title = 'Add' 
            style = { styles.placeButton }
            onPress = { this.placeSubmitHandler }
          />
          </View>
          <View style = { styles.listContainer }>
            { this.placesOutput() }
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    placeInput: {
      marginLeft: 10,
      width: '70%',
      border:1,

    },
    placeButton: {
      width: '30%'
    },
    listContainer: {
      width: '100%'
    }
  });
  
  const mapStateToProps = state => {
    return {
      places: state.places.places
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      add: (name) => {
        dispatch(addPlace(name))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchThings)