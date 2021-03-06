import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput, Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from "react-native-navigation";



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

    sendResult = () => {
        this.newWindow('App');
    };

    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };

    constructor() {
        super();
        this.state = {
            weight: '',
            growth: '',
            neck: '',
            waist: '',
            arm: '',
            hips: '',
            chest: '',
            thigh: '',
            forearm: '',
            calf: '',
            ankle: ''
        }
    }




    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.measumerent}>
                    <Image style={{width: 110, height: 110}}
                        source={{uri: 'https://i.postimg.cc/tTS23W6c/measurement.png'}}
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
                        // source={{uri: 'https://i.postimg.cc/hj63FVGd/body.gif'}}
                        source={require('../../image/body.gif')}
                    />
                </View>

                <Text style={styles.title}> Podaj szczegółowe wymiary [cm]</Text>

                <View style={styles.weight}>
                    <Text style={styles.item}>Kark</Text>
                    <View style={styles.inputAlign}>
                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(neck) => this.setState({neck})}
                        value={this.state.neck}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />
                    </View>

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Talia</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(waist) => this.setState({waist})}
                        value={this.state.waist}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Ramię</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(arm) => this.setState({arm})}
                        value={this.state.arm}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Biodra</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(hips) => this.setState({hips})}
                        value={this.state.hips}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>



                <View style={styles.weight}>
                    <Text style={styles.item}>Klatka piersiowa</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(chest) => this.setState({chest})}
                        value={this.state.chest}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Udo</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(thigh) => this.setState({thigh})}
                        value={this.state.thigh}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Przedramię</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(forearm) => this.setState({forearm})}
                        value={this.state.forearm}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Łydka</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
                        onChangeText={(calf) => this.setState({calf})}
                        value={this.state.calf}
                        keyboardType='number-pad'
                        textAlign={'center'}
                    />

                </View>

                <View style={styles.weight}>
                    <Text style={styles.item}>Staw skokowy</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        style={styles.inputTextWeight}
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

                            <Text onPress={() => this.sendResult()} style={styles.buttonTextWeekPlan}>
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
        backgroundColor: '#FFFFFF'
    },
    measumerent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputTextWeight: {
        height: 35,
        width: 80,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        // marginLeft: 11,
        marginRight: 40,
        justifyContent: 'flex-end',
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
        justifyContent: 'space-between',
        marginLeft: 20
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
    inputAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    }



});
