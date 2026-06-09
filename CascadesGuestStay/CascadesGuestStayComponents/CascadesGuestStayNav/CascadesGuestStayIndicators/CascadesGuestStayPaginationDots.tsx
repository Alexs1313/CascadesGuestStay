import React from 'react';
import {StyleSheet, View} from 'react-native';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayPaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function CascadesGuestStayPaginationDots({
  total,
  activeIndex,
}: CascadesGuestStayPaginationDotsProps) {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      {Array.from({length: total}).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={index}
            style={[
              styles.cascadesGuestStayDot,
              isActive
                ? styles.cascadesGuestStayActiveDot
                : styles.cascadesGuestStayInactiveDot,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: cascadesGuestStayScale(8),
  },
  cascadesGuestStayDot: {
    height: cascadesGuestStayScale(8),
    borderRadius: cascadesGuestStayScale(100),
  },
  cascadesGuestStayActiveDot: {
    width: cascadesGuestStayScale(24),
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayInactiveDot: {
    width: cascadesGuestStayScale(8),
    backgroundColor: cascadesGuestStayColors.goldMuted,
  },
});
