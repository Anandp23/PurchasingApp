import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";

export default function Signup({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground></ImageBackground>
            <Image></Image>
            <Text style={{ color: '#5b9cd9', fontWeight: 'bold', fontSize: 28 }}>SIGNUP</Text>

            <TextInput style={styles.inputBox}
            placeholder="Enter your name"></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Enter your age"></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Your sex"></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Mobile Number"></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Email Id"></TextInput>
            <TextInput style={styles.inputBox}
            placeholder="Password"></TextInput>



            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Signup</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black' }}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ color: '#5b9cd9', fontWeight: 'bold', marginLeft: 5 }}>Login</Text>
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
        width: '70%',
        borderWidth: 1,
        margin: 10,
        borderColor: '#5b9cd9',
        padding: 10,
        borderRadius:10
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