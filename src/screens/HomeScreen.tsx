import {useAdaptive} from '../hooks/useAdaptive';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {icons} from '../data/assets';
import {GuestIdCard} from '../components/home/GuestIdCard';
import {QuickActionCard} from '../components/home/QuickActionCard';
import {useClimateSummary} from '../context/AppContext';
import {GUEST} from '../data/guest';
import {
  HOME_LOCATIONS,
  WEATHER,
} from '../data/home';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import type {
  MainTabParamList,
  StackParamList,
} from '../navigation/types';

type HomeScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'HomeTab'>,
    StackNavigationProp<StackParamList>
  >;
};

export function HomeScreen({
  navigation,
}: HomeScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const climateSummary = useClimateSummary();

  return (
    <View style={styles.HomeScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.HomeScreenScrollVellum,
          {paddingTop: insets.top + adaptive.verticalScale(12)},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.HomeScreenTopBar}>
          <View style={styles.HomeScreenBrandFiligree}>
            <Image
              source={icons.homeLogo}
              style={styles.HomeScreenLogoSigil}
              resizeMode="contain"
            />
            <Text style={styles.HomeScreenBrandTextFiligree}>CASCADES</Text>
          </View>
        </View>

        <Text style={styles.HomeScreenGreetingFiligree}>GOOD AFTERNOON</Text>
        <Text style={styles.HomeScreenNameFiligree}>
          {GUEST.name}
        </Text>
        <Text style={styles.HomeScreenStayFiligree}>
          <Text style={styles.HomeScreenRoomFiligree}>
            {GUEST.room}
          </Text>
          {`  ·  Check-out ${GUEST.checkout}`}
        </Text>

        <View style={styles.HomeScreenCardCardMantle}>
          <GuestIdCard />
        </View>

        <Text style={styles.HomeScreenSection}>Quick Actions</Text>
        <View style={styles.HomeScreenActionsRowLintel}>
          <QuickActionCard
            icon="🍴"
            iconBg="rgba(250, 191, 20, 0.2)"
            title="Room Dining"
            subtitle="Order food & drinks"
            borderColor={colors.goldBorder}
            onPress={() => navigation.navigate('RoomDining')}
          />
          <QuickActionCard
            icon="🌡"
            iconBg="rgba(91, 184, 232, 0.2)"
            title="Climate"
            subtitle={climateSummary}
            borderColor={colors.coolBlueBorder}
            onPress={() => navigation.navigate('Climate')}
          />
        </View>

        <View style={styles.HomeScreenLocationsHeader}>
          <Text style={styles.HomeScreenSection}>Locations to View</Text>
          <Pressable onPress={() => navigation.navigate('ExploreTab')}>
            <Text style={styles.HomeScreenSeeAll}>See all ›</Text>
          </Pressable>
        </View>

        {HOME_LOCATIONS.map(location => (
          <View key={location.id} style={styles.HomeScreenLocationCardFacet}>
            <Image
              source={location.image}
              style={styles.HomeScreenLocationImagePanel}
            />
            <View style={styles.HomeScreenLocationContent}>
              <View style={styles.HomeScreenLocationBadgeEnclave}>
                <Text style={styles.HomeScreenLocationBadgeTextFiligree}>
                  {location.badge}
                </Text>
              </View>
              <Text style={styles.HomeScreenLocationTitleFiligree}>
                {location.title}
              </Text>
              <Text style={styles.HomeScreenLocationSubtitleFiligree}>
                {location.subtitle}
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.HomeScreenWeather}>
          <View>
            <Text style={styles.HomeScreenWeatherCity}>
              {WEATHER.city}
            </Text>
            <Text style={styles.HomeScreenWeatherTemp}>
              {`${WEATHER.temperature}°C`}
            </Text>
            <Text style={styles.HomeScreenWeatherCondition}>
              {WEATHER.condition}
            </Text>
          </View>
          <View style={styles.HomeScreenWeatherRight}>
            <Text style={styles.HomeScreenWeatherIconSigil}>⛅</Text>
            <Text style={styles.HomeScreenWeatherRange}>
              {`H: ${WEATHER.high}°  L: ${WEATHER.low}°`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

HomeScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
HomeScreenScrollVellum: {
  paddingBottom: 24,
  paddingHorizontal: 20,
},
HomeScreenTopBar: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
HomeScreenBrandFiligree: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 8,
},
HomeScreenLogoSigil: {
  height: 32,
  width: 32,
},
HomeScreenBrandTextFiligree: {
  color: colors.gold,
  fontFamily: fonts.serifBold,
  fontSize: 18,
  fontWeight: '700',
  letterSpacing: 2,
},
HomeScreenGreetingFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
},
HomeScreenNameFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 32,
  fontWeight: '700',
  marginTop: 4,
},
HomeScreenStayFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
  marginBottom: 20,
  marginTop: 4,
},
HomeScreenRoomFiligree: {
  color: colors.gold,
},
HomeScreenCardCardMantle: {
  marginBottom: 24,
},
HomeScreenSection: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  marginBottom: 12,
  textTransform: 'uppercase',
},
HomeScreenActionsRowLintel: {
  flexDirection: 'row',
  gap: 12,
  marginBottom: 28,
},
HomeScreenLocationsHeader: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 12,
},
HomeScreenSeeAll: {
  color: colors.gold,
  fontFamily: fonts.sansMedium,
  fontSize: 13,
  fontWeight: '500',
},
HomeScreenLocationCardFacet: {
  backgroundColor: colors.card,
  borderRadius: 20,
  flexDirection: 'row',
  gap: 14,
  marginBottom: 12,
  overflow: 'hidden',
  padding: 12,
},
HomeScreenLocationImagePanel: {
  borderRadius: 14,
  height: 72,
  width: 72,
},
HomeScreenLocationContent: {
  flex: 1,
  justifyContent: 'center',
},
HomeScreenLocationBadgeEnclave: {
  alignSelf: 'flex-start',
  backgroundColor: colors.goldBadgeBg,
  borderColor: colors.goldBadgeBorder,
  borderRadius: 100,
  borderWidth: 1,
  marginBottom: 6,
  paddingHorizontal: 8,
  paddingVertical: 2,
},
HomeScreenLocationBadgeTextFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansRegular,
  fontSize: 9,
  letterSpacing: 1,
},
HomeScreenLocationTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
},
HomeScreenLocationSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 2,
},
HomeScreenWeather: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderRadius: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
  padding: 20,
},
HomeScreenWeatherCity: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  letterSpacing: 2,
},
HomeScreenWeatherTemp: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 36,
  fontWeight: '700',
  marginTop: 4,
},
HomeScreenWeatherCondition: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
  marginTop: 2,
},
HomeScreenWeatherRight: {
  alignItems: 'center',
},
HomeScreenWeatherIconSigil: {
  fontSize: 40,
},
HomeScreenWeatherRange: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 8,
},
});
