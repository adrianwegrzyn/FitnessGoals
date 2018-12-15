import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class App extends Component<> {
    componentDidMount() {
        SplashScreen.hide();
    }
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
