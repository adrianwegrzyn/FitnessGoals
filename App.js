import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from 'react-native-navigation';

export default class App extends Component<> {

    constructor() {
        super();
        this.state = { 
            buttonsArray: [[['TodayTraining', 'run', 'Plan treningowy'], ['DietOptions', 'bowl', 'Dieta'], ['', 'newspaper', 'Artykuły sportowe']],
                [['', 'chart-line', 'Historia postępów'], ['', 'basket', 'Zakupy'], ['', 'lead-pencil', 'Pomiary']],
                [['Chat', 'wechat', 'Czat'], ['', 'calculator', 'Kalkulator BMI'], ['', 'silverware-variant', 'Zapotrzebowanie kaloryczne']],
                [['', 'map-marker-minus', 'Mapa biegów'], ['ReviewsOptions', 'content-copy', 'Opinie'], ['Informations', 'information-variant', 'Informacje']]]
        }
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };

    render() {

        let rowsButtons = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity key={this.state.buttonsArray[i][j]}
                                      onPress={() => this.newWindow(this.state.buttonsArray[i][j][0])}
                                      style={styles.itemTouchableOpacity}>
                        <Icon name={this.state.buttonsArray[i][j][1]} size={50} color='#000000'/>
                        <Text style={styles.textTouchableOpacity}>{this.state.buttonsArray[i][j][2]}</Text>
                    </TouchableOpacity>
                )
            }
            rowsButtons.push(<View key={i} style={styles.rowMenu}>{row}</View>)
        }
        return (
            <View style={styles.container}>
                {rowsButtons}
                <View style={styles.info}>
                    <Text style={styles.infoText}>
                        Zacznij już dziś !
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    nameToolBar: {
        fontSize: 20,
    },
    content: {
        flex: 11,
    },
    rowMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemTouchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        margin: 9,
        padding: 3
    },
    textTouchableOpacity: {
        textAlign: 'center',
        color: '#5b5b5b',
        fontWeight: 'bold',
        fontSize: 11
    },
    info: {
        flex: 0.4,
        backgroundColor: '#000000',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 30,
        fontFamily: 'Caveat-Regular',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    linearGradient: {
        flex: 1,
    },
});
