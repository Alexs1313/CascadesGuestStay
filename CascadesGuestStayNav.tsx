import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CascadesGuestStayAppProvider} from './CascadesGuestStay/CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CascadesGuestStayClimateScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayClimateScreen/CascadesGuestStayClimateScreen';
import {CascadesGuestStayLoaderScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayLoaderScreen/CascadesGuestStayLoaderScreen';
import {CascadesGuestStayOnboardingScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOnboardingScreen/CascadesGuestStayOnboardingScreen';
import {CascadesGuestStayOrderConfirmedScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOrderConfirmedScreen/CascadesGuestStayOrderConfirmedScreen';
import {CascadesGuestStayOrderScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayOrderScreen/CascadesGuestStayOrderScreen';
import {CascadesGuestStayRoomDiningScreen} from './CascadesGuestStay/CascadesGuestStayScreens/CascadesGuestStayRoomDiningScreen/CascadesGuestStayRoomDiningScreen';
import {CascadesGuestStayMainTabs} from './CascadesGuestStay/CascadesGuestStayMainTabs';
import type {CascadesGuestStayStackParamList} from './CascadesGuestStay/CascadesGuestStayNavTypes';

export type {
  CascadesGuestStayMainTabParamList,
  CascadesGuestStayStackParamList,
} from './CascadesGuestStay/CascadesGuestStayNavTypes';

const CASCADES_GUEST_STAY_SCREEN_OPTIONS = {
  headerShown: false,
  cardStyle: {backgroundColor: '#0C1824'},
} as const;

export type CascadesGuestStayStackNavProp =
  StackNavigationProp<CascadesGuestStayStackParamList>;

const Stack = createStackNavigator<CascadesGuestStayStackParamList>();

function CascadesGuestStayLoaderPath({
  navigation,
}: {
  navigation: CascadesGuestStayStackNavProp;
}) {
  React.useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      await new Promise<void>(resolve => {
        setTimeout(resolve, 5000);
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
  navigation: CascadesGuestStayStackNavProp;
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
        <Stack.Navigator
          initialRouteName="Loader"
          screenOptions={CASCADES_GUEST_STAY_SCREEN_OPTIONS}>
          <Stack.Screen name="Loader" component={CascadesGuestStayLoaderPath} />
          <Stack.Screen
            name="Onboarding"
            component={CascadesGuestStayOnboardingPath}
          />
          <Stack.Screen name="Main" component={CascadesGuestStayMainTabs} />
          <Stack.Screen
            name="RoomDining"
            component={CascadesGuestStayRoomDiningScreen}
          />
          <Stack.Screen name="Order" component={CascadesGuestStayOrderScreen} />
          <Stack.Screen
            name="OrderConfirmed"
            component={CascadesGuestStayOrderConfirmedScreen}
          />
          <Stack.Screen
            name="Climate"
            component={CascadesGuestStayClimateScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CascadesGuestStayAppProvider>
  );
}
