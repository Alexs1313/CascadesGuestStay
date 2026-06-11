import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {
  MAP_CATEGORIES,
  MapCategory,
} from '../../data/map';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type MapCategoryTabsProps = {
  activeCategory: MapCategory;
  onCategoryChange: (category: MapCategory) => void;
};

export function MapCategoryTabs({
  activeCategory,
  onCategoryChange,
}: MapCategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.MapCategoryTabsFacetChassis}>
      {MAP_CATEGORIES.map(tab => {
        const isActive = tab.key === activeCategory;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onCategoryChange(tab.key)}
            style={[
              styles.MapCategoryTabsTab,
              isActive && styles.MapCategoryTabsTabActive,
            ]}>
            <Text
              style={[
                styles.MapCategoryTabsLabelFiligree,
                isActive && styles.MapCategoryTabsLabelActiveFiligree,
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

MapCategoryTabsFacetChassis: {
  gap: 8,
  paddingHorizontal: 20,
  paddingVertical: 12,
},
MapCategoryTabsTab: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.buttonSecondary,
  borderRadius: 100,
  paddingHorizontal: 16,
  paddingVertical: 6,
},
MapCategoryTabsTabActive: {
  backgroundColor: colors.gold,
},
MapCategoryTabsLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 12,
  fontWeight: '500',
},
MapCategoryTabsLabelActiveFiligree: {
  color: colors.background,
  fontFamily: fonts.sansBold,
  fontWeight: '700',
},
});
