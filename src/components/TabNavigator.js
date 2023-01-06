import * as React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// Icons
import { Ionicons } from '@expo/vector-icons';
// import Clipboard from '../images/TabIeIcons/Clipboard.png'
// import ClipboardNoCol from '../images/TabIeIcons/ClipboardNoCol.png'

// Screens
import ListToDo from "../screens/LoginListTodo";
import AddCategory from '../screens/AddCategory';
import AddList from '../screens/AddList';

const Tab = createBottomTabNavigator()

export const TabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name == "ListToDo") {
          iconName = focused ? "ios-clipboard" : "ios-clipboard-outline"
        } else if (route.name == "AddCategory") {
          iconName = focused ? "file-tray-full" : "file-tray-full-outline"
        } else if (route.name == "AddList") {
          iconName = focused ? "md-list-circle" : "md-list-circle-outline"
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#FF5555'
    })}>
      <Tab.Screen name="ListToDo" component={ListToDo} />
      <Tab.Screen name="AddCategory" component={AddCategory} />
      <Tab.Screen name="AddList" component={AddList} />

    </Tab.Navigator>
  )
}