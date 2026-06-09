import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

const CASCADES_GUEST_STAY_TAB_ICONS = {
  HomeTab: require('../../../CascadesGuestStayAssets/home.png'),
  RequestsTab: require('../../../CascadesGuestStayAssets/requests.png'),
  ExploreTab: require('../../../CascadesGuestStayAssets/explore.png'),
  SavedTab: require('../../../CascadesGuestStayAssets/saved.png'),
  MapTab: require('../../../CascadesGuestStayAssets/map.png'),
} as const;

const CASCADES_GUEST_STAY_TAB_LABELS: Record<string, string> = {
  HomeTab: 'Home',
  RequestsTab: 'Requests',
  ExploreTab: 'Explore',
  SavedTab: 'Saved',
  MapTab: 'Map',
};

export function CascadesGuestStayTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon =
          CASCADES_GUEST_STAY_TAB_ICONS[
            route.name as keyof typeof CASCADES_GUEST_STAY_TAB_ICONS
          ];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.cascadesGuestStayTab}>
            <View
              style={[
                styles.cascadesGuestStayTabInner,
                isFocused && styles.cascadesGuestStayTabInnerActive,
              ]}>
              <Image
                source={icon}
                style={[
                  styles.cascadesGuestStayIcon,
                  !isFocused && styles.cascadesGuestStayIconInactive,
                ]}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.cascadesGuestStayLabel,
                  isFocused && styles.cascadesGuestStayLabelActive,
                ]}>
                {CASCADES_GUEST_STAY_TAB_LABELS[route.name] ?? route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flexDirection: 'row',
    backgroundColor: '#0A1520',
    borderTopColor: 'rgba(250, 191, 20, 0.08)',
    borderTopWidth: 1,
    paddingTop: cascadesGuestStayScale(10),
    paddingBottom: cascadesGuestStayScale(24),
    paddingHorizontal: cascadesGuestStayScale(8),
  },
  cascadesGuestStayTab: {
    alignItems: 'center',
    flex: 1,
  },
  cascadesGuestStayTabInner: {
    alignItems: 'center',
    borderRadius: cascadesGuestStayScale(16),
    gap: cascadesGuestStayScale(4),
    minWidth: cascadesGuestStayScale(52),
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(8),
  },
  cascadesGuestStayTabInnerActive: {
    backgroundColor: 'rgba(250, 191, 20, 0.08)',
  },
  cascadesGuestStayIcon: {
    width: cascadesGuestStayScale(22),
    height: cascadesGuestStayScale(22),
    tintColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayIconInactive: {
    tintColor: cascadesGuestStayColors.label,
    opacity: 0.7,
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(10),
  },
  cascadesGuestStayLabelActive: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontWeight: '700',
  },
});
