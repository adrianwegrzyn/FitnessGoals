import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from "react-native-navigation";




export default class Shopping extends Component<> {

    constructor() {
        super();
        this.state = ({
            numberShop: 0
        });

    }

    setNumberShop = (num) => {
        this.setState({
            numberShop: num
        }, function(){
            this.newWindow('ShoppingDetails');
        });

    };



    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
                passProps: {
                    numberShopProps: this.state.numberShop
                },
            }
        });
    };



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.setNumberShop(1)}>
                <Text style={styles.title}> Dieta </Text>
                <View style={styles.diet}>
                    <Image style={{width: 100, height: 100}}
                        source={require('../../image/diet.png')}
                    />
                </View>
                <Text style={styles.price}> Już od 39.99 zł</Text>
                </TouchableOpacity>
                <View style={styles.line}/>

                <TouchableOpacity onPress={() => this.setNumberShop(2)}>
                <Text style={styles.title}> Plan Treningowy </Text>
                <View style={styles.diet}>
                    <Image style={{width: 100, height: 100}}
                           source={require('../../image/gym.png')}
                    />
                </View>
                <Text style={styles.price}> Już od 49.99 zł</Text>
                </TouchableOpacity>
                <View style={styles.line}/>

                <TouchableOpacity onPress={() => this.setNumberShop(3)}>
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
                <Text style={styles.price}> Już od 79.99 zł</Text>
                </TouchableOpacity>
            </View>
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
    },
});
