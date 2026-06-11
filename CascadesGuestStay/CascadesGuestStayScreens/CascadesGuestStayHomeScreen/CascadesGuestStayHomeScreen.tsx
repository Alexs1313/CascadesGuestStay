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
import {CascadesGuestStayGuestIdCard} from '../../CascadesGuestStayComponents/CascadesGuestStayHome/CascadesGuestStayGuestIdCard/CascadesGuestStayGuestIdCard';
import {CascadesGuestStayQuickActionCard} from '../../CascadesGuestStayComponents/CascadesGuestStayHome/CascadesGuestStayQuickActionCard/CascadesGuestStayQuickActionCard';
import {useCascadesGuestStayClimateSummary} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CASCADES_GUEST_STAY_GUEST} from '../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {
  CASCADES_GUEST_STAY_HOME_LOCATIONS,
  CASCADES_GUEST_STAY_WEATHER,
} from '../../CascadesGuestStayConstants/CascadesGuestStayHome/CascadesGuestStayHomeData/CascadesGuestStayHomeData';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import type {
  CascadesGuestStayMainTabParamList,
  CascadesGuestStayStackParamList,
} from '../../CascadesGuestStayNavTypes';

type CascadesGuestStayHomeScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<CascadesGuestStayMainTabParamList, 'HomeTab'>,
    StackNavigationProp<CascadesGuestStayStackParamList>
  >;
};

export function CascadesGuestStayHomeScreen({
  navigation,
}: CascadesGuestStayHomeScreenProps) {
  const insets = useSafeAreaInsets();
  const climateSummary = useCascadesGuestStayClimateSummary();

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.cascadesGuestStayScroll,
          {paddingTop: insets.top + cascadesGuestStayVerticalScale(12)},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cascadesGuestStayTopBar}>
          <View style={styles.cascadesGuestStayBrand}>
            <Image
              source={require('../../CascadesGuestStayAssets/GuestStayhomelogo.png')}
              style={styles.cascadesGuestStayLogo}
              resizeMode="contain"
            />
            <Text style={styles.cascadesGuestStayBrandText}>CASCADES</Text>
          </View>
          <View style={styles.cascadesGuestStayConnected}>
            <Text style={styles.cascadesGuestStayWifi}>⌁</Text>
            <Text style={styles.cascadesGuestStayConnectedText}>CONNECTED</Text>
          </View>
        </View>

        <Text style={styles.cascadesGuestStayGreeting}>GOOD AFTERNOON</Text>
        <Text style={styles.cascadesGuestStayName}>
          {CASCADES_GUEST_STAY_GUEST.name}
        </Text>
        <Text style={styles.cascadesGuestStayStay}>
          <Text style={styles.cascadesGuestStayRoom}>
            {CASCADES_GUEST_STAY_GUEST.room}
          </Text>
          {`  ·  Check-out ${CASCADES_GUEST_STAY_GUEST.checkout}`}
        </Text>

        <View style={styles.cascadesGuestStayCardWrap}>
          <CascadesGuestStayGuestIdCard />
        </View>

        <Text style={styles.cascadesGuestStaySection}>Quick Actions</Text>
        <View style={styles.cascadesGuestStayActionsRow}>
          <CascadesGuestStayQuickActionCard
            icon="🍴"
            iconBg="rgba(250, 191, 20, 0.2)"
            title="Room Dining"
            subtitle="Order food & drinks"
            borderColor={cascadesGuestStayColors.goldBorder}
            onPress={() => navigation.navigate('RoomDining')}
          />
          <CascadesGuestStayQuickActionCard
            icon="🌡"
            iconBg="rgba(91, 184, 232, 0.2)"
            title="Climate"
            subtitle={climateSummary}
            borderColor={cascadesGuestStayColors.coolBlueBorder}
            onPress={() => navigation.navigate('Climate')}
          />
        </View>

        <View style={styles.cascadesGuestStayLocationsHeader}>
          <Text style={styles.cascadesGuestStaySection}>Locations to View</Text>
          <Pressable onPress={() => navigation.navigate('ExploreTab')}>
            <Text style={styles.cascadesGuestStaySeeAll}>See all ›</Text>
          </Pressable>
        </View>

        {CASCADES_GUEST_STAY_HOME_LOCATIONS.map(location => (
          <View key={location.id} style={styles.cascadesGuestStayLocationCard}>
            <Image
              source={location.image}
              style={styles.cascadesGuestStayLocationImage}
            />
            <View style={styles.cascadesGuestStayLocationContent}>
              <View style={styles.cascadesGuestStayLocationBadge}>
                <Text style={styles.cascadesGuestStayLocationBadgeText}>
                  {location.badge}
                </Text>
              </View>
              <Text style={styles.cascadesGuestStayLocationTitle}>
                {location.title}
              </Text>
              <Text style={styles.cascadesGuestStayLocationSubtitle}>
                {location.subtitle}
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.cascadesGuestStayWeather}>
          <View>
            <Text style={styles.cascadesGuestStayWeatherCity}>
              {CASCADES_GUEST_STAY_WEATHER.city}
            </Text>
            <Text style={styles.cascadesGuestStayWeatherTemp}>
              {`${CASCADES_GUEST_STAY_WEATHER.temperature}°C`}
            </Text>
            <Text style={styles.cascadesGuestStayWeatherCondition}>
              {CASCADES_GUEST_STAY_WEATHER.condition}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayWeatherRight}>
            <Text style={styles.cascadesGuestStayWeatherIcon}>⛅</Text>
            <Text style={styles.cascadesGuestStayWeatherRange}>
              {`H: ${CASCADES_GUEST_STAY_WEATHER.high}°  L: ${CASCADES_GUEST_STAY_WEATHER.low}°`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.background,
  },
  cascadesGuestStayScroll: {
    paddingBottom: cascadesGuestStayVerticalScale(24),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayTopBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: cascadesGuestStayVerticalScale(20),
  },
  cascadesGuestStayBrand: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
  },
  cascadesGuestStayLogo: {
    height: cascadesGuestStayScale(32),
    width: cascadesGuestStayScale(32),
  },
  cascadesGuestStayBrandText: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '700',
    letterSpacing: cascadesGuestStayScale(2),
  },
  cascadesGuestStayConnected: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.successBg,
    borderRadius: cascadesGuestStayScale(100),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(4),
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(6),
  },
  cascadesGuestStayWifi: {
    color: cascadesGuestStayColors.success,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayConnectedText: {
    color: cascadesGuestStayColors.success,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(10),
    fontWeight: '600',
    letterSpacing: cascadesGuestStayScale(1),
  },
  cascadesGuestStayGreeting: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
  },
  cascadesGuestStayName: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(32),
    fontWeight: '700',
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayStay: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
    marginBottom: cascadesGuestStayVerticalScale(20),
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayRoom: {
    color: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayCardWrap: {
    marginBottom: cascadesGuestStayVerticalScale(24),
  },
  cascadesGuestStaySection: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    marginBottom: cascadesGuestStayVerticalScale(12),
    textTransform: 'uppercase',
  },
  cascadesGuestStayActionsRow: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(12),
    marginBottom: cascadesGuestStayVerticalScale(28),
  },
  cascadesGuestStayLocationsHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStaySeeAll: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '500',
  },
  cascadesGuestStayLocationCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(14),
    marginBottom: cascadesGuestStayVerticalScale(12),
    overflow: 'hidden',
    padding: cascadesGuestStayScale(12),
  },
  cascadesGuestStayLocationImage: {
    borderRadius: cascadesGuestStayScale(14),
    height: cascadesGuestStayScale(72),
    width: cascadesGuestStayScale(72),
  },
  cascadesGuestStayLocationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cascadesGuestStayLocationBadge: {
    alignSelf: 'flex-start',
    backgroundColor: cascadesGuestStayColors.goldBadgeBg,
    borderColor: cascadesGuestStayColors.goldBadgeBorder,
    borderRadius: cascadesGuestStayScale(100),
    borderWidth: 1,
    marginBottom: cascadesGuestStayScale(6),
    paddingHorizontal: cascadesGuestStayScale(8),
    paddingVertical: cascadesGuestStayScale(2),
  },
  cascadesGuestStayLocationBadgeText: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(9),
    letterSpacing: cascadesGuestStayScale(1),
  },
  cascadesGuestStayLocationTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
  },
  cascadesGuestStayLocationSubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayWeather: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: cascadesGuestStayVerticalScale(8),
    padding: cascadesGuestStayScale(20),
  },
  cascadesGuestStayWeatherCity: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(2),
  },
  cascadesGuestStayWeatherTemp: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(36),
    fontWeight: '700',
    marginTop: cascadesGuestStayScale(4),
  },
  cascadesGuestStayWeatherCondition: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayWeatherRight: {
    alignItems: 'center',
  },
  cascadesGuestStayWeatherIcon: {
    fontSize: cascadesGuestStayScale(40),
  },
  cascadesGuestStayWeatherRange: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(8),
  },
});
