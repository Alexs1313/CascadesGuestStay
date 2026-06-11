import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DiningCategory} from '../../data/dining';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type CategoryTabsProps = {
  activeCategory: DiningCategory;
  onCategoryChange: (category: DiningCategory) => void;
};

const DINING_TABS: {
  key: DiningCategory;
  label: string;
}[] = [
  {key: 'breakfast', label: 'Breakfast'},
  {key: 'lunch', label: 'Lunch'},
  {key: 'dinner', label: 'Dinner'},
];

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <View style={styles.CategoryTabsFacetChassis}>
      {DINING_TABS.map(tab => {
        const isActive = tab.key === activeCategory;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onCategoryChange(tab.key)}
            style={[
              styles.CategoryTabsTab,
              isActive && styles.CategoryTabsTabActive,
            ]}>
            <Text
              style={[
                styles.CategoryTabsLabelFiligree,
                isActive && styles.CategoryTabsLabelActiveFiligree,
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

CategoryTabsFacetChassis: {
  flexDirection: 'row',
  gap: 8,
},
CategoryTabsTab: {
  alignItems: 'center',
  backgroundColor: colors.tabInactive,
  borderRadius: 100,
  flex: 1,
  paddingVertical: 12,
},
CategoryTabsTabActive: {
  backgroundColor: colors.gold,
},
CategoryTabsLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
CategoryTabsLabelActiveFiligree: {
  color: colors.background,
  fontWeight: '600',
},
});
