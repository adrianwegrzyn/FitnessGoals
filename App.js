import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from 'react-native-navigation';
// import {Icon} from 'react-native-elements';


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
                <View style={styles.toolbar}>
                    <Icon.Button style={{flex: 1, margin: 5}} name="menu"
                                 backgroundColor="#FFFFFF" color="black"
                                 size={30} onPress={this.goToDrawer}/>
                    <View style={{flex: 5, alignItems: 'center'}}>
                        <Text style={styles.nameToolBar}>Fitness Goals</Text>
                    </View>
                </View>

                {/*1*/}

                <View style={styles.content}>
                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='run' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Plan treningowy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='bowl' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Dieta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='newspaper' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Artykuły sportowe</Text>
                        </TouchableOpacity>
                    </View>

                    {/*2*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='chart-line' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Historia postępów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='basket' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Zakupy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='lead-pencil' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Pomiary</Text>
                        </TouchableOpacity>
                    </View>

                    {/*3*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity onPress={() => this.newWindow('Chat')} style={styles.itemTouchableOpacity}>
                            <Icon name='wechat' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Czat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='calculator' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Kalkulator BMI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='silverware-variant' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Zapotrzebowanie kaloryczne</Text>
                        </TouchableOpacity>
                    </View>

                    {/*4*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='map-marker-minus' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Mapa biegów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('ReviewsOptions')}
                                          style={styles.itemTouchableOpacity}>
                            <Icon name='content-copy' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Opinie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('Informations')} style={styles.itemTouchableOpacity}>
                            <Icon name='information-variant' size={80} color='#94C7E3'/>
                            <Text style={styles.textTouchableOpacity}>Informacje</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>KUP PLAN</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0388D2',
    },
    toolbar: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
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
    },
    itemTouchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0074B4',
        borderWidth: 1,
    },
    textTouchableOpacity: {
        textAlign: 'center',
        color: '#94C7E3',
        fontWeight: 'bold'
    },
    info: {
        flex: 0.4,
        backgroundColor: '#FAA824',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 25,
        textAlign: 'center'
    }


});
