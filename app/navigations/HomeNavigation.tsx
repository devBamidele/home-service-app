import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home_screen/HomeScreen';
import BusinessListByCategoryScreen from '../screens/business_list_by_category_screen/BusinessListByCategoryScreen';

const Stack = createStackNavigator();

export default function TabNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Base'
            screenOptions={{
                headerShown: false,
            }}

        >
            <Stack.Screen name="Base" component={HomeScreen} />
            <Stack.Screen name="Business-list" component={BusinessListByCategoryScreen} />
        </Stack.Navigator>
    );
}