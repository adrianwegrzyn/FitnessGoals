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
                               source={{uri: 'https://i.iplsc.com/robert-lewandowski-gdy-gramy-jednym-napastnikiem-jest-nam-ci/00084XHVVUOT45CC-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('https://www.rmf24.pl/sport/news-robert-lewandowski-gdy-gramy-jednym-napastnikiem-jest-nam-ci,nId,3034021')}>
                        Robert Lewandowski: Gdy gramy jednym napastnikiem, jest nam ciężej wykreować coś w ofensywie
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/organizatorzy-french-open-krytykowani-za-wybor-kortow-dla-ko/00084WZ5198BVHVW-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('https://www.rmf24.pl/sport/news-organizatorzy-french-open-krytykowani-za-wybor-kortow-dla-ko,nId,3032661')}>
                        Organizatorzy French Open krytykowani za wybór kortów dla kobiecych półfinałów
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/bartosz-kurek-odchodzi-z-onico-warszawa/00084WQX6YBNE238-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('https://www.rmf24.pl/raporty/raport-siatkarski/siatkowka/news-bartosz-kurek-odchodzi-z-onico-warszawa,nId,3032623')}>
                        Bartosz Kurek odchodzi z Onico Warszawa
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/reczna-na-orliku-finalisci-spotkaja-sie-w-kaliszu/00084VALH9TCCM71-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('https://www.rmf24.pl/sport/news-reczna-na-orliku-finalisci-spotkaja-sie-w-kaliszu,nId,3032478')}>
                        Ręczna na Orliku. Finaliści spotkają się w Kaliszu
                    </Text>

                    <View style={styles.measumerent}>
                        <Image style={{width: 320, height: 320, margin: 20}}
                               source={{uri: 'https://i.iplsc.com/michal-winiarski-trenerem-trefla-gdansk-trafilismy-szostke-w/00084VIR5XBPPEV8-C459.jpg'}}
                        />
                    </View>
                    {/*<Text style={styles.description}>Sezon reprezentacyjny rozpoczęty!</Text>*/}
                    <Text style={styles.reference}
                          onPress={() => Linking.openURL('https://www.rmf24.pl/sport/news-michal-winiarski-trenerem-trefla-gdansk-trafilismy-szostke-w,nId,3032492')}>
                        Michał Winiarski trenerem Trefla Gdańsk. "Trafiliśmy szóstkę w totka"
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
