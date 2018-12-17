import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';



export default class App extends Component<> {

    componentDidMount() {
        SplashScreen.hide();
    }

    goToDrawer = () => {
        Navigation.mergeOptions('drawerId', {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        })
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
            <View style={styles.container}>
                {/*<LinearGradient colors={['#ffffff', '#e8fff3', '#b4efce']} style={styles.linearGradient}>*/}

                {/*<LinearGradient*/}
                    {/*start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}*/}
                    {/*locations={[0,0.5,0.9]}*/}
                    {/*colors={['#ff1012', '#23ef00', '#060dc3']}*/}
                    {/*style={styles.linearGradient}>*/}

                {/*1*/}

                <View style={styles.content}>
                    <View style={styles.rowMenu}>
                        <TouchableOpacity onPress={() => this.newWindow('TodayTraining')} style={styles.itemTouchableOpacity}>
                            <Icon name='run' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Plan treningowy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('DietOptions')} style={styles.itemTouchableOpacity}>
                            <Icon name='bowl' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Dieta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='newspaper' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Artykuły sportowe</Text>
                        </TouchableOpacity>
                    </View>

                    {/*2*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='chart-line' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Historia postępów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='basket' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Zakupy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='lead-pencil' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Pomiary</Text>
                        </TouchableOpacity>
                    </View>

                    {/*3*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity onPress={() => this.newWindow('Chat')} style={styles.itemTouchableOpacity}>
                            <Icon name='wechat' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Czat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='calculator' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Kalkulator BMI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='silverware-variant' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Zapotrzebowanie kaloryczne</Text>
                        </TouchableOpacity>
                    </View>

                    {/*4*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='map-marker-minus' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Mapa biegów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('ReviewsOptions')}
                                          style={styles.itemTouchableOpacity}>
                            <Icon name='content-copy' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Opinie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('Informations')} style={styles.itemTouchableOpacity}>
                            <Icon name='information-variant' size={50} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Informacje</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                            <Text style={styles.infoText}>
                                Zacznij  już dziś !
                            </Text>
                    </View>
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
        borderRadius:10,
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
