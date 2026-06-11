import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/nav/TabBar';
import {ExploreScreen} from '../screens/ExploreScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {MapScreen} from '../screens/MapScreen';
import {RequestsScreen} from '../screens/RequestsScreen';
import {SavedScreen} from '../screens/SavedScreen';
import type {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function renderTabBar(props: React.ComponentProps<typeof TabBar>) {
  return <TabBar {...props} />;
}

export function MainTabs() {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{title: 'Home'}} />
      <Tab.Screen name="RequestsTab" component={RequestsScreen} />
      <Tab.Screen name="ExploreTab" component={ExploreScreen} />
      <Tab.Screen name="SavedTab" component={SavedScreen} />
      <Tab.Screen name="MapTab" component={MapScreen} />
    </Tab.Navigator>
  );
}
