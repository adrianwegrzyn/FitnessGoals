import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';
import {Text} from "react-native-elements";
import {dietPlan} from "../../json/dietPlan";
import Icon from 'react-native-vector-icons/Ionicons';


export default class App extends Component<> {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleDate}>{dietPlan[this.state.id].date}</Text>
                <Icon name='ios-fitness' size={200} color='#000000'/>
                <Text style={styles.mealText}>Śniadanie </Text>
                <Text style={styles.mealName}>{dietPlan[this.state.id].breakfast}</Text>
                <Text style={styles.mealText}>Obiad </Text>
                <Text style={styles.mealName}>{dietPlan[this.state.id].lunch}</Text>
                <Text style={styles.mealText}>Kolacja</Text>
                <Text style={styles.mealName}>{dietPlan[this.state.id].dinner}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    mealText: {
        marginHorizontal: 20,
        marginVertical:5,
        fontSize: 35,
        fontFamily: 'Caveat-Regular',
    },
    titleDate: {
        fontSize: 35,
        fontFamily: 'OpenSans-Regular',
        color: '#57BB16',
        marginBottom: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        padding: 7
    },
    mealName: {
        marginHorizontal: 15,
        textAlign: 'center'
    }
});
