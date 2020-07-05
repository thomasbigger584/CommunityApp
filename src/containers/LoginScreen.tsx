import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";
import AppLinearGradientBackground from "../components/AppLinearGradientBackground";
import {TextField} from "react-native-material-textfield";
import {Colors} from "../Styles";
import {RippledAppButton} from "../components/RippledAppButton";

interface LoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

type LoginState = {
    email?: string;
    password?: string;
    emailError?: string;
    passwordError?: string;
}

export class LoginScreen extends Component<LoginScreenProps> {
    state: LoginState = {}

    render() {
        return (
            <AppLinearGradientBackground>
                <View style={styles.container}>
                    <View style={styles.groupedTextFieldContainer}>
                        <View style={styles.textFieldContainer}>
                            <TextField
                                label='Email Address'
                                keyboardType='email-address'
                                autoCompleteType='email'
                                blurOnSubmit={true}
                                clearButtonMode={'unless-editing'}
                                onChangeText={(text => {
                                    this.setState({
                                        email: text
                                    })
                                })}
                                style={styles.textField}
                                textColor={Colors.colorPrimaryDark}
                                fontSize={16}
                                labelFontSize={15}
                                lineWidth={0.7}
                                error={this.state.emailError ? this.state.emailError : ""}
                                tintColor={Colors.colorWhite}
                                baseColor={Colors.colorWhite}
                                errorColor={Colors.colorPrimaryDark}
                            />
                        </View>
                        <View style={styles.textFieldContainer}>
                            <TextField
                                label='Password'
                                keyboardType='default'
                                autoCompleteType='email'
                                blurOnSubmit={true}
                                clearButtonMode={'unless-editing'}
                                secureTextEntry={true}
                                onChangeText={(text => {
                                    this.setState({
                                        password: text
                                    })
                                })}
                                style={styles.textField}
                                textColor={Colors.colorPrimaryDark}
                                fontSize={16}
                                labelFontSize={15}
                                lineWidth={0.7}
                                error={this.state.passwordError ? this.state.passwordError : ""}
                                tintColor={Colors.colorWhite}
                                baseColor={Colors.colorWhite}
                                errorColor={Colors.colorPrimaryDark}
                            />
                        </View>

                        <RippledAppButton title="Login" onPress={() => {

                            //todo complete
                            this.setState({
                                emailError: "Invalid email",
                                passwordError: "Invalid password"
                            });
                        }}/>
                    </View>

                </View>
            </AppLinearGradientBackground>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 40,
        marginVertical: 60
    },
    textFieldContainer: {
        height: 80,
        borderColor: Colors.colorWhite,
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        marginBottom: 10,
    },
    textField: {},
    groupedTextFieldContainer: {
        flex: 1,
        justifyContent: "flex-start"
    },
    groupedButtonsContainer: {
        flex: 1,
    },
});
