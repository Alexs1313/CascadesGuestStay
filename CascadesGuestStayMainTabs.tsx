import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CascadesGuestStayTabBar} from './CascadesGuestStay/CascadesGuestStayComponents/CascadesGuestStayNav/CascadesGuestStayTabBar/CascadesGuestStayTabBar';
import {CascadesGuestStayExploreScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayExploreScreen/CascadesGuestStayExploreScreen';
import {CascadesGuestStayMapScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayMapScreen/CascadesGuestStayMapScreen';
import {CascadesGuestStayRequestsScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayRequestsScreen/CascadesGuestStayRequestsScreen';
import {CascadesGuestStaySavedScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStaySavedScreen/CascadesGuestStaySavedScreen';
import {CascadesGuestStayHomeStack} from './CascadesGuestStayNav';

export type CascadesGuestStayMainTabParamList = {
  HomeTab: undefined;
  RequestsTab: undefined;
  ExploreTab: undefined;
  SavedTab: undefined;
  MapTab: undefined;
};

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
        component={CascadesGuestStayHomeStack}
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
