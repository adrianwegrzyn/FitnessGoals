import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';
import deviceStorage from './services/deviceStorage.js';
import {Button} from "./components/common";
import {Navigation} from "react-native-navigation";




export default class Drawer extends Component<> {

    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={deviceStorage.deleteJWT}>
                    Log Out
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
});
