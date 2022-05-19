import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Modal, Pressable } from 'react-native';
import CrmSignup from "./CrmSignup";
import ShareOnSocialNetwork from "./ShareOnSocialNetwork";

export default function App() {
    const [shareVisible, setShareVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            { !shareVisible && 
                <CrmSignup setShareVisible={setShareVisible}></CrmSignup>
            }
            { shareVisible && 
                <ShareOnSocialNetwork />
            }
        </View>
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
