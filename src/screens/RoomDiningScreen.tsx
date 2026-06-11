import {useAdaptive} from '../hooks/useAdaptive';
import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CategoryTabs} from '../components/dining/CategoryTabs';
import {MenuItemCard} from '../components/dining/MenuItemCard';
import {ScreenHeader} from '../components/common/ScreenHeader';
import {useApp} from '../context/AppContext';
import {
  DiningCategory,
  DINING_MENU,
} from '../data/dining';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import {formatPrice} from '../utils/formatPrice';
import type {StackParamList} from '../navigation/types';

type RoomDiningScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'RoomDining'>;
};

export function RoomDiningScreen({
  navigation,
}: RoomDiningScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const [category, setCategory] =
    useState<DiningCategory>('breakfast');
  const {cart, cartCount, cartTotal, addToCart, removeFromCart} =
    useApp();

  const items = useMemo(
    () =>
      DINING_MENU.filter(
        item => item.category === category,
      ),
    [category],
  );

  const getQuantity = (itemId: string) =>
    cart.find(line => line.itemId === itemId)?.quantity ?? 0;

  return (
    <View style={styles.RoomDiningScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.RoomDiningScreenScrollVellum,
          {paddingTop: insets.top + adaptive.verticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          scrollable
          title="Room Dining"
          onClose={() => navigation.goBack()}
        />
        <CategoryTabs
          activeCategory={category}
          onCategoryChange={setCategory}
        />

        <View style={styles.RoomDiningScreenList}>
          {items.map(item => (
            <MenuItemCard
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
          style={styles.RoomDiningScreenCartBar}>
          <View style={styles.RoomDiningScreenCartCount}>
            <Text style={styles.RoomDiningScreenCartCountTextFiligree}>
              {cartCount}
            </Text>
          </View>
          <Text style={styles.RoomDiningScreenCartLabelFiligree}>View Order</Text>
          <Text style={styles.RoomDiningScreenCartTotal}>
            {formatPrice(cartTotal)}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

RoomDiningScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
RoomDiningScreenScrollVellum: {
  paddingBottom: 100,
  paddingHorizontal: 20,
},
RoomDiningScreenList: {
  gap: 12,
  marginTop: 20,
},
RoomDiningScreenCartBar: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 16,
  bottom: 18,
  flexDirection: 'row',
  left: 20,
  paddingHorizontal: 20,
  paddingVertical: 14,
  position: 'absolute',
  right: 20,
},
RoomDiningScreenCartCount: {
  alignItems: 'center',
  backgroundColor: colors.background,
  borderRadius: 16,
  height: 28,
  justifyContent: 'center',
  width: 28,
},
RoomDiningScreenCartCountTextFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '700',
},
RoomDiningScreenCartLabelFiligree: {
  color: colors.background,
  flex: 1,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '700',
  marginLeft: 12,
},
RoomDiningScreenCartTotal: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '700',
},
});
