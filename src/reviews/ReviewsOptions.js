import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from "react-native-navigation";


export default class ReviewsOptions extends Component<> {

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

                    <TouchableOpacity onPress={() => this.newWindow('TrainerReviews')} style={styles.iconCoachBox}>
                        <Icon name='account-outline' size={150} color='#000000'/>
                        <Text style={styles.textIcon}>Trenerzy</Text>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity onPress={() => this.newWindow('DietReviews')} style={styles.iconDietBox}>
                        <Icon name='silverware-fork-knife' size={150} color='#000000'/>
                        <Text style={styles.textIcon}>Dieta</Text>
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
