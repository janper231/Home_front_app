import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//routes file
import Routes from './routes';
const Stack = createStackNavigator();

const DefineRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false,
                }}
            >
                {Routes.map((routes, index) => (
                    <Stack.Screen
                        key={"route_" + index}
                        name={routes.name}
                        component={routes.component}
                        options={routes.options}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default DefineRoutes;