import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator"
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;