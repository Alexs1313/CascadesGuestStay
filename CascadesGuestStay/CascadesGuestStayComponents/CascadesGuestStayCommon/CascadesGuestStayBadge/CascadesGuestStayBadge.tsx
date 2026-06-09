import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayBadgeProps = {
  label: string;
};

export function CascadesGuestStayBadge({label}: CascadesGuestStayBadgeProps) {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      <Text style={styles.cascadesGuestStayLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    alignSelf: 'flex-start',
    backgroundColor: cascadesGuestStayColors.goldBadgeBg,
    borderColor: cascadesGuestStayColors.goldBadgeBorder,
    borderWidth: 1.16,
    borderRadius: cascadesGuestStayScale(100),
    paddingHorizontal: cascadesGuestStayScale(12),
    paddingVertical: cascadesGuestStayScale(4),
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(10),
    letterSpacing: cascadesGuestStayScale(2),
    textTransform: 'uppercase',
  },
});
