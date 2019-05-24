import React, {Component} from 'react';
import {Image, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Navigation} from "react-native-navigation";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';


var radio_props1 = [
    {label: '30 dni                 39.99 zł', value: 30 },
    {label: '60 dni                 79.99 zł', value: 60 },
    {label: '90 dni               119.99 zł', value: 90 },
];

var radio_props1name = [
    {label: 'spalanie tkanki tłuszczowej', value: 'spalanie tkanki tłuszczowej' },
    {label: 'budowa masy mięśniowej', value: 'budowa masy mięśniowej' },
    {label: 'utrzymanie wagi', value: 'utrzymanie wagi' }
];

var radio_props1level = [
    {label: 'początkujący', value: 'początkujący' },
    {label: 'średnio-zaawansowany', value: 'średnio-zaawansowany' },
    {label: 'zaawansowany', value: 'zaawansowany' }
];

var radio_props2 = [
    {label: '30 dni                 49.99 zł', value: 30 },
    {label: '60 dni                 89.99 zł', value: 60 },
    {label: '90 dni               129.99 zł', value: 90 }
];

var radio_props3 = [
    {label: '30 dni                79.99 zł', value: 30 },
    {label: '60 dni              159.99 zł', value: 60 },
    {label: '90 dni              245.99 zł', value: 90 }
];

export default class ShoppingDetails extends Component<> {

    constructor() {
        super();
        this.state = {
            value: '',
            diet: false,
            valueLevel: 'brak',
            message: '',
            nameTrainingPlan: '',
            price: '',
            orderId: 1
        }
    }

    newWindow = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Summary',
                passProps: {
                    orderIdProps: this.state.orderId,
                    nameTrainingPlanProps: this.state.valueName,
                    periodProps: this.state.value,
                    difficultyLevelProps: this.state.valueLevel,
                    messageProps: this.state.message,
                    dietProps: this.state.diet,
                    dateOrderProps: this.formatDate(),
                    priceProps: this.state.price,
                    numberShopProps: this.props.numberShopProps
                },
            }
        });
    };

    setParameters = () => {
        this.calculateValue();
        this.setState({}, function () {
            this.newWindow();
        });
    };


    calculateValue = () => {
        if (this.props.numberShopProps === 1) {
            if (this.state.value === 30) {
                this.setState({
                    price: '39,99 zł'
                });
            } else if (this.state.value === 60) {
                this.setState({
                    price: '79,99 zł'
                });
            } else if (this.state.value === 90) {
                this.setState({
                    price: '119,99 zł'
                });
            }
        } else  if (this.props.numberShopProps === 2) {
            if (this.state.value === 30) {
                this.setState({
                    price: '49,99 zł'
                });
            } else if (this.state.value === 60) {
                this.setState({
                    price: '89,99 zł'
                });
            } else if (this.state.value === 90) {
                this.setState({
                    price: '129,99 zł'
                });
            }
        } else  if (this.props.numberShopProps === 3) {
            if (this.state.value === 30) {
                this.setState({
                    price: '79,99 zł'
                });
            } else if (this.state.value === 60) {
                this.setState({
                    price: '159,99 zł'
                });
            } else if (this.state.value === 90) {
                this.setState({
                    price: '245,99 zł'
                });
            }
        }
    };


    formatDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;

        return today;
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.props.numberShopProps !== 1 ? <View/> :
                        <View>

                            <Text style={styles.title}> Dieta </Text>
                            <View style={styles.diet}>
                                <Image style={{width: 100, height: 100}}
                                       source={{uri: 'https://i.postimg.cc/FKjFL6gz/diet.png'}}
                                />
                            </View>
                            <View style={styles.line}/>
                            <Text style={styles.title}> Cel: </Text>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1name}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(itemValue) => this.setState({valueName: itemValue, diet: true})}
                                />
                            </View>

                                <Text style={styles.title}> Okres: </Text>
                            <View style={styles.inputyLevel}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <Text style={styles.title}> Uwagi: </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={2}
                                style={styles.inputText}
                                onChangeText={(message) => this.setState({message})}
                                value={this.state.message}
                            />
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity onPress={() => this.setParameters()} style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            PODSUMOWANIE
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
                                       source={{uri: 'https://i.postimg.cc/SQn51M37/gym.png'}}
                                />
                            </View>
                            <View style={styles.line}/>
                            <Text style={styles.title}> Cel: </Text>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1name}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(itemValue) => this.setState({valueName: itemValue})}
                                />
                            </View>
                            <Text style={styles.title}> Poziom: </Text>
                            <View style={styles.inputyLevel}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1level}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(itemValue) => this.setState({valueLevel: itemValue, diet: false})}
                                />
                            </View>
                            <Text style={styles.title}> Okres: </Text>
                            <View style={styles.inputyLevel}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props2}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <Text style={styles.title}> Uwagi: </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={2}
                                style={styles.inputText}
                                onChangeText={(message) => this.setState({message})}
                                value={this.state.message}
                            />
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity onPress={() => this.setParameters()} style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            PODSUMOWANIE
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
                            <View style={styles.line}/>
                            <Text style={styles.title}> Cel: </Text>
                            <View style={styles.inputy}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1name}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(itemValue) => this.setState({valueName: itemValue, diet: true})}
                                />
                            </View>
                            <Text style={styles.title}> Poziom: </Text>
                            <View style={styles.inputyLevel}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props1level}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(itemValue) => this.setState({valueLevel: itemValue})}
                                />
                            </View>
                            <Text style={styles.title}> Okres: </Text>
                            <View style={styles.inputyLevel}>
                                <RadioForm
                                    buttonSize={28}
                                    labelStyle={{fontSize: 20}}
                                    radio_props={radio_props3}
                                    initial={-1}
                                    formHorizontal={false}
                                    buttonColor={'#3B5998'}
                                    style={styles.sexRadio}
                                    onPress={(value) => {
                                        this.setState({value: value})
                                    }}
                                />
                            </View>
                            <Text style={styles.title}> Uwagi: </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={2}
                                style={styles.inputText}
                                onChangeText={(message) => this.setState({message})}
                                value={this.state.message}
                            />
                            <View style={styles.buttonMargin}>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                                    locations={[0, 0.5, 0.9]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.buttonWeekPlan}>
                                    <TouchableOpacity onPress={() => this.setParameters()} style={styles.touch} >

                                        <Text style={styles.buttonTextWeekPlan}>
                                            PODSUMOWANIE
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
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 35,
    },
    inputyLevel: {
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 35,
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
    },
    inputText: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 14,
        marginLeft:10,
        marginRight: 10,
        marginTop: 10,

    },

});
