import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../App';
import SplashScreen from 'react-native-splash-screen'
import {StackNavigationProp} from "@react-navigation/stack";
import AppLinearGradientBackground from "../components/AppLinearGradientBackground";
import {AppButton} from "../components/AppButton";

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
                <View style={styles.container}>
                    <AppButton title="Login" onPress={() => {
                        this.props.navigation.navigate('Login', {})
                    }}/>
                    <AppButton title="Register" onPress={() => {
                        this.props.navigation.navigate('Register', {})
                    }}/>
                </View>
            </AppLinearGradientBackground>
        );
    }
}
export default LoginRegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column-reverse",
        marginLeft: 50,
        marginRight: 50,
        justifyContent: "center"
    },
});
