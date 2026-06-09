import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  CascadesGuestStayMapVenue,
  cascadesGuestStayGetMapCategoryColor,
  cascadesGuestStayGetMapPinIcon,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapData/CascadesGuestStayMapData';
import {CASCADES_GUEST_STAY_MAP_PIN_SIZE_LIST} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapStyle/CascadesGuestStayMapStyle';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayMapVenueRowProps = {
  venue: CascadesGuestStayMapVenue;
  isSelected: boolean;
  onPress: () => void;
};

export function CascadesGuestStayMapVenueRow({
  venue,
  isSelected,
  onPress,
}: CascadesGuestStayMapVenueRowProps) {
  const color = cascadesGuestStayGetMapCategoryColor(venue.category);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.cascadesGuestStayRow,
        isSelected && {
          backgroundColor: `${color}10`,
          borderColor: `${color}40`,
        },
      ]}>
      <View
        style={[
          styles.cascadesGuestStayIconWrap,
          {backgroundColor: `${color}14`},
        ]}>
        <Image
          source={cascadesGuestStayGetMapPinIcon(venue.category)}
          style={styles.cascadesGuestStayIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cascadesGuestStayInfo}>
        <Text style={styles.cascadesGuestStayTitle}>{venue.title}</Text>
        <Text style={styles.cascadesGuestStayMeta}>
          {`${venue.level} · ${venue.hours}`}
        </Text>
      </View>
      <View style={styles.cascadesGuestStayRating}>
        <Text style={styles.cascadesGuestStayStar}>★</Text>
        <Text style={styles.cascadesGuestStayRatingValue}>
          {venue.rating.toFixed(1)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayRow: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'rgba(250, 191, 20, 0.06)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: cascadesGuestStayVerticalScale(8),
    padding: cascadesGuestStayScale(12),
  },
  cascadesGuestStayIconWrap: {
    alignItems: 'center',
    borderRadius: cascadesGuestStayScale(20),
    height: cascadesGuestStayScale(40),
    justifyContent: 'center',
    width: cascadesGuestStayScale(40),
  },
  cascadesGuestStayIcon: {
    height: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE_LIST),
    width: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE_LIST),
  },
  cascadesGuestStayInfo: {
    flex: 1,
    marginHorizontal: cascadesGuestStayScale(12),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '600',
  },
  cascadesGuestStayMeta: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(12),
    fontWeight: '500',
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayRating: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(4),
  },
  cascadesGuestStayStar: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayRatingValue: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(12),
    fontWeight: '600',
  },
});
