import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Child extends Component {
    render() {
        return (
            <View>
                <Text style = {styles.text} >{this.props.count}</Text>
            </View>
        )
    }
}


export default Child;

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});