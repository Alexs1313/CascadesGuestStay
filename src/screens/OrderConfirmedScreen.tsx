import {useAdaptive} from '../hooks/useAdaptive';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {ScreenHeader} from '../components/common/ScreenHeader';
import {GUEST} from '../data/guest';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import type {StackParamList} from '../navigation/types';

type OrderConfirmedScreenProps = {
  navigation: StackNavigationProp<
    StackParamList,
    'OrderConfirmed'
  >;
  route: {
    params?: {total?: number};
  };
};

export function OrderConfirmedScreen({
  navigation,
  route,
}: OrderConfirmedScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const total = route.params?.total ?? 0;

  return (
    <View style={styles.OrderConfirmedScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OrderConfirmedScreenScrollVellum,
          {paddingTop: insets.top + adaptive.verticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          scrollable
          title="Order Confirmed"
          onClose={() =>
            navigation.navigate('Main', {screen: 'HomeTab'})
          }
        />
        <View style={styles.OrderConfirmedScreenCheck}>
          <Text style={styles.OrderConfirmedScreenCheckIconSigil}>✓</Text>
        </View>
        <Text style={styles.OrderConfirmedScreenTitleFiligree}>
          Your order is on its way!
        </Text>
        <Text style={styles.OrderConfirmedScreenSubtitleFiligree}>
          Estimated arrival: 25–35 min
        </Text>

        <View style={styles.OrderConfirmedScreenSummary}>
          <View style={styles.OrderConfirmedScreenRowLintel}>
            <Text style={styles.OrderConfirmedScreenLabelFiligree}>Guest</Text>
            <Text style={styles.OrderConfirmedScreenValue}>
              {GUEST.name}
            </Text>
          </View>
          <View style={styles.OrderConfirmedScreenRowLintel}>
            <Text style={styles.OrderConfirmedScreenLabelFiligree}>Room</Text>
            <Text style={styles.OrderConfirmedScreenValue}>
              {GUEST.room}
            </Text>
          </View>
          <View style={styles.OrderConfirmedScreenRowLintel}>
            <Text style={styles.OrderConfirmedScreenLabelFiligree}>Estimated Wait</Text>
            <Text style={styles.OrderConfirmedScreenValue}>
              {`~${GUEST.estimatedWaitMin} min`}
            </Text>
          </View>
          <View style={styles.OrderConfirmedScreenRowLintel}>
            <Text style={styles.OrderConfirmedScreenLabelFiligree}>Total Charged</Text>
            <Text style={styles.OrderConfirmedScreenTotal}>
              {total > 0 ? `$${total.toFixed(2)}` : '—'}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Main', {screen: 'HomeTab'})}
          style={styles.OrderConfirmedScreenDone}>
          <Text style={styles.OrderConfirmedScreenDoneLabelFiligree}>Done</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

OrderConfirmedScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
OrderConfirmedScreenScrollVellum: {
  alignItems: 'center',
  paddingBottom: 32,
  paddingHorizontal: 20,
},
OrderConfirmedScreenCheck: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 48,
  height: 96,
  justifyContent: 'center',
  marginBottom: 24,
  width: 96,
},
OrderConfirmedScreenCheckIconSigil: {
  color: colors.background,
  fontSize: 40,
  fontWeight: '700',
},
OrderConfirmedScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 26,
  fontWeight: '700',
  textAlign: 'center',
},
OrderConfirmedScreenSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 15,
  marginBottom: 28,
  marginTop: 8,
  textAlign: 'center',
},
OrderConfirmedScreenSummary: {
  backgroundColor: colors.card,
  borderRadius: 20,
  gap: 14,
  padding: 20,
  width: '100%',
},
OrderConfirmedScreenRowLintel: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
OrderConfirmedScreenLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
},
OrderConfirmedScreenValue: {
  color: colors.cream,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
OrderConfirmedScreenTotal: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
OrderConfirmedScreenDone: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 100,
  marginTop: 28,
  paddingVertical: 16,
  width: '100%',
},
OrderConfirmedScreenDoneLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
});
