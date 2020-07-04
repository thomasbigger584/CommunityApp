import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";

interface LoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

export class LoginScreen extends Component<LoginScreenProps> {
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login</Text>

            </View>
        );
    }
}


export default LoginScreen;

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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});