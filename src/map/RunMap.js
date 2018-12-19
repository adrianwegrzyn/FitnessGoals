import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from "react-native-maps";


export default class RunMap extends Component<> {

    render() {

        return (
            <View style={styles.container}>
                <MapView style={styles.mapBox}
                         initialRegion={{
                             latitude: 50.017847,
                             longitude: 20.997623,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 50.017847,
                            longitude: 20.997623
                        }}
                        title={'Xtreme'}
                        description={'Kosz 89,99 zł/mc'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 50.013651,
                            longitude:  21.022296
                        }}
                        title={'New Power Live'}
                        description={'Kosz 59,99 zł/mc'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 50.019338,
                            longitude: 21.015820,
                        }}
                        title={'Grafit'}
                        description={'Kosz 119.99 zł/mc'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 50.016949,
                            longitude: 20.982659,
                        }}
                        title={'Fitness Klub Forma'}
                        description={'Kosz 119,99 zł/mc'}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mapBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});
