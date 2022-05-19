import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Modal, Pressable } from 'react-native';

export default function ShareOnSocialNetwork() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Text>Select social network</Text>
            <Text>Todo implémenter Native Share pour partage sur instagram, twitter, facebook ...</Text>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }
});
