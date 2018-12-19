import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

const roundTo = require('round-to');


export default class CalculatorBmi extends Component<> {
    constructor() {
        super();
        this.state = {
            checkedMan: false,
            checkedWoman: false,
            dataBmi: '',
            weight: '',
            growth: ''
        }
    }

    checkedMan = () => {
        this.setState({
            checkedMan: !this.state.checkedMan,
        });
    }
    checkedWoman = () => {
        this.setState({
            checkedWoman: !this.state.checkedWoman,
        });
    }

    calculate = () => {
        if (this.state.weight === '') {
            this.setState({
                dataBmi: 'Proszę podać wagę'
            });
        } else if (this.state.growth === '') {
            this.setState({
                dataBmi: 'Proszę podać wzrost'
            });
        } else
            this.setState({
                dataBmi: roundTo(this.state.weight / (this.state.growth / 100 * this.state.growth / 100), 2)
            });
    }

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

                <View style={{flex: 8}}>
                    <Text style={styles.title}>Wskaźnik masy ciała (BMI)</Text>
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
                </View>

                <View style={styles.buttonMargin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                        locations={[0, 0.5, 0.9]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonWeekPlan}>
                        <TouchableOpacity style={styles.touch} onPress={() => this.calculate()}>

                            <Text style={styles.buttonTextWeekPlan}>
                                Oblicz wskaźnik BMI
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{flex: 8}}>

                    <Text style={styles.resultText}>Twoje BMI wynosi: </Text>
                    <Text style={styles.result}>{this.state.dataBmi}</Text>
                    <View>
                        <Text style={styles.description}>
                            Normy wskaźnika BMI zostały sporządzone przez Światową Organizację Zdrowia (ang. WHO).
                            Najczęściej występującym typem klasyfikacji wyników jest kategoryzacja rozszerzona która
                            prezentuje się w poniższy sposób: {"\n"} {"\n"}

                            - poniżej 16,0 – wygłodzenie {"\n"}

                            - 16,0–16,99 – wychudzenie {"\n"}

                            - 17,0–18,49 – niedowagę {"\n"}

                            - 18,5–24,99 – wartość prawidłową {"\n"}

                            - 25,0–29,99 – nadwagę {"\n"}

                            - 30,0–34,99 – I stopień otyłości {"\n"}

                            - 35,0–39,99 – II stopień otyłości {"\n"}

                            - powyzej 40,0 – III stopień otyłości
                        </Text>
                    </View>
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
        marginBottom: 10,
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
        fontSize: 15,
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold'
    },

});
