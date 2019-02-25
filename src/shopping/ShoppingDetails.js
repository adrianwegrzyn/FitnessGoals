import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from "react-native-navigation";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';


var radio_props1 = [
    {label: '1 miesiąc                 39.99 zł', value: '39.99 zł' },
    {label: '2 miesiące               79.99 zł', value: '79.99 zł' },
    {label: '3 miesiące             119.99 zł', value: '119.99 zł' },
    {label: '6 miesięcy             209.99 zł', value: '209.99 zł' },
    {label: '1 rok                       428.99 zł', value: '428.99 zł' },
];

var radio_props2 = [
    {label: '1 miesiąc                 49.99 zł', value: '49.99 zł' },
    {label: '2 miesiące               89.99 zł', value: '89.99 zł' },
    {label: '3 miesiące             129.99 zł', value: '129.99 zł' },
    {label: '6 miesięcy             219.99 zł', value: '219.99 zł' },
    {label: '1 rok                       438.99 zł', value: '438.99 zł' },
];

var radio_props3 = [
    {label: '1 miesiąc                 79.99 zł', value: '79.99 zł' },
    {label: '2 miesiące             159.99 zł', value: '159.99 zł' },
    {label: '3 miesiące             245.99 zł', value: '245.99 zł' },
    {label: '6 miesięcy             409.99 zł', value: '409.99 zł' },
    {label: '1 rok                       748.99 zł', value: '748.99 zł' },
];

export default class ShoppingDetails extends Component<> {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                {/*<Text>{this.props.scoreTestProps}</Text>*/}
                {
                    this.props.numberShopProps !== 1 ? <View/> :
                        <View>
                            <Text style={styles.title}> Dieta </Text>
                            <View style={styles.diet}>
                                <Image style={{width: 100, height: 100}}
                                       source={require('../../image/diet.png')}
                                />
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1}
                                    initial={0}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.cost}>
                                <Text style={styles.costText}>Całkowity koszt: </Text>
                                <Text style={styles.costValue}>{this.state.value}</Text>
                            </View>
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            ZAPŁAĆ
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                }
                {
                    this.props.numberShopProps !== 2 ? <View/> :
                        <View>
                            <Text style={styles.title}> Plan Treningowy </Text>
                            <View style={styles.diet}>
                                <Image style={{width: 100, height: 100}}
                                       source={require('../../image/gym.png')}
                                />
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props2}
                                    initial={0}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.cost}>
                                <Text style={styles.costText}>Całkowity koszt: </Text>
                                <Text style={styles.costValue}>{this.state.value}</Text>
                            </View>
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            ZAPŁAĆ
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                }
                {
                    this.props.numberShopProps !== 3 ? <View/> :
                        <View>
                            <Text style={styles.title}>Dieta + Plan Treningowy </Text>
                            <View style={styles.row}>
                                <View style={styles.diet}>
                                    <Image style={{width: 100, height: 100}}
                                           source={require('../../image/diet.png')}
                                    />
                                </View>
                                <View style={styles.diet}>
                                    <Image style={{width: 70, height: 70}}
                                           source={require('../../image/plus.png')}
                                    />
                                </View>
                                <View style={styles.diet}>
                                    <Image style={{width: 100, height: 100}}
                                           source={require('../../image/gym.png')}
                                    />
                                </View>
                        </View>
                            <View style={styles.line}/>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props3}
                                    initial={0}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.cost}>
                            <Text style={styles.costText}>Całkowity koszt: </Text>
                                <Text style={styles.costValue}>{this.state.value}</Text>
                            </View>
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            ZAPŁAĆ
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                }
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
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
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
        marginTop: 10
    },
    inputy: {
        alignItems: 'center',
        marginTop: 20,
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
    costValue: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20
    }

});
