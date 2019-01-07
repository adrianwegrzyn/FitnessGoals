import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Text} from "react-native-elements";




export default class TrainerReviews extends Component<> {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity>
                        <View style={styles.reviewBox}>
                            <View style={styles.imageBox}>
                                <Image style={styles.image}
                                       source={{uri: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/cFsAAOSwNbFaneH7/$_20.JPG'}}/>
                            </View>
                            <View style={styles.infoBox}>
                                <Text style={styles.nameTrainer}>
                                    Jan Kowalski
                                </Text>
                                <Text>
                                    Lat: 28
                                </Text>
                                <Text style={{margin: 5, fontWeight: 'bold', color: '#000000', fontSize: 15, marginTop: 10}}>
                                    Specjalność:
                                </Text>
                                <Text>
                                    redukcja masy mięśniowej
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.reviewBox}>
                            <View style={styles.imageBox}>
                                <Image style={styles.image}
                                       source={{uri: 'https://i.ebayimg.com/00/s/NzAzWDgwMA==/z/QhwAAOSwKJFauPA4/$_20.JPG'}}/>
                            </View>
                            <View style={styles.infoBox}>
                                <Text style={styles.nameTrainer}>
                                    Adam Nowak
                                </Text>
                                <Text>
                                    Lat: 31
                                </Text>
                                <Text style={{margin: 5, fontWeight: 'bold', color: '#000000', fontSize: 15, marginTop: 10}}>
                                    Specjalność:
                                </Text>
                                <Text>
                                    budowanie masy mięśniowej
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    reviewBox: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    imageBox: {
        margin: 10,
    },
    image: {
        width: 111,
        height: 111,
        borderRadius:11,
        marginTop: 10
    },
    infoBox: {
        margin: 10,
    },
    nameTrainer: {
        fontSize: 25,
        color: '#000000',
        fontStyle: 'italic'
    }

});
