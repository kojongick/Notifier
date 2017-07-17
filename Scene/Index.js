/**
 * Created by KoJong on 2017-07-15.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import {Router,Scene, Actions} from "react-native-router-flux";
import SelectBoard from './SelectBoard';
import prompt from 'react-native-prompt';


global.selectedContacts = null;   //random 30 quizlist
global.directSelectedContacts=null; //directselect quizlist
global.allContacts = null; //all contacts list

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rightButton: false
        }
    }

    render() {
        return (
            <Router navigationBarStyle={styles.navBar}
                    sceneStyle={styles.scene}
                    titleStyle={styles.title}
            >

                <Scene key="root">
                    <Scene
                        key="SelectBoard"
                        component={SelectBoard}
                        sceneStyle={{marginTop: 0}}
                        hideNavBar={true}
                        initial={true}
                    />
                </Scene>
            </Router>
        )
    }
}
const styles = StyleSheet.create({
    navBar:{
        backgroundColor : "#00a5f7",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    scene: {
        flex :1,
        marginTop : (Platform.OS === 'ios') ? 64 : 54
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color:'white',
    }
});

export default App;