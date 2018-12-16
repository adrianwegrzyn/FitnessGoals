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
                            <Icon name='run' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Plan treningowy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='bowl' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Dieta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='newspaper' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Artykuły sportowe</Text>
                        </TouchableOpacity>
                    </View>

                    {/*2*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='chart-line' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Historia postępów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='basket' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Zakupy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='lead-pencil' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Pomiary</Text>
                        </TouchableOpacity>
                    </View>

                    {/*3*/}
                    {/**/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity onPress={() => this.newWindow('Chat')} style={styles.itemTouchableOpacity}>
                            <Icon name='wechat' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Czat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='calculator' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Kalkulator BMI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='silverware-variant' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Zapotrzebowanie kaloryczne</Text>
                        </TouchableOpacity>
                    </View>

                    {/*4*/}

                    <View style={styles.rowMenu}>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='map-marker-minus' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Mapa biegów</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.newWindow('ReviewsOptions')}
                                          style={styles.itemTouchableOpacity}>
                            <Icon name='content-copy' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Opinie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTouchableOpacity}>
                            <Icon name='information-variant' size={80} color='#000000'/>
                            <Text style={styles.textTouchableOpacity}>Informacje</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.info}>


                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.7, y: 2.0}}
                            locations={[0,0.5,0.9]}
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Zacznij już dziś !
                            </Text>
                        </LinearGradient>


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
        borderColor: '#000000',
        borderWidth: 1,
    },
    textTouchableOpacity: {
        textAlign: 'center',
        color: '#7E7E7E',
        fontWeight: 'bold'
    },
    info: {
        flex: 0.4,
        backgroundColor: '#0388D2',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF',
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },


});
