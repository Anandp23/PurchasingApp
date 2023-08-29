import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground></ImageBackground>
            <Image></Image>
            <Text style={{ color: '#5b9cd9', fontWeight: 'bold', fontSize: 28 }}>LOGIN</Text>
            <TextInput style={styles.inputBox}
            placeholder="Enter email adress"
            ></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Enter password"
            ></TextInput>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate('MyBottomTab')}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black' }}>New user?</Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Signup')}
                >
                    <Text style={{ color: '#5b9cd9', fontWeight: 'bold', marginLeft: 5 }}>Signup </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputBox: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        borderColor: '#5b9cd9',
        padding: 10
    },

    buttonStyle: {
        width: '50%',
        height: 40,
        backgroundColor: '#5b9cd9',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})