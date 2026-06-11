import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type QuickActionCardProps = {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  borderColor: string;
  onPress: () => void;
};

export function QuickActionCard({
  icon,
  iconBg,
  title,
  subtitle,
  borderColor,
  onPress,
}: QuickActionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.QuickActionCardCardFacet,
        {borderColor},
        pressed && styles.QuickActionCardPressedDim,
      ]}>
      <View style={[styles.QuickActionCardIconCardMantle, {backgroundColor: iconBg}]}>
        <Text style={styles.QuickActionCardIconSigil}>{icon}</Text>
      </View>
      <Text style={styles.QuickActionCardTitleFiligree}>{title}</Text>
      <Text style={styles.QuickActionCardSubtitleFiligree}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

QuickActionCardCardFacet: {
  backgroundColor: colors.card,
  borderRadius: 20,
  borderWidth: 1,
  flex: 1,
  minHeight: 130,
  padding: 16,
},
QuickActionCardPressedDim: {
  opacity: 0.9,
},
QuickActionCardIconCardMantle: {
  alignItems: 'center',
  borderRadius: 24,
  height: 44,
  justifyContent: 'center',
  marginBottom: 12,
  width: 44,
},
QuickActionCardIconSigil: {
  fontSize: 20,
},
QuickActionCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
},
QuickActionCardSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 4,
},
});
