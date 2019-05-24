import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Picker, ScrollView, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';

const roundTo = require('round-to');

var radio_props = [
    {label: 'Kobieta   ', value: 0},
    {label: 'Mężczyzna', value: 1}
];

export default class CaloricDemand extends Component<> {
    constructor() {
        super();
        this.state = {
            dataBmr: '',
            weight: '',
            growth: '',
            age: '',
            physicalActivityIndex: 0,
            planningIndex: 0
        }
    }


    calculate = () => {
        if (isNaN(this.state.weight)) {
            Alert.alert("Błędnie podana waga");
        } else if (isNaN(this.state.growth)) {
            Alert.alert("Błędnie podany wzrost");
        } else if (isNaN(this.state.age)) {
            Alert.alert("Błędnie podany wiek");
        } else if (this.state.weight === '') {
            Alert.alert("Proszę podać wagę");
        } else if (this.state.growth === '') {
            Alert.alert("Proszę podać wzrost");
        } else if (this.state.age === '') {
            Alert.alert("Proszę podać wiek");
        } else if (this.state.value === 1) {
            this.setState({
                dataBmr: roundTo(this.state.planningIndex + this.state.physicalActivityIndex * ((this.state.weight * 9.99) + (this.state.growth * 6.25) - (this.state.age * 4.92) + 5), 0) + ' kcal'
            });
        } else {
            this.setState({
                dataBmr: roundTo(this.state.planningIndex + this.state.physicalActivityIndex * ((this.state.weight * 9.99) + (this.state.growth * 6.25) - (this.state.age * 4.92) - 161), 0) + ' kcal'
            });
        }

    };

    setParameters = () => {
        this.physicalActivityCalculate();
        this.planningCalculate();
        this.setState({}, function () {
            this.calculate();
        });

    };


    physicalActivityCalculate = () => {
        if (this.state.physicalActivity === '1') {
            this.setState({
                physicalActivityIndex: 1.2
            });
        } else if (this.state.physicalActivity === '2') {
            this.setState({
                physicalActivityIndex: 1.4
            });
        } else if (this.state.physicalActivity === '3') {
            this.setState({
                physicalActivityIndex: 1.6
            });
        } else if (this.state.physicalActivity === '4') {
            this.setState({
                physicalActivityIndex: 1.8
            });
        } else if (this.state.physicalActivity === '5') {
            this.setState({
                physicalActivityIndex: 2.1
            });
        } else {
            this.setState({
                physicalActivityIndex: 1
            });
        }
    };

    planningCalculate = () => {
        if (this.state.planning === '1') {
            this.setState({
                planningIndex: 300
            });
        } else if (this.state.planning === '2') {
            this.setState({
                planningIndex: 0
            });
        } else if (this.state.planning === '3') {
            this.setState({
                planningIndex: -300
            });
        } else {
            this.setState({
                planningIndex: 0
            });
        }
    };
    // componentDidMount() {
    //     fetch("")
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 dataBmi: responseJson
    //             });
    //
    //         });
    // }
    //
    // sendResult = () => {
    //     fetch('https://trenerprestonalny.herokuapp.com/calculation/calulatorBmi', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             idUser: 11,
    //             weight: this.state.weight,
    //             growth: this.state.growth
    //         })
    //     });
    //     this.state.weight = '';
    //     this.state.growth = '';
    // };

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={{flex: 10}}>
                    <Text style={styles.title}>Twoje zapotrzebowanie kaloryczne (BMR)</Text>
                    <View style={styles.sex}>
                        <Text style={styles.item}>Płeć</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={-1}
                            formHorizontal={true}
                            buttonColor={'#3B5998'}
                            style={styles.sexRadio}
                            onPress={(value) => {
                                this.setState({value: value})
                            }}

                        />
                    </View>

                    <View style={styles.weight}>
                        <Text style={styles.item}>Waga</Text>

                        <TextInput
                            multiline={true}
                            numberOfLines={1}
                            style={styles.inputTextWeight}
                            onChangeText={(weight) => this.setState({weight})}
                            value={this.state.weight}
                            keyboardType='number-pad'
                            textAlign={'center'}
                        />
                        <Text style={styles.item}>kg</Text>
                    </View>

                    <View style={styles.weight}>
                        <Text style={styles.item}>Wzrost</Text>

                        <TextInput
                            multiline={true}
                            numberOfLines={1}
                            style={styles.inputTextGrowth}
                            onChangeText={(growth) => this.setState({growth})}
                            value={this.state.growth}
                            keyboardType='number-pad'
                            textAlign={'center'}
                        />
                        <Text style={styles.item}>cm</Text>
                    </View>

                    <View style={styles.weight}>
                        <Text style={styles.item}>Wiek</Text>

                        <TextInput
                            multiline={true}
                            numberOfLines={1}
                            style={styles.inputTextAge}
                            onChangeText={(age) => this.setState({age})}
                            value={this.state.age}
                            keyboardType='number-pad'
                            textAlign={'center'}
                        />
                        <Text style={styles.item}>lat</Text>
                    </View>

                    <Picker
                        selectedValue={this.state.physicalActivity}
                        style={{height: 50, width: '100%'}}
                        onValueChange={(itemValue, itemIndex) => this.setState({physicalActivity: itemValue})}>
                        <Picker.Item label='Wybierz rodzaj aktywności fizycznej' value='0'/>
                        <Picker.Item label="Znikoma (brak ćwiczeń, praca siedząca, szkoła)" value="1"/>
                        <Picker.Item label="Bardzo mała (ćwiczenia raz na tydzień)" value="2"/>
                        <Picker.Item label="Umiarkowana (ćwiczenia dwa razy w tygodniu)" value="3"/>
                        <Picker.Item label="Duża (dość ciężki trening kilka razy w tygodniu)" value="4"/>
                        <Picker.Item label="Bardzo duża (przynajmniej 4 treningi w tygodniu)" value="5"/>
                    </Picker>

                    <Picker
                        selectedValue={this.state.planning}
                        style={{height: 50, width: '100%'}}
                        onValueChange={(itemValue, itemIndex) => this.setState({planning: itemValue})}>
                        <Picker.Item label='Wybierz co chcesz osiągnąć' value='0'/>
                        <Picker.Item label="chcę przytyć" value="1"/>
                        <Picker.Item label="chcę utrzymać wagę" value="2"/>
                        <Picker.Item label="chcę schudnąć" value="3"/>

                    </Picker>
                </View>


                <View style={styles.buttonMargin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                        locations={[0, 0.5, 0.9]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonWeekPlan}>
                        <TouchableOpacity onPress={() => this.setParameters()}>
                            <Text style={styles.buttonTextWeekPlan}>
                                Oblicz BMR
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{flex: 2}}>

                    <Text style={styles.resultText}>Twoje zapotrzebowanie kaloryczne: </Text>
                    <Text style={styles.result}>{this.state.dataBmr}</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        margin: 15,
        fontFamily: 'Caveat-Bold',
        fontSize: 30,
        color: '#000000',
    },
    item: {
        margin: 15,
        fontFamily: 'OpenSans-Regular',
        fontSize: 17,
        color: '#000000',
    },
    buttonMargin: {
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        flex: 1,
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
    inputTextWeight: {
        height: 35,
        width: '55%',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        marginLeft: 11,
        marginRight: 10,
        marginTop: 10,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
    },
    inputTextGrowth: {
        height: 35,
        width: '55%',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        marginLeft: 0,
        marginRight: 10,
        marginTop: 10,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
    },
    inputTextAge: {
        height: 35,
        width: '55%',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        marginLeft: 16,
        marginRight: 9,
        marginTop: 10,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
    },
    weight: {
        flexDirection: 'row',
    },
    sex: {
        flexDirection: 'row'
    },
    btn: {
        height: 70
    },
    description: {
        textAlign: 'center',
        margin: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18,
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold'
    },
    sexRadio: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10,
    },


});
