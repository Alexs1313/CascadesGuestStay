import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  CASCADES_GUEST_STAY_CATEGORY_BADGE,
  CascadesGuestStayVenue,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayExplore/CascadesGuestStayExploreData/CascadesGuestStayExploreData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayVenueCardProps = {
  venue: CascadesGuestStayVenue;
  isSaved: boolean;
  onToggleSave: () => void;
};

export function CascadesGuestStayVenueCard({
  venue,
  isSaved,
  onToggleSave,
}: CascadesGuestStayVenueCardProps) {
  return (
    <View style={styles.cascadesGuestStayCard}>
      <View style={styles.cascadesGuestStayImageWrap}>
        <Image
          source={venue.image}
          style={styles.cascadesGuestStayImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            cascadesGuestStayColors.heroGradientStart,
            'rgba(24, 39, 56, 0.4)',
            cascadesGuestStayColors.heroGradientEnd,
          ]}
          style={styles.cascadesGuestStayImageGradient}
        />
        <View style={styles.cascadesGuestStayImageOverlay}>
          <View style={styles.cascadesGuestStayCategoryBadge}>
            <Text style={styles.cascadesGuestStayCategoryBadgeText}>
              {CASCADES_GUEST_STAY_CATEGORY_BADGE[venue.category]}
            </Text>
          </View>
          <Pressable
            onPress={onToggleSave}
            style={styles.cascadesGuestStaySaveBtn}
            hitSlop={8}>
            <Text
              style={[
                styles.cascadesGuestStayHeart,
                isSaved && styles.cascadesGuestStayHeartSaved,
              ]}>
              {isSaved ? '♥' : '♡'}
            </Text>
          </Pressable>
        </View>
        <View style={styles.cascadesGuestStayImageTitles}>
          <Text style={styles.cascadesGuestStayTitle}>{venue.title}</Text>
          <Text style={styles.cascadesGuestStaySubtitle}>{venue.subtitle}</Text>
        </View>
      </View>

      <View style={styles.cascadesGuestStayBody}>
        <Text style={styles.cascadesGuestStayDescription}>
          {venue.description}
        </Text>

        <View style={styles.cascadesGuestStayMeta}>
          <View style={styles.cascadesGuestStayRating}>
            <Text style={styles.cascadesGuestStayStar}>★</Text>
            <Text style={styles.cascadesGuestStayRatingValue}>
              {venue.rating.toFixed(1)}
            </Text>
            <Text style={styles.cascadesGuestStayReviewCount}>
              ({venue.reviewCount})
            </Text>
          </View>
          <Text style={styles.cascadesGuestStayDot}>·</Text>
          <View style={styles.cascadesGuestStayMetaItem}>
            <Text style={styles.cascadesGuestStayMetaIcon}>📍</Text>
            <Text style={styles.cascadesGuestStayMetaText}>
              {venue.distanceLabel}
            </Text>
          </View>
          <Text style={styles.cascadesGuestStayDot}>·</Text>
          <View style={styles.cascadesGuestStayMetaItem}>
            <Text style={styles.cascadesGuestStayMetaIcon}>🕐</Text>
            <Text style={styles.cascadesGuestStayMetaText}>{venue.hours}</Text>
          </View>
        </View>

        <View style={styles.cascadesGuestStayTags}>
          {venue.tags.map(tag => (
            <View key={tag} style={styles.cascadesGuestStayTag}>
              <Text style={styles.cascadesGuestStayTagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: cascadesGuestStayColors.goldBorder,
    borderRadius: cascadesGuestStayScale(24),
    borderWidth: 1,
    overflow: 'hidden',
  },
  cascadesGuestStayImageWrap: {
    height: cascadesGuestStayVerticalScale(176),
    position: 'relative',
  },
  cascadesGuestStayImage: {
    height: '100%',
    width: '100%',
  },
  cascadesGuestStayImageGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cascadesGuestStayImageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: cascadesGuestStayScale(12),
    position: 'absolute',
    right: cascadesGuestStayScale(12),
    top: cascadesGuestStayScale(12),
  },
  cascadesGuestStayCategoryBadge: {
    backgroundColor: 'rgba(12, 24, 36, 0.75)',
    borderColor: 'rgba(250, 191, 20, 0.3)',
    borderRadius: cascadesGuestStayScale(100),
    borderWidth: 1,
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cascadesGuestStayCategoryBadgeText: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(10),
    letterSpacing: cascadesGuestStayScale(1),
    textTransform: 'uppercase',
  },
  cascadesGuestStaySaveBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(12, 24, 36, 0.75)',
    borderRadius: cascadesGuestStayScale(100),
    height: cascadesGuestStayScale(32),
    justifyContent: 'center',
    width: cascadesGuestStayScale(32),
  },
  cascadesGuestStayHeart: {
    color: cascadesGuestStayColors.cream,
    fontSize: cascadesGuestStayScale(16),
  },
  cascadesGuestStayHeartSaved: {
    color: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayImageTitles: {
    bottom: cascadesGuestStayScale(12),
    left: cascadesGuestStayScale(12),
    position: 'absolute',
    right: cascadesGuestStayScale(12),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '700',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayBody: {
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStayDescription: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    lineHeight: cascadesGuestStayScale(19.5),
  },
  cascadesGuestStayMeta: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: cascadesGuestStayScale(4),
    marginTop: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayRating: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(4),
  },
  cascadesGuestStayStar: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayRatingValue: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '600',
  },
  cascadesGuestStayReviewCount: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayDot: {
    color: '#3A5A75',
    fontSize: cascadesGuestStayScale(16),
  },
  cascadesGuestStayMetaItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(4),
    maxWidth: '40%',
  },
  cascadesGuestStayMetaIcon: {
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayMetaText: {
    color: cascadesGuestStayColors.body,
    flexShrink: 1,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    lineHeight: cascadesGuestStayScale(18),
  },
  cascadesGuestStayTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: cascadesGuestStayScale(8),
    marginTop: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayTag: {
    backgroundColor: 'rgba(250, 191, 20, 0.08)',
    borderColor: 'rgba(250, 191, 20, 0.15)',
    borderRadius: cascadesGuestStayScale(100),
    borderWidth: 1,
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(5),
  },
  cascadesGuestStayTagText: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
});
