import React, {Component} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from "@react-navigation/stack";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

interface RegisterScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

export class RegisterScreen extends Component<RegisterScreenProps> {
    render() {
        return (
            <View style={styles.root}>
                <StatusBar barStyle="light-content" backgroundColor="rgba(31,178,204,1)"/>
                <View style={styles.background}>
                    <ImageBackground
                        style={styles.rect2}
                        imageStyle={styles.rect2_imageStyle}
                        source={require("../../assets/images/Gradient_Background.png")}
                    >
                        <View style={styles.progressBarColumn}>
                            <View style={styles.form1}>
                                <View style={styles.nameColumn}>
                                    <View style={styles.name}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon5}
                                        />
                                        <TextInput
                                            placeholder="Name"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.nameInput}
                                        />
                                    </View>
                                    <View style={styles.email}>
                                        <EvilIconsIcon
                                            name="envelope"
                                            style={styles.icon6}
                                        />
                                        <TextInput
                                            placeholder="Email"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.emailInput}
                                        />
                                    </View>
                                </View>
                                <View style={styles.nameColumnFiller}/>
                                <View style={styles.password}>
                                    <EvilIconsIcon name="lock" style={styles.icon7}/>
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,1)"
                                        secureTextEntry={true}
                                        style={styles.passwordInput}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.progressBarColumnFiller}/>
                        <View style={styles.buttonColumn}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Login", {})}
                                style={styles.button}
                            >
                                <Text style={styles.text2}>Continue</Text>
                            </TouchableOpacity>
                            <Text style={styles.text4}>Terms &amp; Conditions</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    background: {
        flex: 1
    },
    rect2: {
        flex: 1
    },
    rect2_imageStyle: {},
    progressBar: {
        height: 40,
        flexDirection: "row",
        marginLeft: 28,
        marginRight: 28
    },
    icon2: {
        color: "rgba(30,174,199,1)",
        fontSize: 40,
        width: 33,
        height: 40
    },
    rect4: {
        width: 50,
        height: 7,
        backgroundColor: "rgba(31,178,204,1)",
        borderRadius: 40,
        marginLeft: 8,
        marginTop: 16
    },
    icon3: {
        color: "#1fb2cc",
        fontSize: 35,
        width: 40,
        height: 36,
        marginLeft: 8,
        marginTop: 4
    },
    rect5: {
        width: 50,
        height: 7,
        backgroundColor: "rgba(230, 230, 230,1)",
        opacity: 0.75,
        borderRadius: 40,
        marginLeft: 3,
        marginTop: 16
    },
    icon2Row: {
        height: 40,
        flexDirection: "row"
    },
    icon2RowFiller: {
        flex: 1,
        flexDirection: "row"
    },
    icon4: {
        color: "rgba(255,255,255,1)",
        fontSize: 40,
        width: 34,
        height: 40,
        opacity: 0.75
    },
    text3: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        marginTop: 22,
        alignSelf: "center"
    },
    form1: {
        height: 230,
        marginTop: 42
    },
    name: {
        height: 59,
        backgroundColor: "rgba(255,255,255,0.25)",
        borderRadius: 5,
        flexDirection: "row"
    },
    icon5: {
        color: "rgba(255,255,255,1)",
        fontSize: 33,
        width: 33,
        height: 33,
        marginLeft: 16,
        alignSelf: "center"
    },
    nameInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        flex: 1,
        marginRight: 17,
        marginLeft: 12,
        marginTop: 14
    },
    email: {
        height: 59,
        backgroundColor: "rgba(255,255,255,0.25)",
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 27
    },
    icon6: {
        color: "rgba(255,255,255,1)",
        fontSize: 33,
        marginLeft: 15,
        alignSelf: "center"
    },
    emailInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 17,
        marginLeft: 13,
        marginTop: 14
    },
    nameColumn: {},
    nameColumnFiller: {
        flex: 1
    },
    password: {
        height: 59,
        backgroundColor: "rgba(255,255,255,0.25)",
        borderRadius: 5,
        flexDirection: "row"
    },
    icon7: {
        color: "rgba(255,255,255,1)",
        fontSize: 33,
        marginLeft: 15,
        marginTop: 13
    },
    passwordInput: {
        height: 35,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 17,
        marginLeft: 13,
        marginTop: 14
    },
    progressBarColumn: {
        marginLeft: 41,
        marginRight: 41
    },
    progressBarColumnFiller: {
        flex: 1
    },
    button: {
        height: 55,
        backgroundColor: "rgba(247,247,247,0)",
        borderRadius: 5,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        justifyContent: "center",
        marginBottom: 57
    },
    text2: {
        width: 66,
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
    },
    text4: {
        color: "rgba(255,255,255,0.5)",
        alignSelf: "center"
    },
    buttonColumn: {
        marginBottom: 31,
        marginLeft: 41,
        marginRight: 41
    }
});
