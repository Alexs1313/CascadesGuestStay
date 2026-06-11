import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CascadesGuestStayTabBar} from './CascadesGuestStayComponents/CascadesGuestStayNav/CascadesGuestStayTabBar/CascadesGuestStayTabBar';
import {CascadesGuestStayExploreScreen} from './CascadesGuestStayScreens/CascadesGuestStayExploreScreen/CascadesGuestStayExploreScreen';
import {CascadesGuestStayHomeScreen} from './CascadesGuestStayScreens/CascadesGuestStayHomeScreen/CascadesGuestStayHomeScreen';
import {CascadesGuestStayMapScreen} from './CascadesGuestStayScreens/CascadesGuestStayMapScreen/CascadesGuestStayMapScreen';
import {CascadesGuestStayRequestsScreen} from './CascadesGuestStayScreens/CascadesGuestStayRequestsScreen/CascadesGuestStayRequestsScreen';
import {CascadesGuestStaySavedScreen} from './CascadesGuestStayScreens/CascadesGuestStaySavedScreen/CascadesGuestStaySavedScreen';
import type {CascadesGuestStayMainTabParamList} from './CascadesGuestStayNavTypes';

const Tab = createBottomTabNavigator<CascadesGuestStayMainTabParamList>();

function cascadesGuestStayRenderTabBar(
  props: React.ComponentProps<typeof CascadesGuestStayTabBar>,
) {
  return <CascadesGuestStayTabBar {...props} />;
}

export function CascadesGuestStayMainTabs() {
  return (
    <Tab.Navigator
      tabBar={cascadesGuestStayRenderTabBar}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={CascadesGuestStayHomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="RequestsTab"
        component={CascadesGuestStayRequestsScreen}
      />
      <Tab.Screen
        name="ExploreTab"
        component={CascadesGuestStayExploreScreen}
      />
      <Tab.Screen name="SavedTab" component={CascadesGuestStaySavedScreen} />
      <Tab.Screen name="MapTab" component={CascadesGuestStayMapScreen} />
    </Tab.Navigator>
  );
}
