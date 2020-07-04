import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginRegisterScreen from "./containers/LoginRegisterScreen";
import LoginScreen from "./containers/LoginScreen";
import RegisterScreen from "./containers/RegisterScreen";
import {headerBackButtonOnly, toolbarHeaderStyle} from "./Styles";

export type AppTabParamList = {
    Home: undefined;
    Settings: { userID?: string };
};

export type RootStackParamList = {
    LoginRegister: {},
    Login: {}
    Register: {}
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <Stack.Navigator screenOptions={toolbarHeaderStyle}>
            <Stack.Screen
                name="LoginRegister"
                component={LoginRegisterScreen}
                options={{title: "Login / Register", headerShown: false, }}
                initialParams={{}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{...headerBackButtonOnly, cardShadowEnabled: false}}
                initialParams={{}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{...headerBackButtonOnly}}
                initialParams={{}}
            />
        </Stack.Navigator>
    );
};

export default App;
