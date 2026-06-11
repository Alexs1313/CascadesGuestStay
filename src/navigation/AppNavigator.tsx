import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {AppProvider} from '../context/AppContext';
import {ClimateScreen} from '../screens/ClimateScreen';
import {LoaderScreen} from '../screens/LoaderScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {OrderConfirmedScreen} from '../screens/OrderConfirmedScreen';
import {OrderScreen} from '../screens/OrderScreen';
import {RoomDiningScreen} from '../screens/RoomDiningScreen';
import {MainTabs} from './MainTabs';
import type {StackParamList} from './types';

export type {MainTabParamList, StackParamList} from './types';

const SCREEN_OPTIONS = {
  headerShown: false,
  cardStyle: {backgroundColor: '#0C1824'},
} as const;

export type StackNavProp = StackNavigationProp<StackParamList>;

const Stack = createStackNavigator<StackParamList>();

function LoaderPath({navigation}: {navigation: StackNavProp}) {
  React.useEffect(() => {
    let isMounted = true;
    const bootstrap = async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 5000));
      if (!isMounted) return;
      navigation.reset({index: 0, routes: [{name: 'Onboarding'}]});
    };
    bootstrap();
    return () => {
      isMounted = false;
    };
  }, [navigation]);
  return <LoaderScreen />;
}

function OnboardingPath({navigation}: {navigation: StackNavProp}) {
  const handleComplete = () => {
    navigation.reset({index: 0, routes: [{name: 'Main'}]});
  };
  return <OnboardingScreen onComplete={handleComplete} />;
}

export function AppNavigator() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loader"
          screenOptions={SCREEN_OPTIONS}>
          <Stack.Screen name="Loader" component={LoaderPath} />
          <Stack.Screen name="Onboarding" component={OnboardingPath} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="RoomDining" component={RoomDiningScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen
            name="OrderConfirmed"
            component={OrderConfirmedScreen}
          />
          <Stack.Screen name="Climate" component={ClimateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
