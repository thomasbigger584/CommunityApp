import Strings from '../constants/strings';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import SplashScreen from 'react-native-splash-screen'
import {StackNavigationProp} from "@react-navigation/stack";

interface LoginRegisterScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'LoginRegister'>;
}

export class LoginRegisterScreen extends Component<LoginRegisterScreenProps> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{Strings.hello}. Login or Register</Text>

                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login', {})}
                />

                <Button
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register', {})}
                />
            </View>
        );
    }
}

export default LoginRegisterScreen;

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
