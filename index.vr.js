import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('taiwan.jpg')}/>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'stretch'
                    }}>
                        <Image
                            source={require('./static_assets/diapo1.jpg')}
                            style={{
                                width: 12,
                                height: 7,
                                layoutOrigin: [0.5, 0.5],
                                transform: [ {translate: [0, 4, -11]}]
                            }}
                        />
                        <Image
                            source={require('./static_assets/diapo2.jpg')}
                            style={{
                                width: 12,
                                height: 7,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{rotateY: -90}, {translate: [0, 4, 1]}]
                            }}
                        />
                        <Image
                            source={require('./static_assets/diapo3.jpg')}
                            style={{
                                width: 12,
                                height: 7,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{rotateY: 180}, {translate: [24, 4, -11]}]
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
