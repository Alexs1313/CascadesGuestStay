import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CascadesGuestStaySavedVenueCard} from '../../CascadesGuestStayComponents/CascadesGuestStaySaved/CascadesGuestStaySavedVenueCard/CascadesGuestStaySavedVenueCard';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CASCADES_GUEST_STAY_EXPLORE_VENUES} from '../../CascadesGuestStayConstants/CascadesGuestStayExplore/CascadesGuestStayExploreData/CascadesGuestStayExploreData';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

export function CascadesGuestStaySavedScreen() {
  const {savedVenueIds, toggleSavedVenue} = useCascadesGuestStayApp();

  const savedVenues = useMemo(
    () =>
      CASCADES_GUEST_STAY_EXPLORE_VENUES.filter(venue =>
        savedVenueIds.includes(venue.id),
      ),
    [savedVenueIds],
  );

  const countLabel =
    savedVenues.length === 1
      ? '1 saved place'
      : `${savedVenues.length} saved places`;

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.cascadesGuestStayScroll,
          savedVenues.length === 0 && styles.cascadesGuestStayScrollEmpty,
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={{
            marginBottom: cascadesGuestStayVerticalScale(4),
          }}
          colors={[
            cascadesGuestStayColors.headerGradientStart,
            cascadesGuestStayColors.headerGradientEnd,
          ]}>
          <View style={styles.cascadesGuestStayHeaderInner}>
            <Text style={styles.cascadesGuestStayEyebrow}>Your Collection</Text>
            <Text style={styles.cascadesGuestStayTitle}>Saved Places</Text>
            <View style={styles.cascadesGuestStayCountRow}>
              <Text style={styles.cascadesGuestStayHeart}>♥</Text>
              <Text style={styles.cascadesGuestStayCount}>{countLabel}</Text>
            </View>
          </View>
        </LinearGradient>

        {savedVenues.length === 0 ? (
          <View style={styles.cascadesGuestStayEmpty}>
            <View style={styles.cascadesGuestStayEmptyIconWrap}>
              <Text style={styles.cascadesGuestStayEmptyIcon}>♡</Text>
            </View>
            <Text style={styles.cascadesGuestStayEmptyTitle}>
              No saved places yet
            </Text>
            <Text style={styles.cascadesGuestStayEmptyText}>
              Tap the ♡ on any venue in Explore to save it here for easy access.
            </Text>
          </View>
        ) : (
          <View style={styles.cascadesGuestStayList}>
            {savedVenues.map(venue => (
              <CascadesGuestStaySavedVenueCard
                key={venue.id}
                venue={venue}
                onRemove={() => toggleSavedVenue(venue.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    backgroundColor: cascadesGuestStayColors.background,
    flex: 1,
  },
  cascadesGuestStayScroll: {
    paddingBottom: cascadesGuestStayVerticalScale(100),
  },
  cascadesGuestStayScrollEmpty: {
    flexGrow: 1,
  },
  cascadesGuestStayHeaderInner: {
    paddingBottom: cascadesGuestStayVerticalScale(16),
    paddingHorizontal: cascadesGuestStayScale(20),
    paddingTop: cascadesGuestStayVerticalScale(50),
  },
  cascadesGuestStayEyebrow: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    textTransform: 'uppercase',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '700',
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayCountRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
    marginTop: cascadesGuestStayVerticalScale(8),
  },
  cascadesGuestStayHeart: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(13),
  },
  cascadesGuestStayCount: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    lineHeight: cascadesGuestStayScale(19.5),
  },
  cascadesGuestStayList: {
    gap: cascadesGuestStayScale(16),
    paddingHorizontal: cascadesGuestStayScale(20),
    paddingTop: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayEmpty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: cascadesGuestStayScale(20),
    paddingVertical: cascadesGuestStayVerticalScale(80),
  },
  cascadesGuestStayEmptyIconWrap: {
    alignItems: 'center',
    backgroundColor: 'rgba(250, 191, 20, 0.08)',
    borderColor: 'rgba(250, 191, 20, 0.2)',
    borderRadius: cascadesGuestStayScale(100),
    borderWidth: 1,
    height: cascadesGuestStayScale(80),
    justifyContent: 'center',
    marginBottom: cascadesGuestStayVerticalScale(16),
    width: cascadesGuestStayScale(80),
  },
  cascadesGuestStayEmptyIcon: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(32),
  },
  cascadesGuestStayEmptyTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(18),
    fontWeight: '600',
    marginBottom: cascadesGuestStayVerticalScale(6),
    textAlign: 'center',
  },
  cascadesGuestStayEmptyText: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
    lineHeight: cascadesGuestStayScale(22.4),
    maxWidth: cascadesGuestStayScale(354),
    textAlign: 'center',
  },
  cascadesGuestStayHint: {
    backgroundColor: 'rgba(250, 191, 20, 0.05)',
    borderColor: 'rgba(250, 191, 20, 0.12)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    marginTop: cascadesGuestStayVerticalScale(16),
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayHintText: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    textAlign: 'center',
  },
});
