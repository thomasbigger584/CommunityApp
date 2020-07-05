import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./containers/LoginScreen";
import RegisterScreen from "./containers/RegisterScreen";
import {toolbarHeaderStyle} from "./Styles";
import ForgotPasswordScreen from "./containers/ForgotPassword";

export type AppTabParamList = {
    Home: undefined;
    Settings: { userID?: string };
};

export type RootStackParamList = {
    Login: {}
    Register: {},
    ForgotPassword: {},
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <Stack.Navigator screenOptions={toolbarHeaderStyle}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false,}}
                initialParams={{}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerTitle: "Create Account"}}
                initialParams={{}}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{headerTitle: "Forgot Password"}}
                initialParams={{}}
            />
        </Stack.Navigator>
    );
};

export default App;
