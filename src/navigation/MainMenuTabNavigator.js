import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import MainMenu from '../screens/MainMenu';
import SimpleSum from '../screens/SimpleSum';
import SearchThings from '../screens/SearchThings';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'SimpleSum';

export default function MainMenuTabNavigator({ navigation, route }) {
 

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="SimpleSum"
        component={SimpleSum}
        options={{
          title: 'Calculator',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
        }}
      />
      <BottomTab.Screen
        name="SearchThings"
        component={SearchThings}
        options={{
          title: 'Search Place',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contacts" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

