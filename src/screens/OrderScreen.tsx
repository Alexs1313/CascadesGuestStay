import {useAdaptive} from '../hooks/useAdaptive';
import React, {useMemo} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {ScreenHeader} from '../components/common/ScreenHeader';
import {useApp} from '../context/AppContext';
import {GUEST} from '../data/guest';
import {DINING_MENU} from '../data/dining';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import {formatPrice} from '../utils/formatPrice';
import type {StackParamList} from '../navigation/types';

type OrderScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Order'>;
};

export function OrderScreen({
  navigation,
}: OrderScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const {cart, cartTotal, addToCart, removeFromCart, clearCart} =
    useApp();

  const lines = useMemo(
    () =>
      cart
        .map(line => {
          const item = DINING_MENU.find(
            menuItem => menuItem.id === line.itemId,
          );
          if (!item) {
            return null;
          }
          return {item, quantity: line.quantity};
        })
        .filter(Boolean),
    [cart],
  );

  const handlePlaceOrder = () => {
  const total = cartTotal;
    clearCart();
    navigation.navigate('OrderConfirmed', {total});
  };

  return (
    <View style={styles.OrderScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.OrderScreenScrollVellum,
          {paddingTop: insets.top + adaptive.verticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          scrollable
          title="Your Order"
          onBack={() => navigation.goBack()}
          backLabel="Menu"
        />
        {lines.map(line => {
          if (!line) {
            return null;
          }
          return (
            <View key={line.item.id} style={styles.OrderScreenItemCardFacet}>
              <View style={styles.OrderScreenItemHeader}>
                <Text style={styles.OrderScreenItemNameFiligree}>
                  {line.item.name}
                </Text>
                <Text style={styles.OrderScreenItemPrice}>
                  {formatPrice(
                    line.item.price * line.quantity,
                  )}
                </Text>
              </View>
              <Text style={styles.OrderScreenNote}>+ Add note</Text>
              <View style={styles.OrderScreenStepper}>
                <Pressable
                  onPress={() => removeFromCart(line.item.id)}
                  style={styles.OrderScreenStep}>
                  <Text style={styles.OrderScreenStepLabelFiligree}>−</Text>
                </Pressable>
                <Text style={styles.OrderScreenQty}>{line.quantity}</Text>
                <Pressable
                  onPress={() => addToCart(line.item.id)}
                  style={styles.OrderScreenStep}>
                  <Text style={styles.OrderScreenStepLabelFiligree}>+</Text>
                </Pressable>
              </View>
            </View>
          );
        })}

        <View style={styles.OrderScreenSummary}>
          <View style={styles.OrderScreenSummaryRowLintel}>
            <Text style={styles.OrderScreenSummaryLabelFiligree}>Guest</Text>
            <Text style={styles.OrderScreenSummaryValue}>
              {GUEST.name}
            </Text>
          </View>
          <View style={styles.OrderScreenSummaryRowLintel}>
            <Text style={styles.OrderScreenSummaryLabelFiligree}>Room</Text>
            <Text style={styles.OrderScreenSummaryValue}>
              {GUEST.room}
            </Text>
          </View>
          <View style={styles.OrderScreenSummaryRowLintel}>
            <Text style={styles.OrderScreenSummaryLabelFiligree}>Est. Wait</Text>
            <Text style={styles.OrderScreenSummaryValue}>
              {`~${GUEST.estimatedWaitMin} min`}
            </Text>
          </View>
          <View style={styles.OrderScreenDivider} />
          <View style={styles.OrderScreenSummaryRowLintel}>
            <Text style={styles.OrderScreenTotalLabelFiligree}>Total</Text>
            <Text style={styles.OrderScreenTotal}>
              {formatPrice(cartTotal)}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={handlePlaceOrder}
          style={styles.OrderScreenPlaceOrder}>
          <Text style={styles.OrderScreenPlaceOrderLabelFiligree}>
            {`Place Order • ${formatPrice(cartTotal)}`}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

OrderScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
OrderScreenScrollVellum: {
  paddingBottom: 32,
  paddingHorizontal: 20,
},
OrderScreenItemCardFacet: {
  backgroundColor: colors.card,
  borderRadius: 20,
  marginBottom: 12,
  padding: 16,
},
OrderScreenItemHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
OrderScreenItemNameFiligree: {
  color: colors.cream,
  flex: 1,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '600',
  marginRight: 12,
},
OrderScreenItemPrice: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
OrderScreenNote: {
  color: colors.link,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
  marginTop: 6,
},
OrderScreenStepper: {
  alignItems: 'center',
  alignSelf: 'flex-end',
  flexDirection: 'row',
  gap: 12,
  marginTop: 12,
},
OrderScreenStep: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 18,
  height: 36,
  justifyContent: 'center',
  width: 36,
},
OrderScreenStepLabelFiligree: {
  color: colors.background,
  fontSize: 20,
  fontWeight: '700',
},
OrderScreenQty: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '600',
},
OrderScreenSummary: {
  backgroundColor: colors.card,
  borderRadius: 20,
  gap: 10,
  marginTop: 8,
  padding: 20,
},
OrderScreenSummaryRowLintel: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
OrderScreenSummaryLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
},
OrderScreenSummaryValue: {
  color: colors.cream,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
OrderScreenDivider: {
  backgroundColor: 'rgba(122, 154, 181, 0.2)',
  height: 1,
  marginVertical: 4,
},
OrderScreenTotalLabelFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '600',
},
OrderScreenTotal: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 18,
  fontWeight: '700',
},
OrderScreenPlaceOrder: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 16,
  marginTop: 20,
  paddingVertical: 16,
},
OrderScreenPlaceOrderLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
});
