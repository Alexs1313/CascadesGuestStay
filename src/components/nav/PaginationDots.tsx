import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/theme';


type PaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function PaginationDots({
  total,
  activeIndex,
}: PaginationDotsProps) {
  return (
    <View style={styles.PaginationDotsFacetChassis}>
      {Array.from({length: total}).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={index}
            style={[
              styles.PaginationDotsDot,
              isActive
                ? styles.PaginationDotsActiveDot
                : styles.PaginationDotsInactiveDot,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({

PaginationDotsFacetChassis: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},
PaginationDotsDot: {
  height: 8,
  borderRadius: 100,
},
PaginationDotsActiveDot: {
  width: 24,
  backgroundColor: colors.gold,
},
PaginationDotsInactiveDot: {
  width: 8,
  backgroundColor: colors.goldMuted,
},
});
