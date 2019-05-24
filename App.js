import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Navigation} from 'react-native-navigation';
import deviceStorage from './src/services/deviceStorage.js';
import { Loading } from './src/components/common/';
import Auth from './src/auth/Auth';
import Home from "./src/main/Home";

export default class App extends Component<> {

    constructor() {
        super();
        this.state = {
            jwt: '',
            loading: true
        };
        this.newJWT = this.newJWT.bind(this);
        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.loadJWT = deviceStorage.loadJWT.bind(this);
        this.loadJWT();
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    newWindow = (window) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: window,
            }
        });
    };

    newJWT(jwt){
        this.setState({
            jwt: jwt
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading size={'large'} />
            );
        } else if (!this.state.jwt) {
            return (
                <Auth newJWT={this.newJWT} />
            );
        } else if (this.state.jwt) {
            return (
                <Home jwt={this.state.jwt} deleteJWT={this.deleteJWT} />
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
