import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from "react-native-elements";


export default class App extends Component<> {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.iconBox}>
                    <Icon name='clipboard-list' size={200} color='#000000'/>
                </View>
                <ScrollView style={styles.content}>
                    <Text style={styles.shoppingListText}>
                        - pietruszka
                    </Text>
                    <Text style={styles.shoppingListText}>
                        - 3 jabłka
                    </Text>
                    <Text style={styles.shoppingListText}>
                        - filet z indyka (300g)
                    </Text>
                    <Text style={styles.shoppingListText}>
                        - sałata
                    </Text>
                    <Text style={styles.shoppingListText}>
                        - 10 jajek
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
    iconBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    content: {
        flex:2
    },
    shoppingListText: {
        marginHorizontal: 20,
        marginVertical:5,
        fontSize: 24,
        fontFamily: 'Caveat-Regular',
    }
});
