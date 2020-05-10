import React from "react";
import { connect } from "react-redux";
import { fetchTheData } from "../redux/getMovies/movieActions";

import { ScrollView } from "react-native-gesture-handler";
import { View, Text, ListItem, FlatList, TouchableOpacity } from 'react-native';

class ListData extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTheData());
    }

    renderItem = ({ item }) => {
        console.log({ item });
        return (
            <TouchableOpacity>
                <View >
                    <Text>
                        {item.employee_name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { error, loading, items } = this.props;
        //console.log({items});

        if (error) {
            return (
                <View><Text>{error.message}</Text></View>
            );

        }

        if (loading) {
            return (
                <View><Text>Loading </Text></View>
            );
        }


        return (

            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

const mapStateToProps = state => ({
    items: state.theData.items,
    loading: state.theData.loading,
    error: state.theData.error
});

export default connect(mapStateToProps)(ListData);