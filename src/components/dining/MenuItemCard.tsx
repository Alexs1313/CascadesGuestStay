import {useAdaptive} from '../../hooks/useAdaptive';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../../data/dining';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';

import {formatPrice} from '../../utils/formatPrice';

type MenuItemCardProps = {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

export function MenuItemCard({
  item,
  quantity,
  onAdd,
  onRemove,
}: MenuItemCardProps) {
  const adaptive = useAdaptive();
  return (
    <View style={styles.MenuItemCardCardFacet}>
      <Image
        source={item.image}
        style={[
          styles.MenuItemCardImagePanel,
          {
            width: adaptive.menuItemImageSize,
            height: adaptive.menuItemImageSize,
          },
        ]}
      />
      <View style={styles.MenuItemCardContent}>
        <Text style={styles.MenuItemCardTitleFiligree}>{item.name}</Text>
        <Text style={styles.MenuItemCardDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.MenuItemCardMeta}>
          <Text style={styles.MenuItemCardPrice}>
            {formatPrice(item.price)}
          </Text>
          <Text style={styles.MenuItemCardTime}>
            {`⏱ ${item.prepTimeMin} min`}
          </Text>
        </View>
        <View style={styles.MenuItemCardActions}>
          {quantity > 0 ? (
            <View style={styles.MenuItemCardStepper}>
              <Pressable onPress={onRemove} style={styles.MenuItemCardStep}>
                <Text style={styles.MenuItemCardStepLabelFiligree}>−</Text>
              </Pressable>
              <Text style={styles.MenuItemCardQty}>{quantity}</Text>
              <Pressable onPress={onAdd} style={styles.MenuItemCardStep}>
                <Text style={styles.MenuItemCardStepLabelFiligree}>+</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable onPress={onAdd} style={styles.MenuItemCardAdd}>
              <Text style={styles.MenuItemCardAddLabelFiligree}>+ Add</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

MenuItemCardCardFacet: {
  backgroundColor: colors.card,
  borderRadius: 20,
  flexDirection: 'row',
  gap: 14,
  padding: 14,
},
MenuItemCardImagePanel: {
  borderRadius: 14,
},
MenuItemCardContent: {
  flex: 1,
},
MenuItemCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
},
MenuItemCardDescription: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  lineHeight: 18,
  marginTop: 4,
},
MenuItemCardMeta: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 12,
  marginTop: 8,
},
MenuItemCardPrice: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '700',
},
MenuItemCardTime: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
},
MenuItemCardActions: {
  alignItems: 'flex-end',
  marginTop: 8,
},
MenuItemCardAdd: {
  backgroundColor: colors.gold,
  borderRadius: 100,
  paddingHorizontal: 16,
  paddingVertical: 8,
},
MenuItemCardAddLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
},
MenuItemCardStepper: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 10,
},
MenuItemCardStep: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 16,
  height: 32,
  justifyContent: 'center',
  width: 32,
},
MenuItemCardStepLabelFiligree: {
  color: colors.background,
  fontSize: 18,
  fontWeight: '700',
},
MenuItemCardQty: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
  minWidth: 20,
  textAlign: 'center',
},
});
