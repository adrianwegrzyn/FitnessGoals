import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Navigation} from "react-native-navigation";


export default class DietOptions extends Component<> {

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

                <TouchableOpacity onPress={() => this.newWindow('DietWeek')}  style={styles.iconCoachBox}>
                    <Icon name='free-breakfast' size={150} color='#000000'/>
                    <Text style={styles.textIcon}>Dieta</Text>
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity onPress={() => this.newWindow('ShoppingList')} style={styles.iconDietBox}>
                    <Icon name='local-mall' size={150} color='#000000'/>
                    <Text style={styles.textIcon}>Lista zakupów</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconCoachBox: {
        flex:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconDietBox: {
        flex:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        flex:1,
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        marginLeft: 20,
        marginRight: 20,
    },
    textIcon: {
        fontWeight: 'bold',
        fontSize: 20
    }

});
