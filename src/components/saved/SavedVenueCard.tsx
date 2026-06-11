import {useAdaptive} from '../../hooks/useAdaptive';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../data/assets';
import {Venue} from '../../data/explore';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type SavedVenueCardProps = {
  venue: Venue;
  onRemove: () => void;
};

function SavedVenueCardGetOpeningTime(hours: string): string {
  const opening = hours.split(/[–-]/)[0]?.trim();
  return opening || hours;
}

export function SavedVenueCard({
  venue,
  onRemove,
}: SavedVenueCardProps) {
  const adaptive = useAdaptive();
  const openingTime = SavedVenueCardGetOpeningTime(venue.hours);

  return (
    <View style={styles.SavedVenueCardCardFacet}>
      <View
        style={[
          styles.SavedVenueCardImageCardMantle,
          {height: adaptive.savedCardImageHeight},
        ]}>
        <Image
          source={venue.image}
          style={styles.SavedVenueCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(24, 39, 56, 0.85)']}
          locations={[0.4, 1]}
          style={styles.SavedVenueCardImageGradientVeil}
        />
        <Pressable
          onPress={onRemove}
          style={styles.SavedVenueCardRemoveBtn}
          hitSlop={8}
          accessibilityLabel={`Remove ${venue.title}`}
          accessibilityRole="button">
          <Image
            source={icons.remove}
          />
        </Pressable>
        <View style={styles.SavedVenueCardImageTitlesFiligree}>
          <Text style={styles.SavedVenueCardTitleFiligree}>{venue.title}</Text>
          <Text style={styles.SavedVenueCardSubtitleFiligree}>{venue.subtitle}</Text>
        </View>
      </View>

      <View style={styles.SavedVenueCardFooter}>
        <View style={styles.SavedVenueCardMetaLeft}>
          <View style={styles.SavedVenueCardRating}>
            <Text style={styles.SavedVenueCardStar}>★</Text>
            <Text style={styles.SavedVenueCardRatingValue}>
              {venue.rating.toFixed(1)}
            </Text>
            <Text style={styles.SavedVenueCardReviewCount}>
              ({venue.reviewCount})
            </Text>
          </View>
          <Text style={styles.SavedVenueCardDot}>·</Text>
          <View style={styles.SavedVenueCardMetaItem}>
            <Text style={styles.SavedVenueCardMetaIconSigil}>📍</Text>
            <Text style={styles.SavedVenueCardMetaTextFiligree}>
              {venue.distanceLabel}
            </Text>
          </View>
        </View>
        <View style={styles.SavedVenueCardMetaRight}>
          <Text style={styles.SavedVenueCardMetaIconSigil}>🕐</Text>
          <Text
            style={styles.SavedVenueCardHours}
            numberOfLines={1}
            ellipsizeMode="tail">
            {openingTime}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

SavedVenueCardCardFacet: {
  backgroundColor: colors.card,
  borderColor: 'rgba(250, 191, 20, 0.08)',
  borderRadius: 24,
  borderWidth: 1,
  overflow: 'hidden',
},
SavedVenueCardImageCardMantle: {
  position: 'relative',
},
SavedVenueCardImagePanel: {
  height: '100%',
  width: '100%',
},
SavedVenueCardImageGradientVeil: {
  ...StyleSheet.absoluteFillObject,
},
SavedVenueCardRemoveBtn: {
  alignItems: 'center',
  backgroundColor: 'rgba(12, 24, 36, 0.75)',
  borderRadius: 100,
  height: 32,
  justifyContent: 'center',
  position: 'absolute',
  right: 12,
  top: 12,
  width: 32,
},
SavedVenueCardRemoveIconSigil: {
  fontSize: 14,
},
SavedVenueCardImageTitlesFiligree: {
  bottom: 12,
  left: 12,
  position: 'absolute',
  right: 12,
},
SavedVenueCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 17,
  fontWeight: '700',
},
SavedVenueCardSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 2,
},
SavedVenueCardFooter: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 12,
},
SavedVenueCardMetaLeft: {
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1,
  flexShrink: 1,
  gap: 4,
  marginRight: 8,
},
SavedVenueCardRating: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 4,
},
SavedVenueCardStar: {
  color: colors.gold,
  fontSize: 12,
},
SavedVenueCardRatingValue: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
},
SavedVenueCardReviewCount: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
},
SavedVenueCardDot: {
  color: '#3A5A75',
  fontSize: 16,
},
SavedVenueCardMetaItem: {
  alignItems: 'center',
  flexDirection: 'row',
  flexShrink: 1,
  gap: 4,
},
SavedVenueCardMetaIconSigil: {
  fontSize: 11,
},
SavedVenueCardMetaTextFiligree: {
  color: colors.body,
  flexShrink: 1,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
},
SavedVenueCardMetaRight: {
  alignItems: 'center',
  flexDirection: 'row',
  flexShrink: 0,
  gap: 4,
  maxWidth: '45%',
},
SavedVenueCardHours: {
  color: colors.body,
  flexShrink: 1,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
},
});
