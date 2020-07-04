import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Colors} from "../Styles";

interface AppButtonProps {
    onPress: any,
    title: any
}

export class AppButton extends Component<AppButtonProps> {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    appButtonContainer: {
        height: 55,
        borderColor: Colors.colorWhite,
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 30,
    },
    appButtonText: {
        fontSize: 24,
        color: Colors.colorWhite,
        justifyContent: "center",
        alignSelf: "center",
    }
});
