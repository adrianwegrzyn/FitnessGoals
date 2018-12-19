import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Picker, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

const roundTo = require('round-to');


export default class CaloricDemand extends Component<> {
    constructor() {
        super();
        this.state = {
            checkedMan: false,
            checkedWoman: false,
            dataBmr: '',
            weight: '',
            growth: '',
            age: '',
            agee: 0,
            refreshing: false,
        }
    }


    checkedMan = () => {
        if (!this.state.checkedMan) {
            this.state.agee = 5;
        }
        this.setState({
            checkedMan: !this.state.checkedMan,
        });

    };
    checkedWoman = () => {
        if (!this.state.checkedWoman) {
            this.state.agee = -161;
        }
        this.setState({
            checkedWoman: !this.state.checkedWoman,
        });

    };


    calculate = () => {

        if (this.state.weight === '') {
            this.setState({
                dataBmr: 'Proszę podać wagę'
            });
        } else if (this.state.growth === '') {
            this.setState({
                dataBmr: 'Proszę podać wzrost'
            });
        } else if (this.state.age === '') {
            this.setState({
                dataBmr: 'Proszę podać wiek'
            });
        } else {
            this.setState({
                dataBmr: roundTo((this.state.weight * 9.99) + (this.state.growth * 6.25) - (this.state.age * 4.92) + this.state.agee, 2) + ' kcal'
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
                        <CheckBox
                            onPress={this.checkedWoman}
                            title='Kobieta'
                            checked={this.state.checkedWoman}

                        />
                        <CheckBox
                            onPress={this.checkedMan}
                            title='Mężczyzna'
                            checked={this.state.checkedMan}
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
                        <Picker.Item label="Bardzo miała (ćwiczenia raz na tydzień)" value="2"/>
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
                        <TouchableOpacity style={styles.touch} onPress={() => this.calculate()}>

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
        marginRight: 5,
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

});
