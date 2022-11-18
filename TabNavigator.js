import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homescreen from "../screens/HomeScreen";
import Complaint from "../screens/Complaint";

const Tab = createBottomTabNavigator();

const BottomTabNavigator =() => {
  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Complaint') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Homescreen} options={{headerShown:false}}/>
            <Tab.Screen name="Complaint" component={Complaint} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator