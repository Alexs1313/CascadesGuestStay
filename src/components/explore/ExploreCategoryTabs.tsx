import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {
  EXPLORE_CATEGORIES,
  ExploreCategory,
} from '../../data/explore';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type ExploreCategoryTabsProps = {
  activeCategory: ExploreCategory;
  onCategoryChange: (category: ExploreCategory) => void;
};

export function ExploreCategoryTabs({
  activeCategory,
  onCategoryChange,
}: ExploreCategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.ExploreCategoryTabsFacetChassis}>
      {EXPLORE_CATEGORIES.map(tab => {
        const isActive = tab.key === activeCategory;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onCategoryChange(tab.key)}
            style={[
              styles.ExploreCategoryTabsTab,
              isActive && styles.ExploreCategoryTabsTabActive,
            ]}>
            <Text
              style={[
                styles.ExploreCategoryTabsIconSigil,
                isActive && styles.ExploreCategoryTabsLabelActiveFiligree,
              ]}>
              {tab.icon}
            </Text>
            <Text
              style={[
                styles.ExploreCategoryTabsLabelFiligree,
                isActive && styles.ExploreCategoryTabsLabelActiveFiligree,
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

ExploreCategoryTabsFacetChassis: {
  gap: 8,
  paddingVertical: 12,
},
ExploreCategoryTabsTab: {
  alignItems: 'center',
  backgroundColor: colors.buttonSecondary,
  borderRadius: 100,
  flexDirection: 'row',
  gap: 6,
  paddingHorizontal: 16,
  paddingVertical: 8,
},
ExploreCategoryTabsTabActive: {
  backgroundColor: colors.gold,
},
ExploreCategoryTabsIconSigil: {
  fontSize: 13,
},
ExploreCategoryTabsLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 13,
  fontWeight: '500',
},
ExploreCategoryTabsLabelActiveFiligree: {
  color: colors.background,
  fontWeight: '700',
},
});
