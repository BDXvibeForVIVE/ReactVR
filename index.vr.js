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
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}>
                    <Image
                        source={require('./static_assets/htc_vive.png')}
                        style={{
                            width: 5,
                            height: 4,
                            layoutOrigin: [0.5, 0.5],
                            transform: [{translate: [0, 4, -11]}]
                        }}
                    />

                    <Image
                        source={require('./static_assets/Jour1.jpg')}
                        style={{
                            width: 5,
                            height: 4,
                            layoutOrigin: [0.5, 0.5],
                            transform: [{rotateY: -90}, {translate: [0, 8, -11]}]
                        }}
                    />

                    <Image
                        source={require('./static_assets/Jour2.jpg')}
                        style={{
                            width: 5,
                            height: 4,
                            layoutOrigin: [0.5, 0.5],
                            transform: [{rotateY: 180},{translate: [0, 12, -11]}]
                        }}
                    />

                    <Image
                        source={require('./static_assets/htc_vive.png')}
                        style={{
                            width: 5,
                            height: 4,
                            layoutOrigin: [0.5, 0.5],
                            transform: [{rotateY: 90}, {translate: [0, 16, -11]}]
                        }}
                    />

                    <View style={{
                        width: 4,
                        transform: [{translate : [0, 16, -6]} ],
                    }}>
                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#C52',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Lundi
                        </Text>

                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#C52',
                                fontSize: 0.4,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Début du Projet
                        </Text>

                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#C52',
                                fontSize: 0.3,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            R&D Caméra 360 autour de la VR
                        </Text>
                    </View>

                    <View style={{
                        width: 4,
                        transform: [{rotateY: -90}, {translate : [2, 17, -7]} ],
                        layoutOrigin: [0.5, 0.5]
                    }}>
                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#4C2',
                                fontSize: 0.8,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                //transform: [{rotateY: -90}, {translate : [0, 17, -4]} ]
                            }}>
                            Mardi
                        </Text>

                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#4C2',
                                fontSize: 0.4,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Développement Jeu Unity
                        </Text>

                        <Text
                            style={{
                                width: 4,
                                backgroundColor: '#4C2',
                                fontSize: 0.3,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Arrêt R&D Caméra 360
                        </Text>
                    </View>

                    <View style={{
                        width: 4,
                        transform: [{rotateY: 180},{translate : [2, 19.5, -6]} ],
                        layoutOrigin: [0.5, 0.5]
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
                            }}>
                            Mercredi
                        </Text>

                        <Text
                            style={{
                                backgroundColor: '#2CC',
                                fontSize: 0.4,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Définition Thème Jeu
                        </Text>

                        <Text
                            style={{
                                backgroundColor: '#2CC',
                                fontSize: 0.3,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Développement ReactVR
                        </Text>
                    </View>

                    <View style={{
                        width: 4,
                        transform: [{rotateY: 90},{translate : [2, 21.5, -6]} ],
                        layoutOrigin: [0.5, 0.5]
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
                            }}>
                            Jeudi
                        </Text>

                        <Text
                            style={{
                                backgroundColor: '#C2C',
                                fontSize: 0.4,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>
                            Finition Jeu Unity
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
