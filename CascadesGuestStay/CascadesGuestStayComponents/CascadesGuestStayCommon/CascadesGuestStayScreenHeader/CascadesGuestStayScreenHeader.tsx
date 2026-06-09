import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayScreenHeaderProps = {
  title: string;
  onClose?: () => void;
  onBack?: () => void;
  backLabel?: string;
  scrollable?: boolean;
};

export function CascadesGuestStayScreenHeader({
  title,
  onClose,
  onBack,
  backLabel = 'Menu',
  scrollable = false,
}: CascadesGuestStayScreenHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.cascadesGuestStayContainer,
        scrollable
          ? styles.cascadesGuestStayContainerScrollable
          : {paddingTop: insets.top + cascadesGuestStayVerticalScale(8)},
      ]}>
      {onBack ? (
        <Pressable onPress={onBack} style={styles.cascadesGuestStaySide}>
          <Text style={styles.cascadesGuestStayBack}>{`‹ ${backLabel}`}</Text>
        </Pressable>
      ) : onClose ? (
        <Pressable onPress={onClose} style={styles.cascadesGuestStayClose}>
          <Text style={styles.cascadesGuestStayCloseLabel}>✕</Text>
        </Pressable>
      ) : (
        <View style={styles.cascadesGuestStaySide} />
      )}
      <Text style={styles.cascadesGuestStayTitle}>{title}</Text>
      <View style={styles.cascadesGuestStaySide} />
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: cascadesGuestStayVerticalScale(12),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayContainerScrollable: {
    alignSelf: 'stretch',
    paddingHorizontal: 0,
    paddingTop: cascadesGuestStayVerticalScale(8),
    width: '100%',
  },
  cascadesGuestStaySide: {
    width: cascadesGuestStayScale(72),
  },
  cascadesGuestStayClose: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    height: cascadesGuestStayScale(36),
    justifyContent: 'center',
    width: cascadesGuestStayScale(36),
  },
  cascadesGuestStayCloseLabel: {
    color: cascadesGuestStayColors.cream,
    fontSize: cascadesGuestStayScale(16),
  },
  cascadesGuestStayBack: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    flex: 1,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(20),
    fontWeight: '700',
    textAlign: 'center',
  },
});
