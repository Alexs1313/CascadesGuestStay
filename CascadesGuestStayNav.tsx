import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CascadesGuestStayAppProvider} from './CascadesGuestStay/CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CascadesGuestStayClimateScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayClimateScreen/CascadesGuestStayClimateScreen';
import {CascadesGuestStayHomeScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayHomeScreen/CascadesGuestStayHomeScreen';
import {CascadesGuestStayLoaderScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayLoaderScreen/CascadesGuestStayLoaderScreen';
import {CascadesGuestStayOnboardingScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOnboardingScreen/CascadesGuestStayOnboardingScreen';
import {CascadesGuestStayOrderConfirmedScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOrderConfirmedScreen/CascadesGuestStayOrderConfirmedScreen';
import {CascadesGuestStayOrderScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOrderScreen/CascadesGuestStayOrderScreen';
import {CascadesGuestStayRoomDiningScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayRoomDiningScreen/CascadesGuestStayRoomDiningScreen';
import {CascadesGuestStayMainTabs} from './CascadesGuestStayMainTabs';

const CASCADES_GUEST_STAY_LOADER_DURATION_MS = 5000;

const CASCADES_GUEST_STAY_SCREEN_OPTIONS = {
  headerShown: false,
  cardStyle: {backgroundColor: '#0C1824'},
} as const;

export type CascadesGuestStayRootStackParamList = {
  Loader: undefined;
  Onboarding: undefined;
  Main: undefined;
};

export type CascadesGuestStayHomeStackParamList = {
  Home: undefined;
  RoomDining: undefined;
  Order: undefined;
  OrderConfirmed: {total?: number} | undefined;
  Climate: undefined;
};

export type CascadesGuestStayRootNavProp =
  StackNavigationProp<CascadesGuestStayRootStackParamList>;

const RootStack = createStackNavigator<CascadesGuestStayRootStackParamList>();
const HomeStack = createStackNavigator<CascadesGuestStayHomeStackParamList>();

export function CascadesGuestStayHomeStack() {
  return (
    <HomeStack.Navigator screenOptions={CASCADES_GUEST_STAY_SCREEN_OPTIONS}>
      <HomeStack.Screen name="Home" component={CascadesGuestStayHomeScreen} />
      <HomeStack.Screen
        name="RoomDining"
        component={CascadesGuestStayRoomDiningScreen}
      />
      <HomeStack.Screen name="Order" component={CascadesGuestStayOrderScreen} />
      <HomeStack.Screen
        name="OrderConfirmed"
        component={CascadesGuestStayOrderConfirmedScreen}
      />
      <HomeStack.Screen
        name="Climate"
        component={CascadesGuestStayClimateScreen}
      />
    </HomeStack.Navigator>
  );
}

function CascadesGuestStayLoaderPath({
  navigation,
}: {
  navigation: CascadesGuestStayRootNavProp;
}) {
  useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      await new Promise<void>(resolve => {
        setTimeout(resolve, CASCADES_GUEST_STAY_LOADER_DURATION_MS);
      });

      if (!isMounted) {
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      });
    };

    bootstrap();

    return () => {
      isMounted = false;
    };
  }, [navigation]);

  return <CascadesGuestStayLoaderScreen />;
}

function CascadesGuestStayOnboardingPath({
  navigation,
}: {
  navigation: CascadesGuestStayRootNavProp;
}) {
  const handleComplete = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  };

  return <CascadesGuestStayOnboardingScreen onComplete={handleComplete} />;
}

export function CascadesGuestStayNav() {
  return (
    <CascadesGuestStayAppProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Loader"
          screenOptions={CASCADES_GUEST_STAY_SCREEN_OPTIONS}>
          <RootStack.Screen
            name="Loader"
            component={CascadesGuestStayLoaderPath}
          />
          <RootStack.Screen
            name="Onboarding"
            component={CascadesGuestStayOnboardingPath}
          />
          <RootStack.Screen name="Main" component={CascadesGuestStayMainTabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </CascadesGuestStayAppProvider>
  );
}
