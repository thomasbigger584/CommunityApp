import React, {Component} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../App';
import SplashScreen from 'react-native-splash-screen'
import {StackNavigationProp} from "@react-navigation/stack";
import AppLinearGradientBackground from "../components/AppLinearGradientBackground";

interface LoginRegisterScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'LoginRegister'>;
}

export class LoginRegisterScreen extends Component<LoginRegisterScreenProps> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <AppLinearGradientBackground>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>

                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login', {})}
                />

                <Button
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register', {})}
                />
            </AppLinearGradientBackground>
        );
    }
}

export default LoginRegisterScreen;

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
