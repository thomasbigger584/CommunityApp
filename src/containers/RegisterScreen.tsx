import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";

interface RegisterScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

export class RegisterScreen extends Component<RegisterScreenProps> {
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Register</Text>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
