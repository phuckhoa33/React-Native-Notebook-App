import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as screens from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export const AppNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
        
                    let iconName;
        
        
        
        
                    if (route.name === 'Today') {
        
                        iconName = focused ? 'calendar' : 'calendar-outline';
        
                    } else if (route.name === 'Browse') {
        
                        iconName = focused ? 'settings' : 'settings-outline';
        
                    }
                    else if (route.name === 'Search'){
                        iconName = focused ? 'search' : 'search-outline'
                    }
                    else {
                        iconName = focused ? 'home' : 'home-outline'
                    }
        
                    return <Ionicons name={iconName} size={size} color={color} />;
        
                },
        
                })}
        
                tabBarOptions={{
        
                    activeTintColor: 'tomato',
            
                    inactiveTintColor: 'gray',
        
                }}
            >

                <Tab.Screen name='Today' component={screens.Home}/>
                <Tab.Screen name='Inbox' component={screens.Inbox}/>
                <Tab.Screen name='Search' component={screens.Search}/>
                <Tab.Screen name='Browse' component={screens.Browse}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}