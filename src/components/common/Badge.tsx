import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type BadgeProps = {
  label: string;
};

export function Badge({label}: BadgeProps) {
  return (
    <View style={styles.BadgeFacetChassis}>
      <Text style={styles.BadgeLabelFiligree}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

BadgeFacetChassis: {
  alignSelf: 'flex-start',
  backgroundColor: colors.goldBadgeBg,
  borderColor: colors.goldBadgeBorder,
  borderWidth: 1.16,
  borderRadius: 100,
  paddingHorizontal: 12,
  paddingVertical: 4,
},
BadgeLabelFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansRegular,
  fontSize: 10,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
});
