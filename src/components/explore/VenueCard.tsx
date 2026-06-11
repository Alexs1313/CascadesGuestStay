import {useAdaptive} from '../../hooks/useAdaptive';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  CATEGORY_BADGE,
  Venue,
} from '../../data/explore';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type VenueCardProps = {
  venue: Venue;
  isSaved: boolean;
  onToggleSave: () => void;
};

export function VenueCard({
  venue,
  isSaved,
  onToggleSave,
}: VenueCardProps) {
  const adaptive = useAdaptive();
  return (
    <View style={styles.VenueCardCardFacet}>
      <View
        style={[
          styles.VenueCardImageCardMantle,
          {height: adaptive.venueCardImageHeight},
        ]}>
        <Image
          source={venue.image}
          style={styles.VenueCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            colors.heroGradientStart,
            'rgba(24, 39, 56, 0.4)',
            colors.heroGradientEnd,
          ]}
          style={styles.VenueCardImageGradientVeil}
        />
        <View style={styles.VenueCardImageOverlayVeil}>
          <View style={styles.VenueCardCategoryBadgeEnclave}>
            <Text style={styles.VenueCardCategoryBadgeTextFiligree}>
              {CATEGORY_BADGE[venue.category]}
            </Text>
          </View>
          <Pressable
            onPress={onToggleSave}
            style={styles.VenueCardSaveBtn}
            hitSlop={8}>
            <Text
              style={[
                styles.VenueCardHeart,
                isSaved && styles.VenueCardHeartSaved,
              ]}>
              {isSaved ? '♥' : '♡'}
            </Text>
          </Pressable>
        </View>
        <View style={styles.VenueCardImageTitlesFiligree}>
          <Text style={styles.VenueCardTitleFiligree}>{venue.title}</Text>
          <Text style={styles.VenueCardSubtitleFiligree}>{venue.subtitle}</Text>
        </View>
      </View>

      <View style={styles.VenueCardBody}>
        <Text style={styles.VenueCardDescription}>
          {venue.description}
        </Text>

        <View style={styles.VenueCardMeta}>
          <View style={styles.VenueCardRating}>
            <Text style={styles.VenueCardStar}>★</Text>
            <Text style={styles.VenueCardRatingValue}>
              {venue.rating.toFixed(1)}
            </Text>
            <Text style={styles.VenueCardReviewCount}>
              ({venue.reviewCount})
            </Text>
          </View>
          <Text style={styles.VenueCardDot}>·</Text>
          <View style={styles.VenueCardMetaItem}>
            <Text style={styles.VenueCardMetaIconSigil}>📍</Text>
            <Text style={styles.VenueCardMetaTextFiligree}>
              {venue.distanceLabel}
            </Text>
          </View>
          <Text style={styles.VenueCardDot}>·</Text>
          <View style={styles.VenueCardMetaItem}>
            <Text style={styles.VenueCardMetaIconSigil}>🕐</Text>
            <Text style={styles.VenueCardMetaTextFiligree}>{venue.hours}</Text>
          </View>
        </View>

        <View style={styles.VenueCardTags}>
          {venue.tags.map(tag => (
            <View key={tag} style={styles.VenueCardTag}>
              <Text style={styles.VenueCardTagTextFiligree}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

VenueCardCardFacet: {
  backgroundColor: colors.card,
  borderColor: colors.goldBorder,
  borderRadius: 24,
  borderWidth: 1,
  overflow: 'hidden',
},
VenueCardImageCardMantle: {
  position: 'relative',
},
VenueCardImagePanel: {
  height: '100%',
  width: '100%',
},
VenueCardImageGradientVeil: {
  ...StyleSheet.absoluteFillObject,
},
VenueCardImageOverlayVeil: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  left: 12,
  position: 'absolute',
  right: 12,
  top: 12,
},
VenueCardCategoryBadgeEnclave: {
  backgroundColor: 'rgba(12, 24, 36, 0.75)',
  borderColor: 'rgba(250, 191, 20, 0.3)',
  borderRadius: 100,
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 4,
  justifyContent: 'center',
  alignItems: 'center',
},
VenueCardCategoryBadgeTextFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansRegular,
  fontSize: 10,
  letterSpacing: 1,
  textTransform: 'uppercase',
},
VenueCardSaveBtn: {
  alignItems: 'center',
  backgroundColor: 'rgba(12, 24, 36, 0.75)',
  borderRadius: 100,
  height: 32,
  justifyContent: 'center',
  width: 32,
},
VenueCardHeart: {
  color: colors.cream,
  fontSize: 16,
},
VenueCardHeartSaved: {
  color: colors.gold,
},
VenueCardImageTitlesFiligree: {
  bottom: 12,
  left: 12,
  position: 'absolute',
  right: 12,
},
VenueCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 18,
  fontWeight: '700',
},
VenueCardSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 2,
},
VenueCardBody: {
  padding: 16,
},
VenueCardDescription: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
  lineHeight: 19.5,
},
VenueCardMeta: {
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 4,
  marginTop: 12,
},
VenueCardRating: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 4,
},
VenueCardStar: {
  color: colors.gold,
  fontSize: 12,
},
VenueCardRatingValue: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
},
VenueCardReviewCount: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
},
VenueCardDot: {
  color: '#3A5A75',
  fontSize: 16,
},
VenueCardMetaItem: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 4,
  maxWidth: '40%',
},
VenueCardMetaIconSigil: {
  fontSize: 11,
},
VenueCardMetaTextFiligree: {
  color: colors.body,
  flexShrink: 1,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  lineHeight: 18,
},
VenueCardTags: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 8,
  marginTop: 12,
},
VenueCardTag: {
  backgroundColor: 'rgba(250, 191, 20, 0.08)',
  borderColor: 'rgba(250, 191, 20, 0.15)',
  borderRadius: 100,
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 5,
},
VenueCardTagTextFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
},
});
