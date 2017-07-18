/**
 * Created by KoJong on 2017-07-15.
 */

import {Router,Scene, Actions} from "react-native-router-flux";
import SelectBoard from './SelectBoard';
import Modal from 'react-native-modal'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rightButton: false,
            isModalVisible : false
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
                        renderRightButton = { ()=>this.modalTest("게시판 추가")}
                        initial={true}
                    />
                </Scene>
            </Router>
        )
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    Insert(text){
        return(
            <TouchableOpacity
                onPress={() => this.modalTest(true)}
                style={{justifyContent:'center', width:100,bottom:11,height:40}}>
                <Text style={{color:'white', fontSize:16, textAlign:'right'}}>{text}</Text>
            </TouchableOpacity>
        )
    }

    modalTest(text){
        console.log("왜안되니", text)
        return(
            <View>
                <TouchableOpacity
                    onPress = {() => this._showModal()}>
                    <Text style={{color:'white', fontSize:16, textAlign:'right'}}>{text}</Text>
                </TouchableOpacity>

                <Modal isVisible={this.state.isModalVisible}>
                    <View style ={{}}>
                        <Text style={{backgroundColor : "#fff", fontSize :30, }}>게시판 추가</Text>
                        <View style ={{flexDirection:"row" }}>
                            <Text style={{backgroundColor : "#fff", fontSize :16}}>게시판 URL</Text>
                            <TextInput
                                style ={{backgroundColor :"#fff", width:300}} />
                        </View>
                        <View style ={{flexDirection:"row"}}>
                            <Text style={{backgroundColor : "#fff", fontSize :16}}>게시판 이름</Text>
                            <TextInput
                                style ={{backgroundColor :"#fff", width:300}} />
                        </View>
                    </View>
                </Modal>
            </View>
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