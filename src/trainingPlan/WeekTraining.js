import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import _ from 'lodash';
import {Text} from "react-native-elements";


export default class WeekTraining extends Component<> {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataWeekPlan: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        fetch("https://applicationtrainer.herokuapp.com/exercises/users//take/1:2018-12-21:2018-12-22")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataWeekPlan: responseJson,

                });
                console.log(this.state.dataWeekPlan)
            });
    }

    render() {

        let rowsBoxPlan = [];

        for (let i = 0; i < this.state.dataWeekPlan.length; i++) {
            let row = [];
            for (let j = 0; j < this.state.dataWeekPlan[i].exercise.length; j++) {
                row.push(
                    <View key={j}>

                        <Text style={styles.contentText}>
                            - {this.state.dataWeekPlan[i].exercise[j].repetitions} {this.state.dataWeekPlan[i].exercise[j].nameExercise} x {this.state.dataWeekPlan[i].exercise[j].series}
                        </Text>

                    </View>
                )
            }
            rowsBoxPlan.push(
                <View key={i}>
                    <View style={styles.titleDate}>
                        <Text style={styles.titleDateText}>
                            {this.state.dataWeekPlan[i].dateDay}
                        </Text>
                    </View>
                    <View style={styles.content}>
                        {row}
                    </View>
                </View>)
        }

        return (
            <ScrollView style={styles.container}>
                {rowsBoxPlan}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleDate: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    titleDateText: {
        fontSize: 25,
        fontFamily: 'OpenSans-Regular',
        color: '#57BB16',
        marginBottom: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        padding: 7
    },
    content: {
        marginHorizontal: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingBottom: 30
    },
    contentText: {
        margin: 10,
        fontSize: 18
    }

});
