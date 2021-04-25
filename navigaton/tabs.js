import React from 'react'
import { View, Image, TouchableOpcity } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { Home } from '../screens'
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigatior();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({focused}) => {
                    <Image
                        source={icons.cutlery}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

