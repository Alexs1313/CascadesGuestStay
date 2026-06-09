import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayPlaceholderScreenProps = {
  title: string;
};

export function CascadesGuestStayPlaceholderScreen({
  title,
}: CascadesGuestStayPlaceholderScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.cascadesGuestStayScroll,
          {paddingTop: insets.top + cascadesGuestStayVerticalScale(24)},
        ]}>
        <Text style={styles.cascadesGuestStayTitle}>{title}</Text>
        <Text style={styles.cascadesGuestStaySubtitle}>Coming soon</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.background,
  },
  cascadesGuestStayScroll: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '700',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(16),
    marginTop: cascadesGuestStayVerticalScale(8),
  },
});
