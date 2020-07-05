import React, {Component} from "react";
import {ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../App";
import SplashScreen from "react-native-splash-screen";


interface ForgotPasswordScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'ForgotPassword'>;
}

export class ForgotPasswordScreen extends Component<ForgotPasswordScreenProps> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar barStyle="light-content" backgroundColor="rgba(31,178,204,1)"/>
                <View style={styles.background}>
                    <ImageBackground
                        style={styles.rect}
                        imageStyle={styles.rect_imageStyle}
                        source={require("../../assets/images/Gradient_Background.png")}>
                        <View style={styles.text3Column}>
                            <View style={styles.username}>
                                <Icon name="envelope" style={styles.icon22}/>
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="rgba(255,255,255,1)"
                                    secureTextEntry={false}
                                    keyboardType="email-address"
                                    style={styles.emailInput}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonColumn}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Login", {})}
                                style={styles.button}>
                                <Text style={styles.text2}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

export default ForgotPasswordScreen;

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
    text3: {
        color: "rgba(255,255,255,1)",
        fontSize: 12,
        alignSelf: "center"
    },
    username: {
        height: 59,
        backgroundColor: "rgba(251,247,247,0.25)",
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 37,
        marginLeft: 1,
        marginRight: 1
    },
    icon22: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginLeft: 20,
        alignSelf: "center"
    },
    emailInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 11,
        marginLeft: 11,
        marginTop: 14
    },
    text3Column: {
        marginTop:40,
        marginLeft: 40,
        marginRight: 40
    },
    text3ColumnFiller: {
        flex: 1
    },
    button: {
        height: 59,
        backgroundColor: "rgba(31,178,204,1)",
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 415,
        marginLeft: 4,
        marginRight: 5
    },
    text2: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
    },
    footerTexts: {
        height: 14,
        flexDirection: "row"
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
    },
    buttonColumn: {
        marginTop: 30,
        marginLeft: 37,
        marginRight: 36
    }
});
