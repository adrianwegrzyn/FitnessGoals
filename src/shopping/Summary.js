import React, {Component} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from "react-native-navigation";
import LinearGradient from 'react-native-linear-gradient';


export default class Summary extends Component<> {

    constructor() {
        super();
        this.state = ({
            token: 'tak'
        });
    }


    sendResult = () => {
        Alert.alert("Zapłacono","Twoje zamówienie zostało przyjęte do realizaji. Koszt zakupów wyniósł " + this.props.priceProps);
        this.newWindow('App');
        fetch('https://fitnestest.herokuapp.com/order/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({
                orderId: this.props.orderIdProps,
                nameTrainingPlan: this.props.nameTrainingPlanProps,
                period: this.props.periodProps,
                difficultyLevel: this.props.difficultyLevelProps,
                message: this.props.messageProps,
                diet: this.props.dietProps,
                dateOrder: this.props.dateOrderProps
            })
        });
    };


    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };


    render() {
        return (
            <ScrollView style={styles.container}>
                {/*<Text>{this.state.token}</Text>*/}
                <Text style={styles.titleBig}> PODSUMOWANIE</Text>
                {
                    this.props.numberShopProps !== 1 ? <View/> :
                        <View>

                            <Text style={styles.titleSummary}> Dieta </Text>
                            <View style={styles.diet}>
                                <Image style={{width: 100, height: 100}}
                                       source={{uri: 'https://i.postimg.cc/FKjFL6gz/diet.png'}}
                                />
                            </View>
                        </View>
                }
                {
                    this.props.numberShopProps !== 2 ? <View/> :
                        <View>
                            <Text style={styles.titleSummary}> Plan Treningowy </Text>
                            <View style={styles.diet}>
                                <Image style={{width: 100, height: 100}}
                                       source={{uri: 'https://i.postimg.cc/SQn51M37/gym.png'}}
                                />
                            </View>
                        </View>
                }
                {
                    this.props.numberShopProps !== 3 ? <View/> :
                        <View>
                            <Text style={styles.titleSummary}>Dieta + Plan Treningowy </Text>
                            <View style={styles.row}>
                                <View style={styles.diet}>
                                    <Image style={{width: 100, height: 100}}
                                           source={{uri: 'https://i.postimg.cc/FKjFL6gz/diet.png'}}
                                    />
                                </View>
                                <View style={styles.diet}>
                                    <Image style={{width: 70, height: 70}}
                                           source={{uri: 'https://i.postimg.cc/MTpkp39h/plus.png'}}
                                    />
                                </View>
                                <View style={styles.diet}>
                                    <Image style={{width: 100, height: 100}}
                                           source={{uri: 'https://i.postimg.cc/SQn51M37/gym.png'}}
                                    />
                                </View>
                            </View>
                        </View>
                }

                <Text style={styles.title}> Cel: <Text style={styles.costValue}>{this.props.nameTrainingPlanProps}</Text></Text>
                <Text style={styles.title}> Poziom: <Text style={styles.costValue}> {this.props.difficultyLevelProps}</Text></Text>
                <Text style={styles.title}> Okres: <Text style={styles.costValue}> {this.props.periodProps} dni</Text></Text>
                <Text style={styles.title}> Uwagi: <Text style={styles.costValue}> {this.props.messageProps}</Text></Text>
                <View style={styles.cost}>
                <Text style={styles.costText}>Całkowity koszt: </Text>
                <Text style={styles.costValue}>{this.props.priceProps}</Text>
                </View>
                <View style={styles.buttonMargin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                        locations={[0, 0.5, 0.9]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonWeekPlan}>
                        <TouchableOpacity onPress={() => this.sendResult()} style={styles.touch} >

                            <Text style={styles.buttonTextWeekPlan}>
                                ZAPŁAĆ
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    diet: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {

        fontSize: 20,

    },
    titleBig: {
        textAlign: 'center',
        margin: 15,
        fontFamily: 'Caveat-Bold',
        fontSize: 30,
        color: '#000000',
    },
    price: {
        textAlign: 'center',
        fontSize: 17,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        flex: 0.2,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    costValue: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        marginLeft: 5
    },
    cost: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    costText: {
        fontSize: 20
    },
    buttonMargin: {
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        flex: 2,
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
    titleSummary: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

});
