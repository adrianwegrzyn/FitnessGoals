import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from "react-native-navigation";


export default class TodayTraining extends Component<> {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataTodayPlan: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        fetch("https://applicationtrainer.herokuapp.com/exercises/users//take/1:2018-12-21:2018-12-22")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataTodayPlan: responseJson,
                });

            });
    }

    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#3B5998"/>
                </View>
            )
        }

        let rowsExercise = [];

        for (let i = 0; i < this.state.dataTodayPlan[0].exercise.length; i++) {
            rowsExercise.push(
                <Text key={i} style={styles.exerciseListText}>
                    - {this.state.dataTodayPlan[0].exercise[i].repetitions} {this.state.dataTodayPlan[0].exercise[i].nameExercise} x {this.state.dataTodayPlan[0].exercise[i].series}
                </Text>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.iconBox}>
                    <Icon name='ios-fitness' size={200} color='#000000'/>
                </View>
                <View style={styles.planBox}>
                    <Text style={styles.titleText}>
                        Zestaw ćwiczeń na dziś:
                    </Text>
                    <ScrollView>
                        {rowsExercise}
                    </ScrollView>
                </View>
                <View style={styles.buttonMargin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                        locations={[0, 0.5, 0.9]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonWeekPlan}>
                        <TouchableOpacity onPress={() => this.newWindow('WeekTraining')}>
                            <Text style={styles.buttonTextWeekPlan}>
                                Zobacz plan na cały tydzień
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    planBox: {
        flex: 2,
        margin: 20,
    },
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        fontFamily: 'Caveat-Bold',
        color: '#000000',
        marginBottom: 15
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    exerciseListText: {
        fontSize: 18,
        color: '#7E7E7E'
    },
    buttonWeekPlan: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 30,
        flex: 1,
        justifyContent: 'center',


    },
    buttonTextWeekPlan: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'OpenSans-Regular',
    },
    buttonMargin: {
        marginBottom: 10,
        flex: 0.3,
    }
});
