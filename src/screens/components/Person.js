
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {ListItem} from 'react-native-elements';

const Person = ({person}) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
        <View style={styles.PhotoInfo}>
              <Image style = {styles.tinyPhoto}
          source={{uri:person.picture.thumbnail}}/
          ></View>
          <View style={styles.NameInfo}>
              <Text>{ person.name.last + ' ' + person.name.first }</Text>
              </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    flexDirection:"row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  },
  PhotoInfo:{
      marginLeft:20,
      width:60,
  },
  NameInfo: {
      flex:4,
  },
  tinyPhoto: {
      width:40,
      height:40,

  }
});

export default Person;