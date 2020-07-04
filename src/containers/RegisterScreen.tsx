import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";
import AppLinearGradientBackground from "../components/AppLinearGradientBackground";

interface RegisterScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

export class RegisterScreen extends Component<RegisterScreenProps> {
    componentDidMount() {

    }

    render() {
        return (
            <AppLinearGradientBackground>
                <Text style={styles.welcome}>Register</Text>
            </AppLinearGradientBackground>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
