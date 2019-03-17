import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Navigation} from 'react-native-navigation';

export default class Informations extends Component<> {
    constructor() {
        super();
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









render() {

        return (
            <View style={styles.container}>
                {/*<View style={styles.toolbar}>*/}
                    {/*<Icon.Button style={{flex: 1, margin: 5}} name="menu"*/}
                                 {/*backgroundColor="#FFFFFF" color="black"*/}
                                 {/*size={30} onPress={this.goToDrawer}/>*/}
                    {/*<View style={{flex: 5, alignItems: 'center'}}>*/}
                        {/*<Text style={styles.nameToolBar}>Informacje</Text>*/}
                    {/*</View>*/}
                {/*</View>*/}

                <ScrollView>
                    <Text style={styles.title}>Dzięki Aplikacji</Text>

                    <View style={styles.iconView}>
                        <Icon name='cellphone-android' size={70} color='#000000'/>
                        <Text style={styles.iconDescription}>Zyskujesz wygodny dostęp do zakupionych usług i niezbędnych
                            informacji</Text>
                    </View>

                    <View style={styles.iconView}>
                        <Icon name='headset' size={70} color='#000000'/>
                        <Text style={styles.iconDescription}>Uzyskasz eksperckie wsparcie potrzebne przy realizacji
                            Twoich celów</Text>
                    </View>

                    <View style={styles.iconView}>
                        <Icon name='message-processing' size={70} color='#000000'/>
                        <Text style={styles.iconDescription}>Korzystaj z czatu, aby dzielić się swoimi doświadczeniami z
                            innymi</Text>
                    </View>

                    <Text style={styles.end}>Indywidualne plany treningowe i dietetyczne</Text>

                    <TouchableOpacity onPress={() => this.notification()}>
                        <Text> Kliknij mnie</Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 55,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nameToolBar: {
        fontSize: 20,
        fontFamily: 'OpenSans-Regular'
    },
    iconView: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconDescription: {
        textAlign: 'center',
        margin: 15,
        fontFamily: 'OpenSans-Regular',
        fontSize: 11
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        margin: 20
    },
    end: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        margin: 30,
        fontFamily: 'OpenSans-Regular'
    },

});
