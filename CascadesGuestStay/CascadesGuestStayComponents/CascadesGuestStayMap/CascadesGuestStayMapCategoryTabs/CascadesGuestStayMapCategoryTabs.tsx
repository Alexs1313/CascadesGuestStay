import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {
  CASCADES_GUEST_STAY_MAP_CATEGORIES,
  CascadesGuestStayMapCategory,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapData/CascadesGuestStayMapData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayMapCategoryTabsProps = {
  activeCategory: CascadesGuestStayMapCategory;
  onCategoryChange: (category: CascadesGuestStayMapCategory) => void;
};

export function CascadesGuestStayMapCategoryTabs({
  activeCategory,
  onCategoryChange,
}: CascadesGuestStayMapCategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cascadesGuestStayContainer}>
      {CASCADES_GUEST_STAY_MAP_CATEGORIES.map(tab => {
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    gap: cascadesGuestStayScale(8),
    paddingHorizontal: cascadesGuestStayScale(20),
    paddingVertical: cascadesGuestStayScale(12),
  },
  cascadesGuestStayTab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderRadius: cascadesGuestStayScale(100),
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayScale(6),
  },
  cascadesGuestStayTabActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(12),
    fontWeight: '500',
  },
  cascadesGuestStayLabelActive: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontWeight: '700',
  },
});
