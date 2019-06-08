import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import {progress} from "../json/progress";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProgressStory extends Component<> {
    constructor() {
        super();
    }


    render() {

        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.iconView}>
                        <Icon name='chart-line' size={130} color='#000000'/>


                        <Text style={styles.titleDate}>{progress[0].date}</Text>
                    </View>
                        <View style={styles.arrangement}>
                            <Text style={styles.mealText}>waga  </Text>
                            <Text style={styles.mealName}>{progress[0].weight}</Text>
                            <Text style={styles.mealNameMinus}>{progress[0].weightP}</Text>
                        </View>

                        <Text style={styles.circuits}>OBWODY</Text>

                        <View style={styles.arrangement}>
                            <Text style={styles.mealText}>kark    </Text>
                            <Text style={styles.mealName}>{progress[0].neck}</Text>
                            <Text style={styles.mealNamePlus}>{progress[0].neckP}</Text>
                        </View>

                        <View style={styles.arrangement}>
                            <Text style={styles.mealText}>klatka</Text>
                            <Text style={styles.mealName}>{progress[0].chest}</Text>
                            <Text style={styles.mealNamePlus}>{progress[0].chestP}</Text>
                        </View>

                        <View style={styles.arrangement}>
                            <Text style={styles.mealText}>łydka  </Text>
                            <Text style={styles.mealName}>{progress[0].calf}</Text>
                            <Text style={styles.mealNamePlus}>{progress[0].calfP}</Text>
                        </View>

                        <View style={styles.arrangement}>
                            <Text style={styles.mealText}>pas        </Text>
                            <Text style={styles.mealName}>{progress[0].hips}</Text>
                            <Text style={styles.mealNamePlus}>{progress[0].hipsP}</Text>
                        </View>

                    <View style={styles.iconView}>

                        <Text style={styles.titleDate}>{progress[1].date}</Text>
                    </View>
                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>waga  </Text>
                        <Text style={styles.mealName}>{progress[1].weight}</Text>
                        <Text style={styles.mealNameMinus}>{progress[1].weightP}</Text>
                    </View>

                    <Text style={styles.circuits}>OBWODY</Text>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>kark    </Text>
                        <Text style={styles.mealName}>{progress[1].neck}</Text>
                        <Text style={styles.mealNamePlus}>{progress[1].neckP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>klatka</Text>
                        <Text style={styles.mealName}>{progress[1].chest}</Text>
                        <Text style={styles.mealNamePlus}>{progress[1].chestP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>łydka  </Text>
                        <Text style={styles.mealName}>{progress[1].calf}</Text>
                        <Text style={styles.mealNamePlus}>{progress[1].calfP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>pas        </Text>
                        <Text style={styles.mealName}>{progress[1].hips}</Text>
                        <Text style={styles.mealNamePlus}>{progress[1].hipsP}</Text>
                    </View>

                    <View style={styles.iconView}>

                        <Text style={styles.titleDate}>{progress[2].date}</Text>
                    </View>
                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>waga  </Text>
                        <Text style={styles.mealName}>{progress[2].weight}</Text>
                        <Text style={styles.mealNameMinus}>{progress[2].weightP}</Text>
                    </View>

                    <Text style={styles.circuits}>OBWODY</Text>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>kark    </Text>
                        <Text style={styles.mealName}>{progress[2].neck}</Text>
                        <Text style={styles.mealNamePlus}>{progress[2].neckP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>klatka</Text>
                        <Text style={styles.mealName}>{progress[2].chest}</Text>
                        <Text style={styles.mealNameConst}>{progress[2].chestP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>łydka     </Text>
                        <Text style={styles.mealName}>{progress[2].calf}</Text>
                        <Text style={styles.mealNamePlus}>{progress[2].calfP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>pas        </Text>
                        <Text style={styles.mealName}>{progress[2].hips}</Text>
                        <Text style={styles.mealNamePlus}>{progress[2].hipsP}</Text>
                    </View>

                    <View style={styles.iconView}>

                        <Text style={styles.titleDate}>{progress[3].date}</Text>
                    </View>
                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>waga  </Text>
                        <Text style={styles.mealName}>{progress[3].weight}</Text>
                        <Text style={styles.mealNameMinus}>{progress[3].weightP}</Text>
                    </View>

                    <Text style={styles.circuits}>OBWODY</Text>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>kark    </Text>
                        <Text style={styles.mealName}>{progress[3].neck}</Text>
                        <Text style={styles.mealNameConst}>{progress[3].neckP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>klatka </Text>
                        <Text style={styles.mealName}>{progress[3].chest}</Text>
                        <Text style={styles.mealNameConst}>{progress[3].chestP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>łydka       </Text>
                        <Text style={styles.mealName}>{progress[3].calf}</Text>
                        <Text style={styles.mealNamePlus}>{progress[3].calfP}</Text>
                    </View>

                    <View style={styles.arrangement}>
                        <Text style={styles.mealText}>pas     </Text>
                        <Text style={styles.mealName}>{progress[3].hips}</Text>
                        <Text style={styles.mealNameConst}>{progress[3].hipsP}</Text>
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
    arrangement: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    titleDate: {
        fontSize: 35,
        fontFamily: 'OpenSans-Regular',
        color: '#57BB16',
        marginBottom: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        padding: 7
    },
    mealText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    mealNameMinus: {
        color: 'red',
        fontSize: 20,
    },
    mealNamePlus: {
        color: 'green',
        fontSize: 20,
    },
    mealNameConst: {
        color: 'gray',
        fontSize: 20,
    },
    mealName: {
        fontSize: 20,
    },
    circuits: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }


});
