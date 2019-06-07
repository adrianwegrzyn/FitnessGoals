import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, Image, Linking
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Navigation} from 'react-native-navigation';


export default class SportArticles extends Component<> {
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
                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/wisla-krakow-rafal-janicki-podpisal-kontrakt-z-klubem/00083YLYJK9L9HOW-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('http://google.com')}>
                        Wisła Kraków. Rafał Janicki podpisał kontrakt z klubem
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/dawid-konarski-kalendarz-reprezentacyjny-jest-przeladowany-m/00083YGS1V9PTX8C-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('http://google.com')}>
                        Dawid Konarski: Kalendarz reprezentacyjny jest przeładowany. Mówimy o tym na każdym kroku
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/formula-1-kubica-najwolniejszy-na-drugim-treningu-przed-gp-m/00083WEWE10WJ2MX-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('http://google.com')}>
                        Formuła 1. Kubica najwolniejszy na drugim treningu przed GP Monako
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/fifa-zdecydowala-mundial-w-katarze-nie-bedzie-powiekszony/00083W5HDEU41T1P-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('http://google.com')}>
                        FIFA zdecydowała! Mundial w Katarze nie będzie powiększony
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/french-open-hubert-hurkacz-zagra-z-djokovicem/00083WHG68OPJK7D-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('http://google.com')}>
                        French Open. Hubert Hurkacz zagra z Djokovicem
                    </Text>





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
    description: {
        fontSize: 20,
        textAlign: 'center'
    },
    reference: {
        color: '#3B5998',
        textAlign: 'center',
        fontSize: 20
    }
});
