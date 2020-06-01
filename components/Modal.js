import React from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import styles from '../assets/css/modal';
import { Feather } from 'react-native-vector-icons';

const ModalTemplate = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible || false}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3", }}
                            onPress={() => props.onClose()}
                        >
                            <Feather name={"x"} size={9} />
                        </TouchableHighlight>
                        {props.children}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalTemplate;
