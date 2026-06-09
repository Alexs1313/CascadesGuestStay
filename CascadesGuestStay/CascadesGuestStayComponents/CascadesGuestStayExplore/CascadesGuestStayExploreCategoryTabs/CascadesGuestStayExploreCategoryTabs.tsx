import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {
  CASCADES_GUEST_STAY_EXPLORE_CATEGORIES,
  CascadesGuestStayExploreCategory,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayExplore/CascadesGuestStayExploreData/CascadesGuestStayExploreData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayExploreCategoryTabsProps = {
  activeCategory: CascadesGuestStayExploreCategory;
  onCategoryChange: (category: CascadesGuestStayExploreCategory) => void;
};

export function CascadesGuestStayExploreCategoryTabs({
  activeCategory,
  onCategoryChange,
}: CascadesGuestStayExploreCategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cascadesGuestStayContainer}>
      {CASCADES_GUEST_STAY_EXPLORE_CATEGORIES.map(tab => {
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
                styles.cascadesGuestStayIcon,
                isActive && styles.cascadesGuestStayLabelActive,
              ]}>
              {tab.icon}
            </Text>
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
    paddingVertical: cascadesGuestStayScale(12),
  },
  cascadesGuestStayTab: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderRadius: cascadesGuestStayScale(100),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(6),
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayScale(8),
  },
  cascadesGuestStayTabActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayIcon: {
    fontSize: cascadesGuestStayScale(13),
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '500',
  },
  cascadesGuestStayLabelActive: {
    color: cascadesGuestStayColors.background,
    fontWeight: '700',
  },
});
