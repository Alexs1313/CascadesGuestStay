import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  wide?: boolean;
};

export function PrimaryButton({
  label,
  onPress,
  style,
  wide = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.PrimaryButtonBtnPortico,
        wide && styles.PrimaryButtonButtonWide,
        pressed && styles.PrimaryButtonButtonPressedDim,
        style,
      ]}>
      <Text style={styles.PrimaryButtonLabelFiligree}>{label}</Text>
      <Text style={styles.PrimaryButtonChevronFiligree}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

PrimaryButtonBtnPortico: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 100,
  flexDirection: 'row',
  gap: 8,
  height: 45,
  justifyContent: 'center',
  minWidth: 103,
  paddingHorizontal: 24,
},
PrimaryButtonButtonWide: {
  minWidth: 151,
},
PrimaryButtonButtonPressedDim: {
  opacity: 0.85,
},
PrimaryButtonLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '600',
},
PrimaryButtonChevronFiligree: {
  color: colors.background,
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 20,
  marginTop: -2,
},
});
