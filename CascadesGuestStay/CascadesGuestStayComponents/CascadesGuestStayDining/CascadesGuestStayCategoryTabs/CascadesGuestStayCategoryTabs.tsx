import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CascadesGuestStayDiningCategory} from '../../../CascadesGuestStayConstants/CascadesGuestStayDining/CascadesGuestStayDiningMenu/CascadesGuestStayDiningMenu';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayCategoryTabsProps = {
  activeCategory: CascadesGuestStayDiningCategory;
  onCategoryChange: (category: CascadesGuestStayDiningCategory) => void;
};

const CASCADES_GUEST_STAY_TABS: {
  key: CascadesGuestStayDiningCategory;
  label: string;
}[] = [
  {key: 'breakfast', label: 'Breakfast'},
  {key: 'lunch', label: 'Lunch'},
  {key: 'dinner', label: 'Dinner'},
];

export function CascadesGuestStayCategoryTabs({
  activeCategory,
  onCategoryChange,
}: CascadesGuestStayCategoryTabsProps) {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      {CASCADES_GUEST_STAY_TABS.map(tab => {
        const isActive = tab.key === activeCategory;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onCategoryChange(tab.key)}
            style={[
              styles.cascadesGuestStayTab,
              isActive && styles.cascadesGuestStayTabActive,
            ]}>
            <Text
              style={[
                styles.cascadesGuestStayLabel,
                isActive && styles.cascadesGuestStayLabelActive,
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
  },
  cascadesGuestStayTab: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.tabInactive,
    borderRadius: cascadesGuestStayScale(100),
    flex: 1,
    paddingVertical: cascadesGuestStayScale(12),
  },
  cascadesGuestStayTabActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayLabelActive: {
    color: cascadesGuestStayColors.background,
    fontWeight: '600',
  },
});
