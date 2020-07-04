import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginRegisterScreen from "./containers/LoginRegisterScreen";
import LoginScreen from "./containers/LoginScreen";
import RegisterScreen from "./containers/RegisterScreen";

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
        <Stack.Navigator>
            <Stack.Screen
                name="LoginRegister"
                component={LoginRegisterScreen}
                initialParams={{}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                initialParams={{}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                initialParams={{}}
            />
        </Stack.Navigator>
    );
};

export default App;
