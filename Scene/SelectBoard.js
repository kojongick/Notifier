/**
 * Created by KoJong on 2017-07-15.
 */
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'

import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
} from 'react-native';

class SelectBoard extends Component {

    constructor(props){
        super(props)
        this.state={
            isModalVisible : false
        }
    }
    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })

    render() {
        return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity onPress={this._showModal}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible}>
                <View>
                    <TextInput
                        style ={{backgroundColor :"#fff"}} />
                    <TextInput
                    style ={{backgroundColor :"#fff"}} />
                </View>
            </Modal>

            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{ height: 56,elevation:8, position : 'absolute', bottom : 0, left: 0, right: 0 }}
                onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
            >
                <Tab
                    barBackgroundColor="#37474F"
                    label="게시판"
                    icon={<Icon size={24} color="white" name="tv" />}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="최근 알림"
                    icon={<Icon size={24} color="white" name="music-note" />}
                />
            </BottomNavigation>
        </View>
        )
    }

}
export default SelectBoard;