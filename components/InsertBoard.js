/**
 * Created by KoJong on 2017-07-18.
 */
import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class InsertBoard extends Component {
    render() {
        return (
            <Modal
                visible = {this.props.visible}
                animationType="slide"
                transparent
                onRequestClose={() => {}} >
                <TextInput
                    style = {styles.inputBox}
                    onChangeText={(changedText) => alert(changedText)} />
            </Modal>
        )
    }
}
