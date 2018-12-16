import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default class ReviewsOptions extends Component<> {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataDietReviews: [],
            refreshing: false,
            review: '',
        }
    }

    componentDidMount() {
        fetch("https://trenerprestonalny.herokuapp.com/opionion/trainer/show?fbclid=IwAR2yOdT5gfY3YMhQ-pMALhiGw-5O-o9TDTNBd_fTe8fl4FYj3wuia9qlkyY")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataDietReviews: responseJson,
                });
            });
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        return this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };

    fetchData() {
        return fetch("https://trenerprestonalny.herokuapp.com/opionion/trainer/show?fbclid=IwAR2yOdT5gfY3YMhQ-pMALhiGw-5O-o9TDTNBd_fTe8fl4FYj3wuia9qlkyY")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataDietReviews: responseJson,
                });
            });
    }

    sendResult = () => {
        fetch('https://trenerprestonalny.herokuapp.com/opionion/trainer/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idUser: 11,
                name: "Adrian",
                date: this.formatDate(),
                message: this.state.message,
                photo: "https://sklep.etermed.pl/wp-content/uploads/pakiet_badan_mezczyzna_30_plus.jpg"
            })
        });
        this._onRefresh();
        this.state.message = '';
    };

    formatDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;

        return today;
    }




    render() {


        let rowsReviews = [];

        for (let i = 0; i < this.state.dataDietReviews.length; i++) {
            rowsReviews.push(
                <View key={i} style={styles.reviewContainer}>
                    <View style={{flex:1, }}>
                        <Image style={styles.image}
                               source={{uri: this.state.dataDietReviews[i].photo}}/>
                    </View>
                    <View style={{flex:3}}>
                        <View style={styles.reviewMessage}>
                            <View>
                                <Text style={styles.nickText}>{this.state.dataDietReviews[i].name}</Text>
                            </View>
                            <View>
                                <Text style={styles.dateText}>{this.state.dataDietReviews[i].date}</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: 'black', borderBottomWidth: 2, paddingBottom: 5, flex:6}}>
                            <Text style={styles.reviewText}>{this.state.dataDietReviews[i].message}</Text>
                        </View>
                    </View>
                </View>
            );
        }

        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator />
                </View>
            )
        }

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
                <View style={styles.content}>
                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}/>
                         }>
                        {rowsReviews}
                    </ScrollView>
                </View>
                <View>
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        style={styles.inputText}
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}
                    />
                    <TouchableOpacity  onPress={() => this.sendResult()} style={styles.button}>
                        <Text>Wyślij opinię</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 11,
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
    reviewContainer: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 15,
    },
    reviewMessage: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    nickText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    reviewText: {
        fontSize: 14,
        color: '#7E7E7E'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius:100,
        marginTop: 10
    },
    inputText: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 14,
        marginLeft:10,
        marginRight: 10,
        marginTop: 10,

    },
    button: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
        padding: 20,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },


});
