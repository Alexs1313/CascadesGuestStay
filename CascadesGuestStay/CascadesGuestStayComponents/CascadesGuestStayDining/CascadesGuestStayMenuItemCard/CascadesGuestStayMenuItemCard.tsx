import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CascadesGuestStayMenuItem} from '../../../CascadesGuestStayConstants/CascadesGuestStayDining/CascadesGuestStayDiningMenu/CascadesGuestStayDiningMenu';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import {cascadesGuestStayFormatPrice} from '../../../CascadesGuestStayUtils/cascadesGuestStayFormatPrice';

type CascadesGuestStayMenuItemCardProps = {
  item: CascadesGuestStayMenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

export function CascadesGuestStayMenuItemCard({
  item,
  quantity,
  onAdd,
  onRemove,
}: CascadesGuestStayMenuItemCardProps) {
  return (
    <View style={styles.cascadesGuestStayCard}>
      <Image source={item.image} style={styles.cascadesGuestStayImage} />
      <View style={styles.cascadesGuestStayContent}>
        <Text style={styles.cascadesGuestStayTitle}>{item.name}</Text>
        <Text style={styles.cascadesGuestStayDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.cascadesGuestStayMeta}>
          <Text style={styles.cascadesGuestStayPrice}>
            {cascadesGuestStayFormatPrice(item.price)}
          </Text>
          <Text style={styles.cascadesGuestStayTime}>
            {`⏱ ${item.prepTimeMin} min`}
          </Text>
        </View>
        <View style={styles.cascadesGuestStayActions}>
          {quantity > 0 ? (
            <View style={styles.cascadesGuestStayStepper}>
              <Pressable onPress={onRemove} style={styles.cascadesGuestStayStep}>
                <Text style={styles.cascadesGuestStayStepLabel}>−</Text>
              </Pressable>
              <Text style={styles.cascadesGuestStayQty}>{quantity}</Text>
              <Pressable onPress={onAdd} style={styles.cascadesGuestStayStep}>
                <Text style={styles.cascadesGuestStayStepLabel}>+</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable onPress={onAdd} style={styles.cascadesGuestStayAdd}>
              <Text style={styles.cascadesGuestStayAddLabel}>+ Add</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(14),
    padding: cascadesGuestStayScale(14),
  },
  cascadesGuestStayImage: {
    borderRadius: cascadesGuestStayScale(14),
    height: cascadesGuestStayScale(96),
    width: cascadesGuestStayScale(96),
  },
  cascadesGuestStayContent: {
    flex: 1,
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
  },
  cascadesGuestStayDescription: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    lineHeight: cascadesGuestStayScale(18),
    marginTop: cascadesGuestStayScale(4),
  },
  cascadesGuestStayMeta: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(8),
  },
  cascadesGuestStayPrice: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '700',
  },
  cascadesGuestStayTime: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayActions: {
    alignItems: 'flex-end',
    marginTop: cascadesGuestStayScale(8),
  },
  cascadesGuestStayAdd: {
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(100),
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayScale(8),
  },
  cascadesGuestStayAddLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '600',
  },
  cascadesGuestStayStepper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(10),
  },
  cascadesGuestStayStep: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(16),
    height: cascadesGuestStayScale(32),
    justifyContent: 'center',
    width: cascadesGuestStayScale(32),
  },
  cascadesGuestStayStepLabel: {
    color: cascadesGuestStayColors.background,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '700',
  },
  cascadesGuestStayQty: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
    minWidth: cascadesGuestStayScale(20),
    textAlign: 'center',
  },
});
