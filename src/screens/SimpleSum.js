import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 
import { increment, decrement } from '../redux/counter/actions';

import {Button} from 'react-native-elements';

import Child from '../components/Child';



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
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child count={this.props.count}/>
                </View>
                <View style = {styles.rowButtons}>
                    <Button style={styles.btnStyle}
                        title="Tăng"
                       onPress={this.handleIncrease}/>
                    <Button style={styles.btnStyle}
                        title="Giảm"
                        onPress={this.handleDecrease}/>
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
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        backgroundColor: "#000099",
        margin:10,
    },
    rowButtons: {
        flex: 1,
        flexDirection:"row",
        padding:10,
        alignItems:"center",
        alignContent: "center",
    },
});