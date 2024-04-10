import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

import BookingScreen from '../screens/booking_screen/BookingScreen';
import ProfileScreen from '../screens/profile_screen/ProfileScreen';
import Colors from '../utils/Colors';
import AppText from '../components/appText';
import TabNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = getTabBarIconName(route.name, focused);
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarLabel: ({ color }) => {
              return (
                <AppText style={{ marginTop: -6, marginBottom: 2, color: color }}>
                  {route.name}
                </AppText>
              );
            },
            tabBarActiveTintColor: Colors.primary,
          })}

          
      >
        <Tab.Screen name="Home" component={TabNavigation} />
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;

// Function to determine the icon name based on route name
const getTabBarIconName = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Booking':
      return focused ? 'bookmark' : 'bookmark-outline';
    case 'Profile':
      return focused ? 'person-circle' : 'person-circle-outline';
    default:
      return 'alert-outline';
  }
};