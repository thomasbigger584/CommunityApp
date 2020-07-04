import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";
import AppLinearGradientBackground from "../components/AppLinearGradientBackground";

interface LoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

export class LoginScreen extends Component<LoginScreenProps> {
    componentDidMount() {

    }

    render() {
        return (
            <AppLinearGradientBackground>
                <Text style={styles.welcome}>Login</Text>
            </AppLinearGradientBackground>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
