import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CascadesGuestStayVenue} from '../../../CascadesGuestStayConstants/CascadesGuestStayExplore/CascadesGuestStayExploreData/CascadesGuestStayExploreData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStaySavedVenueCardProps = {
  venue: CascadesGuestStayVenue;
  onRemove: () => void;
};

function cascadesGuestStayGetOpeningTime(hours: string): string {
  const opening = hours.split(/[–-]/)[0]?.trim();
  return opening || hours;
}

export function CascadesGuestStaySavedVenueCard({
  venue,
  onRemove,
}: CascadesGuestStaySavedVenueCardProps) {
  const openingTime = cascadesGuestStayGetOpeningTime(venue.hours);

  return (
    <View style={styles.cascadesGuestStayCard}>
      <View style={styles.cascadesGuestStayImageWrap}>
        <Image
          source={venue.image}
          style={styles.cascadesGuestStayImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(24, 39, 56, 0.85)']}
          locations={[0.4, 1]}
          style={styles.cascadesGuestStayImageGradient}
        />
        <Pressable
          onPress={onRemove}
          style={styles.cascadesGuestStayRemoveBtn}
          hitSlop={8}
          accessibilityLabel={`Remove ${venue.title}`}
          accessibilityRole="button">
          <Image
            source={require('../../../CascadesGuestStayAssets/GuestStayremove.png')}
          />
        </Pressable>
        <View style={styles.cascadesGuestStayImageTitles}>
          <Text style={styles.cascadesGuestStayTitle}>{venue.title}</Text>
          <Text style={styles.cascadesGuestStaySubtitle}>{venue.subtitle}</Text>
        </View>
      </View>

      <View style={styles.cascadesGuestStayFooter}>
        <View style={styles.cascadesGuestStayMetaLeft}>
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
        </View>
        <View style={styles.cascadesGuestStayMetaRight}>
          <Text style={styles.cascadesGuestStayMetaIcon}>🕐</Text>
          <Text
            style={styles.cascadesGuestStayHours}
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
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'rgba(250, 191, 20, 0.08)',
    borderRadius: cascadesGuestStayScale(24),
    borderWidth: 1,
    overflow: 'hidden',
  },
  cascadesGuestStayImageWrap: {
    height: cascadesGuestStayVerticalScale(144),
    position: 'relative',
  },
  cascadesGuestStayImage: {
    height: '100%',
    width: '100%',
  },
  cascadesGuestStayImageGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cascadesGuestStayRemoveBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(12, 24, 36, 0.75)',
    borderRadius: cascadesGuestStayScale(100),
    height: cascadesGuestStayScale(32),
    justifyContent: 'center',
    position: 'absolute',
    right: cascadesGuestStayScale(12),
    top: cascadesGuestStayScale(12),
    width: cascadesGuestStayScale(32),
  },
  cascadesGuestStayRemoveIcon: {
    fontSize: cascadesGuestStayScale(14),
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
    fontSize: cascadesGuestStayScale(17),
    fontWeight: '700',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayMetaLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    flexShrink: 1,
    gap: cascadesGuestStayScale(4),
    marginRight: cascadesGuestStayScale(8),
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
    flexShrink: 1,
    gap: cascadesGuestStayScale(4),
  },
  cascadesGuestStayMetaIcon: {
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayMetaText: {
    color: cascadesGuestStayColors.body,
    flexShrink: 1,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayMetaRight: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
    gap: cascadesGuestStayScale(4),
    maxWidth: '45%',
  },
  cascadesGuestStayHours: {
    color: cascadesGuestStayColors.body,
    flexShrink: 1,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
});
