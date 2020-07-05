import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";
import React, {Component} from "react";
import {ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import SplashScreen from "react-native-splash-screen";

interface LoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

export class LoginScreen extends Component<LoginScreenProps> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar barStyle="light-content" backgroundColor="rgba(31,178,204,1)" />
                <View style={styles.background}>
                    <ImageBackground
                        style={styles.rect}
                        imageStyle={styles.rect_imageStyle}
                        source={require("../../assets/images/Gradient_eztQVI9.png")}>
                        <View style={styles.form}>
                            <View style={styles.usernameColumn}>
                                <View style={styles.username}>
                                    <EvilIconsIcon
                                        name="envelope"
                                        style={styles.icon22}
                                    />
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor="rgba(255,255,255,1)"
                                        secureTextEntry={false}
                                        style={styles.usernameInput}
                                    />
                                </View>
                                <View style={styles.password}>
                                    <EvilIconsIcon name="lock" style={styles.icon2}/>
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,1)"
                                        secureTextEntry={false}
                                        style={styles.passwordInput}
                                    />
                                </View>
                            </View>
                            <View style={styles.usernameColumnFiller}/>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Register", {})}
                                style={styles.button}>
                                <Text style={styles.text2}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formFiller}/>
                        <View style={styles.footerTexts}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Register", {})}
                                style={styles.button2}>
                                <View style={styles.createAccountFiller}/>
                                <Text style={styles.createAccount}>Create Account</Text>
                            </TouchableOpacity>
                            <View style={styles.button2Filler}/>
                            <Text style={styles.needHelp}>Forgot Password?</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    background: {
        flex: 1
    },
    rect: {
        flex: 1
    },
    rect_imageStyle: {},
    form: {
        height: 230,
        marginTop: 107,
        marginLeft: 41,
        marginRight: 41
    },
    username: {
        height: 59,
        backgroundColor: "rgba(251,247,247,0.25)",
        borderRadius: 5,
        flexDirection: "row"
    },
    icon22: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginLeft: 20,
        alignSelf: "center"
    },
    usernameInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 11,
        marginLeft: 11,
        marginTop: 14
    },
    password: {
        height: 59,
        backgroundColor: "rgba(253,251,251,0.25)",
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 27
    },
    icon2: {
        color: "rgba(255,255,255,1)",
        fontSize: 33,
        marginLeft: 20,
        alignSelf: "center"
    },
    passwordInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 17,
        marginLeft: 8,
        marginTop: 14
    },
    usernameColumn: {},
    usernameColumnFiller: {
        flex: 1
    },
    button: {
        height: 59,
        backgroundColor: "rgba(31,178,204,1)",
        borderRadius: 5,
        justifyContent: "center"
    },
    text2: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
    },
    formFiller: {
        flex: 1
    },
    footerTexts: {
        height: 14,
        flexDirection: "row",
        marginBottom: 36,
        marginLeft: 37,
        marginRight: 36
    },
    button2: {
        width: 104,
        height: 14,
        alignSelf: "flex-end"
    },
    createAccountFiller: {
        flex: 1
    },
    createAccount: {
        color: "rgba(255,255,255,0.5)"
    },
    button2Filler: {
        flex: 1,
        flexDirection: "row"
    },
    needHelp: {
        color: "rgba(255,255,255,0.5)",
        alignSelf: "flex-end",
        marginRight: -1
    }
});
