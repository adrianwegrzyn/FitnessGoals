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
        fetch("https://pwsz-quiz-api.herokuapp.com/api/tests")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataWeekPlan: responseJson,
                });

            });
    }

    render() {

        let rowsBoxPlan = [];

        for (let i = 0; i < this.state.dataWeekPlan.length; i++) {
            rowsBoxPlan.push(
                <View key={i}>
                    <View style={styles.titleDate}>
                        <Text style={styles.titleDateText}>
                            {this.state.dataWeekPlan[i].name}
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>
                            {_.map(this.state.dataWeekPlan[i].tags, x => (x + '\n'))}
                        </Text>
                    </View>
                </View>
            )
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
        marginBottom: 30
    },
    contentText: {
        margin: 10,
        fontSize: 18
    }

});
