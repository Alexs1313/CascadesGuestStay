import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  MapVenue,
  getMapCategoryColor,
  getMapPinIcon,
} from '../../data/map';
import {MAP_PIN_SIZE_LIST} from '../../constants/mapStyle';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type MapVenueRowProps = {
  venue: MapVenue;
  isSelected: boolean;
  onPress: () => void;
};

export function MapVenueRow({
  venue,
  isSelected,
  onPress,
}: MapVenueRowProps) {
  const color = getMapCategoryColor(venue.category);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.MapVenueRowRowLintel,
        isSelected && {
          backgroundColor: `${color}10`,
          borderColor: `${color}40`,
        },
      ]}>
      <View
        style={[
          styles.MapVenueRowIconCardMantle,
          {backgroundColor: `${color}14`},
        ]}>
        <Image
          source={getMapPinIcon(venue.category)}
          style={styles.MapVenueRowIconSigil}
          resizeMode="contain"
        />
      </View>
      <View style={styles.MapVenueRowInfo}>
        <Text style={styles.MapVenueRowTitleFiligree}>{venue.title}</Text>
        <Text style={styles.MapVenueRowMeta}>
          {`${venue.level} · ${venue.hours}`}
        </Text>
      </View>
      <View style={styles.MapVenueRowRating}>
        <Text style={styles.MapVenueRowStar}>★</Text>
        <Text style={styles.MapVenueRowRatingValue}>
          {venue.rating.toFixed(1)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

MapVenueRowRowLintel: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderColor: 'rgba(250, 191, 20, 0.06)',
  borderRadius: 16,
  borderWidth: 1,
  flexDirection: 'row',
  marginBottom: 8,
  padding: 12,
},
MapVenueRowIconCardMantle: {
  alignItems: 'center',
  borderRadius: 20,
  height: 40,
  justifyContent: 'center',
  width: 40,
},
MapVenueRowIconSigil: {
  height: MAP_PIN_SIZE_LIST,
  width: MAP_PIN_SIZE_LIST,
},
MapVenueRowInfo: {
  flex: 1,
  marginHorizontal: 12,
},
MapVenueRowTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '600',
},
MapVenueRowMeta: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 12,
  fontWeight: '500',
  marginTop: 2,
},
MapVenueRowRating: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 4,
},
MapVenueRowStar: {
  color: colors.gold,
  fontSize: 11,
},
MapVenueRowRatingValue: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 12,
  fontWeight: '600',
},
});
