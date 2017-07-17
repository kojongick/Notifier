/**
 * Created by KoJong on 2017-07-15.
 */
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

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
            Url : "",
            BoardName : "",
            message: "",
        }
    }
    render() {
        return (
            <View>

                <NavBar>
                    <NavTitle>
                        {"App"}
                    </NavTitle>

                    <NavGroup>
                        <NavButton onPress={()=>this.InputURL}>
                            <NavButtonText>
                                {"게시판추가"}
                            </NavButtonText>
                        </NavButton>
                    </NavGroup>
                </NavBar>


                    <BottomNavigation
                        labelColor="white"
                        rippleColor="white"
                        style={{ height: 56, bottom : 0,  left: 0, right: 0 }}
                        onTabChange={(newTabIndex) => alert(`position ${newTabIndex}`)}
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
    InputURL(){

    }
}
export default SelectBoard;