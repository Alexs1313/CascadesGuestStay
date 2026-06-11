import React, {useMemo} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CascadesGuestStayScreenHeader} from '../../CascadesGuestStayComponents/CascadesGuestStayCommon/CascadesGuestStayScreenHeader/CascadesGuestStayScreenHeader';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CASCADES_GUEST_STAY_GUEST} from '../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {CASCADES_GUEST_STAY_DINING_MENU} from '../../CascadesGuestStayConstants/CascadesGuestStayDining/CascadesGuestStayDiningMenu/CascadesGuestStayDiningMenu';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import {cascadesGuestStayFormatPrice} from '../../CascadesGuestStayUtils/cascadesGuestStayFormatPrice';
import type {CascadesGuestStayStackParamList} from '../../CascadesGuestStayNavTypes';

type CascadesGuestStayOrderScreenProps = {
  navigation: StackNavigationProp<CascadesGuestStayStackParamList, 'Order'>;
};

export function CascadesGuestStayOrderScreen({
  navigation,
}: CascadesGuestStayOrderScreenProps) {
  const insets = useSafeAreaInsets();
  const {cart, cartTotal, addToCart, removeFromCart, clearCart} =
    useCascadesGuestStayApp();

  const lines = useMemo(
    () =>
      cart
        .map(line => {
          const item = CASCADES_GUEST_STAY_DINING_MENU.find(
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
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.cascadesGuestStayScroll,
          {paddingTop: insets.top + cascadesGuestStayVerticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <CascadesGuestStayScreenHeader
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
            <View key={line.item.id} style={styles.cascadesGuestStayItemCard}>
              <View style={styles.cascadesGuestStayItemHeader}>
                <Text style={styles.cascadesGuestStayItemName}>
                  {line.item.name}
                </Text>
                <Text style={styles.cascadesGuestStayItemPrice}>
                  {cascadesGuestStayFormatPrice(
                    line.item.price * line.quantity,
                  )}
                </Text>
              </View>
              <Text style={styles.cascadesGuestStayNote}>+ Add note</Text>
              <View style={styles.cascadesGuestStayStepper}>
                <Pressable
                  onPress={() => removeFromCart(line.item.id)}
                  style={styles.cascadesGuestStayStep}>
                  <Text style={styles.cascadesGuestStayStepLabel}>−</Text>
                </Pressable>
                <Text style={styles.cascadesGuestStayQty}>{line.quantity}</Text>
                <Pressable
                  onPress={() => addToCart(line.item.id)}
                  style={styles.cascadesGuestStayStep}>
                  <Text style={styles.cascadesGuestStayStepLabel}>+</Text>
                </Pressable>
              </View>
            </View>
          );
        })}

        <View style={styles.cascadesGuestStaySummary}>
          <View style={styles.cascadesGuestStaySummaryRow}>
            <Text style={styles.cascadesGuestStaySummaryLabel}>Guest</Text>
            <Text style={styles.cascadesGuestStaySummaryValue}>
              {CASCADES_GUEST_STAY_GUEST.name}
            </Text>
          </View>
          <View style={styles.cascadesGuestStaySummaryRow}>
            <Text style={styles.cascadesGuestStaySummaryLabel}>Room</Text>
            <Text style={styles.cascadesGuestStaySummaryValue}>
              {CASCADES_GUEST_STAY_GUEST.room}
            </Text>
          </View>
          <View style={styles.cascadesGuestStaySummaryRow}>
            <Text style={styles.cascadesGuestStaySummaryLabel}>Est. Wait</Text>
            <Text style={styles.cascadesGuestStaySummaryValue}>
              {`~${CASCADES_GUEST_STAY_GUEST.estimatedWaitMin} min`}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayDivider} />
          <View style={styles.cascadesGuestStaySummaryRow}>
            <Text style={styles.cascadesGuestStayTotalLabel}>Total</Text>
            <Text style={styles.cascadesGuestStayTotal}>
              {cascadesGuestStayFormatPrice(cartTotal)}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={handlePlaceOrder}
          style={styles.cascadesGuestStayPlaceOrder}>
          <Text style={styles.cascadesGuestStayPlaceOrderLabel}>
            {`Place Order • ${cascadesGuestStayFormatPrice(cartTotal)}`}
          </Text>
        </Pressable>
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
    paddingBottom: cascadesGuestStayVerticalScale(32),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayItemCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    marginBottom: cascadesGuestStayVerticalScale(12),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStayItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStayItemName: {
    color: cascadesGuestStayColors.cream,
    flex: 1,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '600',
    marginRight: cascadesGuestStayScale(12),
  },
  cascadesGuestStayItemPrice: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
  cascadesGuestStayNote: {
    color: cascadesGuestStayColors.link,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    marginTop: cascadesGuestStayScale(6),
  },
  cascadesGuestStayStepper: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayStep: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(18),
    height: cascadesGuestStayScale(36),
    justifyContent: 'center',
    width: cascadesGuestStayScale(36),
  },
  cascadesGuestStayStepLabel: {
    color: cascadesGuestStayColors.background,
    fontSize: cascadesGuestStayScale(20),
    fontWeight: '700',
  },
  cascadesGuestStayQty: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '600',
  },
  cascadesGuestStaySummary: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    gap: cascadesGuestStayVerticalScale(10),
    marginTop: cascadesGuestStayVerticalScale(8),
    padding: cascadesGuestStayScale(20),
  },
  cascadesGuestStaySummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStaySummaryLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
  },
  cascadesGuestStaySummaryValue: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayDivider: {
    backgroundColor: 'rgba(122, 154, 181, 0.2)',
    height: 1,
    marginVertical: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayTotalLabel: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '600',
  },
  cascadesGuestStayTotal: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '700',
  },
  cascadesGuestStayPlaceOrder: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(16),
    marginTop: cascadesGuestStayVerticalScale(20),
    paddingVertical: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayPlaceOrderLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
});
