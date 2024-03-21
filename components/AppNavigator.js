import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as screens from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppNavigator = ({navRef}) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name='Home' component={screens.Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}