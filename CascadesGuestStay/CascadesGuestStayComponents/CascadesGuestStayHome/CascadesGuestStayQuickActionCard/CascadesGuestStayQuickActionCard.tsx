import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayQuickActionCardProps = {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  borderColor: string;
  onPress: () => void;
};

export function CascadesGuestStayQuickActionCard({
  icon,
  iconBg,
  title,
  subtitle,
  borderColor,
  onPress,
}: CascadesGuestStayQuickActionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.cascadesGuestStayCard,
        {borderColor},
        pressed && styles.cascadesGuestStayPressed,
      ]}>
      <View style={[styles.cascadesGuestStayIconWrap, {backgroundColor: iconBg}]}>
        <Text style={styles.cascadesGuestStayIcon}>{icon}</Text>
      </View>
      <Text style={styles.cascadesGuestStayTitle}>{title}</Text>
      <Text style={styles.cascadesGuestStaySubtitle}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    borderWidth: 1,
    flex: 1,
    minHeight: cascadesGuestStayScale(130),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStayPressed: {
    opacity: 0.9,
  },
  cascadesGuestStayIconWrap: {
    alignItems: 'center',
    borderRadius: cascadesGuestStayScale(24),
    height: cascadesGuestStayScale(44),
    justifyContent: 'center',
    marginBottom: cascadesGuestStayScale(12),
    width: cascadesGuestStayScale(44),
  },
  cascadesGuestStayIcon: {
    fontSize: cascadesGuestStayScale(20),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(4),
  },
});
