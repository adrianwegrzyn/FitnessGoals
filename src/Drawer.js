import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class App extends Component<> {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0388D2',
    },
    toolbar: {
        flex:1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nameToolBar:{

        fontSize: 20,

    },
    content: {
        flex: 11,
    }

});
