import {useAdaptive} from '../../hooks/useAdaptive';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {tabIcons} from '../../data/assets';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


const TAB_LABELS: Record<string, string> = {
  HomeTab: 'Home',
  RequestsTab: 'Requests',
  ExploreTab: 'Explore',
  SavedTab: 'Saved',
  MapTab: 'Map',
};

export function TabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const adaptive = useAdaptive();
  return (
    <View
      style={[
        styles.TabBarFacetChassis,
        {
          paddingTop: adaptive.tabPaddingTop,
          paddingBottom: adaptive.tabPaddingBottom,
        },
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon =
          tabIcons[route.name as keyof typeof tabIcons];

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
            style={styles.TabBarTab}>
            <View
              style={[
                styles.TabBarTabInner,
                {minHeight: adaptive.tabIconWrapHeight},
                isFocused && styles.TabBarTabInnerActive,
              ]}>
              <Image
                source={icon}
                style={[
                  styles.TabBarIconSigil,
                  {
                    width: adaptive.tabIconSize,
                    height: adaptive.tabIconSize,
                  },
                  !isFocused && styles.TabBarIconInactive,
                ]}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.TabBarLabelFiligree,
                  isFocused && styles.TabBarLabelActiveFiligree,
                ]}>
                {TAB_LABELS[route.name] ?? route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({

TabBarFacetChassis: {
  flexDirection: 'row',
  backgroundColor: '#0A1520',
  borderTopColor: 'rgba(250, 191, 20, 0.08)',
  borderTopWidth: 1,
  paddingHorizontal: 8,
},
TabBarTab: {
  alignItems: 'center',
  flex: 1,
},
TabBarTabInner: {
  alignItems: 'center',
  borderRadius: 16,
  gap: 4,
  minWidth: 52,
  paddingHorizontal: 10,
  paddingVertical: 8,
},
TabBarTabInnerActive: {
  backgroundColor: 'rgba(250, 191, 20, 0.08)',
},
TabBarIconSigil: {
  tintColor: colors.gold,
},
TabBarIconInactive: {
  tintColor: colors.label,
  opacity: 0.7,
},
TabBarLabelFiligree: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 10,
},
TabBarLabelActiveFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansBold,
  fontWeight: '700',
},
});
