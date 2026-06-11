import {useAdaptive} from '../../hooks/useAdaptive';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type ScreenHeaderProps = {
  title: string;
  onClose?: () => void;
  onBack?: () => void;
  backLabel?: string;
  scrollable?: boolean;
};

export function ScreenHeader({
  title,
  onClose,
  onBack,
  backLabel = 'Menu',
  scrollable = false,
}: ScreenHeaderProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.ScreenHeaderFacetChassis,
        scrollable
          ? styles.ScreenHeaderContainerScrollable
          : {paddingTop: insets.top + adaptive.verticalScale(8)},
      ]}>
      {onBack ? (
        <Pressable onPress={onBack} style={styles.ScreenHeaderSide}>
          <Text style={styles.ScreenHeaderBack}>{`‹ ${backLabel}`}</Text>
        </Pressable>
      ) : onClose ? (
        <Pressable onPress={onClose} style={styles.ScreenHeaderClose}>
          <Text style={styles.ScreenHeaderCloseLabelFiligree}>✕</Text>
        </Pressable>
      ) : (
        <View style={styles.ScreenHeaderSide} />
      )}
      <Text style={styles.ScreenHeaderTitleFiligree}>{title}</Text>
      <View style={styles.ScreenHeaderSide} />
    </View>
  );
}

const styles = StyleSheet.create({

ScreenHeaderFacetChassis: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 12,
  paddingHorizontal: 20,
},
ScreenHeaderContainerScrollable: {
  alignSelf: 'stretch',
  paddingHorizontal: 0,
  paddingTop: 8,
  width: '100%',
},
ScreenHeaderSide: {
  width: 72,
},
ScreenHeaderClose: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderRadius: 20,
  height: 36,
  justifyContent: 'center',
  width: 36,
},
ScreenHeaderCloseLabelFiligree: {
  color: colors.cream,
  fontSize: 16,
},
ScreenHeaderBack: {
  color: colors.gold,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
ScreenHeaderTitleFiligree: {
  color: colors.cream,
  flex: 1,
  fontFamily: fonts.serifBold,
  fontSize: 20,
  fontWeight: '700',
  textAlign: 'center',
},
});
