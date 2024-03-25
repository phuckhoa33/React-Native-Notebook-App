import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {publicScreens} from '../../routes/public-screen';

const Tab = createBottomTabNavigator();


export const AppNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',

                    

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
            >
                {publicScreens?.map(screen => {
                    let Screen = screen.component;

                    if(screen.layout !== null) {
                        Screen = () => {
                            return (
                                <screen.layout>
                                    <screen.component/>
                                </screen.layout>
    
                            )
                        }

                    }

                    return <Tab.Screen name={screen.name} component={Screen}/>
                })}
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}