import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from "react-native-elements";


export default class App extends Component<> {

    nameDay = (day) => {
        let arr = day.split('-')
        var days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        var d = new Date(arr[2], arr[1]-1, arr[0]);
        return  days[d.getDay()];
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.dateText}>12-12-2018</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>21/10/2014</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>21/10/2014</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>21/10/2014</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>21/10/2014</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
                <Text style={styles.dateText}>21/10/2014</Text>
                <TouchableOpacity style={styles.dayButton}>
                    <Text style={styles.buttonText}>{this.nameDay('12-12-2018')}</Text>
                </TouchableOpacity>
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
