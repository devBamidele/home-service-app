import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../screens/booking_screen/BookingScreen';
import BusinessDetailsScreen from '../screens/business_details_screen/BusinessDetailsScreen';


const Stack = createStackNavigator();

export default function BookingNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Base'

            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Base" component={BookingScreen} />
            <Stack.Screen name="Business-Details" component={BusinessDetailsScreen} />

        </Stack.Navigator>
    )
}