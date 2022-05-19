import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Modal, Pressable } from 'react-native';

export default function CrmSignup({setShareVisible}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tap your name and your email to share your drawing on social networks !</Text>
                        <TextInput
                            style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                            }}
                            placeholder="Name"
                        />
                        <TextInput
                            style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                            }}
                            placeholder="Email"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonSend]}
                            onPress={() => setShareVisible(true)}
                        >
                            <Text style={styles.textStyle}>Send !</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Text>L'image ci-dessous montrera la capture d'ecran de l'utilisateur</Text>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Share it on social networks !</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
      marginTop:10
    },
    buttonSend: {
        marginTop:10,
        backgroundColor: "#2196F3"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});
