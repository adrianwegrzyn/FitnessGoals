import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Measurement extends Component<> {

    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Pomiary'
                },
            }
        };
    }

    constructor() {
        super();
        this.state = {
            weight: '',
            growth: '',
            neck: 'Kark',
            waist: 'Talia',
            arm: 'Ramię',
            hips: 'Biodra',
            chest: 'Klatka Piersiowa',
            thigh: 'Udo',
            forearm: 'Przedramię',
            calf: 'Łydka',
            ankle: 'Staw skokowy'
        }
    }




    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.measumerent}>
                    <Image style={{width: 180, height: 180}}
                        source={require('../../image/measurement.png')}
                    />
                </View>

                <Text style={styles.title}> Podstawowe wymiary </Text>

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



                <Text style={styles.title}> Szczegółowe wymiary </Text>
                <View style={styles.measumerent}>
                    <Image
                        source={require('../../image/body.gif')}
                    />
                </View>

                <Text style={styles.title}> Podaj szczegółowe wymiary [cm]</Text>

                <View style={styles.weight}>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(neck) => this.setState({neck})}
                        value={this.state.neck}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />


                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(waist) => this.setState({waist})}
                        value={this.state.waist}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />
                </View>

                <View style={styles.weight}>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(arm) => this.setState({arm})}
                        value={this.state.arm}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />


                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(hips) => this.setState({hips})}
                        value={this.state.hips}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />
                </View>

                <View style={styles.weight}>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(chest) => this.setState({chest})}
                        value={this.state.chest}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />


                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(thigh) => this.setState({thigh})}
                        value={this.state.thigh}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />
                </View>

                <View style={styles.weight}>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(forearm) => this.setState({forearm})}
                        value={this.state.forearm}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />


                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(calf) => this.setState({calf})}
                        value={this.state.calf}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />
                </View>

                <View style={styles.weight}>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextBody}
                        onChangeText={(ankle) => this.setState({ankle})}
                        value={this.state.ankle}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.buttonMargin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                        locations={[0, 0.5, 0.9]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonWeekPlan}>
                        <TouchableOpacity style={styles.touch} >

                            <Text style={styles.buttonTextWeekPlan}>
                                Aktualizuj
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    measumerent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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
    item: {
        margin: 15,
        fontFamily: 'OpenSans-Regular',
        fontSize: 17,
        color: '#000000',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputTextBody: {
        height: 35,
        width: '35%',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        marginLeft: 30,
        marginRight: 10,
        marginTop: 10,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
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



});