

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import ReviewScreen from './DrawerScreens/reviewScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Statistics', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ECC', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

const reviewScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ReviewScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ECC', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          title: 'Reviews Goo', //Set Header Title
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{
          drawerLabel: 'Statistics',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="bar-chart"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="reviewScreenStack"
        options={{
          drawerLabel: 'Reviews Goo',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="paper-plane"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
        component={reviewScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
