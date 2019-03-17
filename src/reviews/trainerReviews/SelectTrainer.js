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



export default class ReviewsOptions extends Component<> {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataTrainerReviews: [{
                idEmployee: 1,
                firstName: "",
                lastName: "",
                speciality: "",
                photo: "",
                opinionTrainers: [
                    {
                        idUser: 1,
                        name: "",
                        date: "",
                        message: "",
                        photo: ""
                    }
                ]
            }],
            refreshing: false,
            review: '',
        }
    }

    componentDidMount() {
        fetch("https://applicationtrainer.herokuapp.com/opinion/trainer/1")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataTrainerReviews: responseJson,
                });

            });
    }

    formatDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
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

    _onRefresh = () => {
        this.setState({refreshing: true});
        return this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };

    fetchData() {
        return fetch("https://applicationtrainer.herokuapp.com/opinion/trainer/1")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataTrainerReviews: responseJson,
                });
            });
    }

    sendResult = () => {
        fetch('https://applicationtrainer.herokuapp.com/opinion/trainer/send', {
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

    render() {

        let rowsReviews = [];

        for (let i = 0; i < this.state.dataTrainerReviews[0].opinionTrainers.length; i++) {
            rowsReviews.push(
                <View key={i} style={styles.reviewContainer}>
                    <View style={{flex:1, }}>
                        <Image style={styles.image}
                               source={{uri: this.state.dataTrainerReviews[0].opinionTrainers[i].photo}}/>
                    </View>
                    <View style={{flex:3}}>
                        <View style={styles.reviewMessage}>
                            <View>
                                <Text style={styles.nickText}>{this.state.dataTrainerReviews[0].opinionTrainers[i].name}</Text>
                            </View>
                            <View>
                                <Text style={styles.dateText}>{this.state.dataTrainerReviews[0].opinionTrainers[i].date}</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: 'black', borderBottomWidth: 2, paddingBottom: 5, flex:6}}>
                            <Text style={styles.reviewText}>{this.state.dataTrainerReviews[0].opinionTrainers[i].message}</Text>
                        </View>
                    </View>
                </View>
            );
        }

        if(this.state.isLoading){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#3B5998" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.content}>

                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}/>
                    }>
                        <View style={styles.reviewBox}>
                            <View style={styles.imageBox}>
                                <Image style={styles.imageTrainer}
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
                        {rowsReviews}
                    </ScrollView>
                </View>

                <TextInput
                    multiline={true}
                    numberOfLines={2}
                    style={styles.inputText}
                    onChangeText={(message) => this.setState({message})}
                    value={this.state.message}
                />
                <TouchableOpacity  onPress={() => this.sendResult()} style={styles.button}>
                    <Text >Wyślij opinię</Text>
                </TouchableOpacity>
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
        padding: 5,
        margin: 10,
        borderRadius: 5,
    },
    loading: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    reviewBox: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginBottom: 20
    },
    imageBox: {
        margin: 10,
    },
    imageTrainer: {
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
