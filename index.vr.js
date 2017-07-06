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
                <Pano source={asset('test.jpg')}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    width: 4,
                    transform: [{translate: [0, 0, 0]}],
                }}>

                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'stretch'
                        }}>
                        <Text
                            style={{
                                backgroundColor: '#C62',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [{translate: [0, 0, -3]}],
                            }}>
                            Lundi
                        </Text>
                        <Image
                            source={require('./static_assets/bidoof.jpg')}
                            style={{
                                height: 4,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{translate: [0, 4, -3]}],
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'stretch'
                        }}>
                        <Text
                            style={{
                                backgroundColor: '#4C2',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [ {rotateY: -90}, {translate : [0, 0, -1]} ],
                            }}>
                            Mardi
                        </Text>
                        <Image
                            source={require('./static_assets/bidoof.jpg')}
                            style={{
                                height: 4,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{rotateY: -90}, {translate: [0, 4, -3]}],
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'stretch'
                        }}>
                        <Text
                            style={{
                                backgroundColor: '#2CC',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [ {rotateY: 180}, {translate : [4, 0, -3]} ],
                            }}>
                            Mercredi
                        </Text>
                        <Image
                            source={require('./static_assets/bidoof.jpg')}
                            style={{
                                height: 4,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{rotateY: 180}, {translate: [4, 4, -3]}],
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'stretch'
                        }}>
                        <Text
                            style={{
                                backgroundColor: '#C2C',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [ {rotateY: 90}, {translate : [0, 0, -10]} ]
                            }}>
                            Jeudi
                        </Text>
                        <Image
                            source={require('./static_assets/bidoof.jpg')}
                            style={{
                                height: 4,
                                layoutOrigin: [0.5, 0.5],
                                transform: [{rotateY: 90}, {translate: [0, 4, -10]}],
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
