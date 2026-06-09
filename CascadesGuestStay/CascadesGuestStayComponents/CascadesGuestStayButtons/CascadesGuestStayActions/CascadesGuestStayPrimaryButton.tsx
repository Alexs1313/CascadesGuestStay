import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayPrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  wide?: boolean;
};

export function CascadesGuestStayPrimaryButton({
  label,
  onPress,
  style,
  wide = false,
}: CascadesGuestStayPrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.cascadesGuestStayButton,
        wide && styles.cascadesGuestStayButtonWide,
        pressed && styles.cascadesGuestStayButtonPressed,
        style,
      ]}>
      <Text style={styles.cascadesGuestStayLabel}>{label}</Text>
      <Text style={styles.cascadesGuestStayChevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayButton: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(100),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
    height: cascadesGuestStayScale(45),
    justifyContent: 'center',
    minWidth: cascadesGuestStayScale(103),
    paddingHorizontal: cascadesGuestStayScale(24),
  },
  cascadesGuestStayButtonWide: {
    minWidth: cascadesGuestStayScale(151),
  },
  cascadesGuestStayButtonPressed: {
    opacity: 0.85,
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '600',
  },
  cascadesGuestStayChevron: {
    color: cascadesGuestStayColors.background,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '600',
    lineHeight: cascadesGuestStayScale(20),
    marginTop: -cascadesGuestStayScale(2),
  },
});
