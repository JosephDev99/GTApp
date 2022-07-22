import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import CustomDrawerContent from './layouts/CustomDrawerContent';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import HistoryScreen from './screens/History';
import TripDescriptionScreen from './screens/TripDescription';
import AddressScreen from './screens/Address';
import SettingsScreen from './screens/Settings';
import SupportScreen from './screens/Support';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName={localStorage.getItem('authToken') ? "Home" : "SignIn"}
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          key="Home"
          name="Home"
          options={({ navigation }) => ({
            drawerIcon: ({ focused }) => <AntDesign
              name="home"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
            headerTitle: '',
            headerLeft: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            )
          })}
          component={HomeScreen}
        />
        <Drawer.Screen
          key="Profile"
          name="Profile"
          options={{
            drawerIcon: ({ focused }) => <AntDesign
              name="profile"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
          }}
          component={ProfileScreen}
        />
        <Drawer.Screen
          key="History"
          name="History"
          options={({ navigation }) => ({
            drawerIcon: ({ focused }) => <FontAwesome5
              name="history"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            )
          })}
          component={HistoryScreen}
        />
        <Drawer.Screen
          key="TripDescription"
          name="TripDescription"
          options={({ navigation }) => ({
            drawerItemStyle: {
              display: 'none',
            },
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <AntDesign name="back" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            ),
            headerTitle: 'Trip Description',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            )
          })}
          component={TripDescriptionScreen}
        />
        <Drawer.Screen
          key="My Addresses"
          name="My Addresses"
          options={{
            drawerIcon: ({ focused }) => <Entypo
              name="address"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
          }}
          component={AddressScreen}
        />
        <Drawer.Screen
          key="Settings"
          name="Settings"
          options={{
            drawerIcon: ({ focused }) => <Feather
              name="settings"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
          }}
          component={SettingsScreen}
        />
        <Drawer.Screen
          key="Online Support"
          name="Online Support"
          options={{
            drawerIcon: ({ focused }) => <FontAwesome
              name="support"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />,
            headerShown: true,
          }}
          component={SupportScreen}
        />
        <Drawer.Screen
          key="SignIn"
          name="SignIn"
          options={({ navigation }) => ({
            drawerItemStyle: {
              display: 'none',
            },
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <AntDesign name="back" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            ),
            headerTitle: 'Sign In',
            headerTitleAlign: 'center',
            headerRight: false,
          })}
          component={SignInScreen}
        />
        <Drawer.Screen
          key="SignUp"
          name="SignUp"
          options={({ navigation }) => ({
            drawerItemStyle: {
              display: 'none',
            },
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <AntDesign name="back" size={30} color="black" style={styles.menuIcon} />
              </TouchableOpacity>
            ),
            headerTitle: 'Sign Up',
            headerTitleAlign: 'center',
            headerRight: false,
          })}
          component={SignUpScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    marginHorizontal: 10,
  },
});
