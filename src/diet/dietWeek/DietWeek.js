import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from "react-native-elements";
import {dietPlan} from '../../json/dietPlan'
import {Navigation} from "react-native-navigation";


export default class App extends Component<> {

    nameDay = (day) => {
        let arr = day.split('-');
        let days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        let d = new Date(arr[2], arr[1]-1, arr[0]);
        return  days[d.getDay()];
    };

    newWindow = (window, id) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
                passProps: {
                    id: id
                },
            }
        });
    };

    render() {
        let row = [];
        for(let i=0; i<dietPlan.length; i++){
            row.push(
                <View key={i}>
                    <Text style={styles.dateText}>{dietPlan[i].date}</Text>
                    <TouchableOpacity style={styles.dayButton} onPress={() => this.newWindow('SelectedDay', i)}>
                        <Text style={styles.buttonText}>{this.nameDay(dietPlan[i].date)}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                {row}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dayButton: {
        marginHorizontal: 15,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 40
    },
    buttonText: {
        fontSize: 30,
    },
    dateText: {
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 25,
        color: '#7E7E7E'
    }
});
