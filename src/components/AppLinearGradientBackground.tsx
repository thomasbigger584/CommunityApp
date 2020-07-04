import React from "react";
import {Colors} from "../Styles";
import LinearGradient from "react-native-linear-gradient";
import {StyleSheet} from "react-native";

export default class AppLinearGradientBackground extends React.Component {
    render() {
        return <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                               colors={[Colors.colorPrimary, Colors.colorPrimaryLight, Colors.colorPrimary,]}
                               style={styles.linearGradient}>
            {this.props.children}
        </LinearGradient>
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
});
