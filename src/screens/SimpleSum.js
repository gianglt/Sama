import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
//import { Button } from 'react-native';




import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../redux/counter/actions';

import Child from './components/Child';



class Main extends Component {

    handleIncrease = () => {
        this.props.increment();
    };

    handleDecrease = () => {
        this.props.decrement();
    };


    render() {
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Child count={this.props.count} />
                </View>
                <View style={styles.rowButtons}>
                    <Button
                        title="Tăng"
                        icon={{
                            name: "add-circle",
                            size: 15,
                            color: "white"
                        }}                        
                        buttonStyle={styles.btnStyle}
                        containerStyle={styles.btncStyle}
                        onPress={this.handleIncrease} />
                    <Button
                        icon={{
                            name: "remove-circle",
                            size: 15,
                            color: "white"
                        }}
                        title="Giảm"
                        buttonStyle={styles.btnStyle}
                        containerStyle={styles.btncStyle}
                        onPress={this.handleDecrease} />
                </View>

            </View>
        )
    }
}



function mapStateToProps(state) {
    return {
        count: state.count
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ increment: increment, decrement: decrement }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);


const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "red"
    },
    btnStyle: {
        flex:1,
        backgroundColor: "#008040",
    },
    btncStyle: {
        flex:1,
        height: 50,
        margin: 10,
    },
    rowButtons: {
        flexDirection: "row",
        height: 60,
    },
});