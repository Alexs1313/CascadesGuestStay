import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CascadesGuestStayCategoryTabs} from '../../CascadesGuestStayComponents/CascadesGuestStayDining/CascadesGuestStayCategoryTabs/CascadesGuestStayCategoryTabs';
import {CascadesGuestStayMenuItemCard} from '../../CascadesGuestStayComponents/CascadesGuestStayDining/CascadesGuestStayMenuItemCard/CascadesGuestStayMenuItemCard';
import {CascadesGuestStayScreenHeader} from '../../CascadesGuestStayComponents/CascadesGuestStayCommon/CascadesGuestStayScreenHeader/CascadesGuestStayScreenHeader';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {
  CascadesGuestStayDiningCategory,
  CASCADES_GUEST_STAY_DINING_MENU,
} from '../../CascadesGuestStayConstants/CascadesGuestStayDining/CascadesGuestStayDiningMenu/CascadesGuestStayDiningMenu';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import {cascadesGuestStayFormatPrice} from '../../CascadesGuestStayUtils/cascadesGuestStayFormatPrice';
import type {CascadesGuestStayStackParamList} from '../../CascadesGuestStayNavTypes';

type CascadesGuestStayRoomDiningScreenProps = {
  navigation: StackNavigationProp<CascadesGuestStayStackParamList, 'RoomDining'>;
};

export function CascadesGuestStayRoomDiningScreen({
  navigation,
}: CascadesGuestStayRoomDiningScreenProps) {
  const insets = useSafeAreaInsets();
  const [category, setCategory] =
    useState<CascadesGuestStayDiningCategory>('breakfast');
  const {cart, cartCount, cartTotal, addToCart, removeFromCart} =
    useCascadesGuestStayApp();

  const items = useMemo(
    () =>
      CASCADES_GUEST_STAY_DINING_MENU.filter(
        item => item.category === category,
      ),
    [category],
  );

  const getQuantity = (itemId: string) =>
    cart.find(line => line.itemId === itemId)?.quantity ?? 0;

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
          title="Room Dining"
          onClose={() => navigation.goBack()}
        />
        <CascadesGuestStayCategoryTabs
          activeCategory={category}
          onCategoryChange={setCategory}
        />

        <View style={styles.cascadesGuestStayList}>
          {items.map(item => (
            <CascadesGuestStayMenuItemCard
              key={item.id}
              item={item}
              quantity={getQuantity(item.id)}
              onAdd={() => addToCart(item.id)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </View>
      </ScrollView>

      {cartCount > 0 && (
        <Pressable
          onPress={() => navigation.navigate('Order')}
          style={styles.cascadesGuestStayCartBar}>
          <View style={styles.cascadesGuestStayCartCount}>
            <Text style={styles.cascadesGuestStayCartCountText}>
              {cartCount}
            </Text>
          </View>
          <Text style={styles.cascadesGuestStayCartLabel}>View Order</Text>
          <Text style={styles.cascadesGuestStayCartTotal}>
            {cascadesGuestStayFormatPrice(cartTotal)}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.background,
  },
  cascadesGuestStayScroll: {
    paddingBottom: cascadesGuestStayVerticalScale(100),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayList: {
    gap: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayVerticalScale(20),
  },
  cascadesGuestStayCartBar: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(16),
    bottom: cascadesGuestStayVerticalScale(18),
    flexDirection: 'row',
    left: cascadesGuestStayScale(20),
    paddingHorizontal: cascadesGuestStayScale(20),
    paddingVertical: cascadesGuestStayVerticalScale(14),
    position: 'absolute',
    right: cascadesGuestStayScale(20),
  },
  cascadesGuestStayCartCount: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.background,
    borderRadius: cascadesGuestStayScale(16),
    height: cascadesGuestStayScale(28),
    justifyContent: 'center',
    width: cascadesGuestStayScale(28),
  },
  cascadesGuestStayCartCountText: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '700',
  },
  cascadesGuestStayCartLabel: {
    color: cascadesGuestStayColors.background,
    flex: 1,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '700',
    marginLeft: cascadesGuestStayScale(12),
  },
  cascadesGuestStayCartTotal: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '700',
  },
});
