import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";
import {Colors} from "../Styles";
import Ripple from 'react-native-material-ripple';

interface AppButtonProps {
    onPress: any,
    title: any
}

export class RippledAppButton extends Component<AppButtonProps> {
    render() {
        return (
            <Ripple style={styles.appButtonContainer}
                    onPress={this.props.onPress}
                    rippleColor={Colors.colorWhite}
                    rippleSize={550}>
                <Text style={styles.appButtonText}>{this.props.title}</Text>
            </Ripple>
        );
    }
}

const styles = StyleSheet.create({
    appButtonContainer: {
        height: 70,
        marginTop: 30,
        borderColor: Colors.colorWhite,
        borderWidth: 1,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    appButtonText: {
        fontSize: 24,
        color: Colors.colorWhite,
    }
});
