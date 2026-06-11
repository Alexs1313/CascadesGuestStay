import React, {useMemo} from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SavedVenueCard} from '../components/saved/SavedVenueCard';
import {useApp} from '../context/AppContext';
import {EXPLORE_VENUES} from '../data/explore';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';


export function SavedScreen() {
  const adaptive = useAdaptive();
  const {savedVenueIds, toggleSavedVenue} = useApp();

  const savedVenues = useMemo(
    () =>
      EXPLORE_VENUES.filter(venue =>
        savedVenueIds.includes(venue.id),
      ),
    [savedVenueIds],
  );

  const countLabel =
    savedVenues.length === 1
      ? '1 saved place'
      : `${savedVenues.length} saved places`;

  return (
    <View style={styles.SavedScreenFacetChassis}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.SavedScreenScrollVellum,
          savedVenues.length === 0 && styles.SavedScreenScrollEmpty,
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={{
            marginBottom: adaptive.verticalScale(4),
          }}
          colors={[
            colors.headerGradientStart,
            colors.headerGradientEnd,
          ]}>
          <View style={styles.SavedScreenHeaderInner}>
            <Text style={styles.SavedScreenEyebRowLintel}>Your Collection</Text>
            <Text style={styles.SavedScreenTitleFiligree}>Saved Places</Text>
            <View style={styles.SavedScreenCountRowLintel}>
              <Text style={styles.SavedScreenHeart}>♥</Text>
              <Text style={styles.SavedScreenCount}>{countLabel}</Text>
            </View>
          </View>
        </LinearGradient>

        {savedVenues.length === 0 ? (
          <View style={styles.SavedScreenEmpty}>
            <View style={styles.SavedScreenEmptyIconCardMantle}>
              <Text style={styles.SavedScreenEmptyIconSigil}>♡</Text>
            </View>
            <Text style={styles.SavedScreenEmptyTitleFiligree}>
              No saved places yet
            </Text>
            <Text style={styles.SavedScreenEmptyTextFiligree}>
              Tap the ♡ on any venue in Explore to save it here for easy access.
            </Text>
          </View>
        ) : (
          <View style={styles.SavedScreenList}>
            {savedVenues.map(venue => (
              <SavedVenueCard
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

SavedScreenFacetChassis: {
  backgroundColor: colors.background,
  flex: 1,
},
SavedScreenScrollVellum: {
  paddingBottom: 100,
},
SavedScreenScrollEmpty: {
  flexGrow: 1,
},
SavedScreenHeaderInner: {
  paddingBottom: 16,
  paddingHorizontal: 20,
  paddingTop: 50,
},
SavedScreenEyebRowLintel: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
SavedScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 28,
  fontWeight: '700',
  marginTop: 4,
},
SavedScreenCountRowLintel: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 8,
  marginTop: 8,
},
SavedScreenHeart: {
  color: colors.gold,
  fontSize: 13,
},
SavedScreenCount: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
  lineHeight: 19.5,
},
SavedScreenList: {
  gap: 16,
  paddingHorizontal: 20,
  paddingTop: 16,
},
SavedScreenEmpty: {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
  paddingVertical: 80,
},
SavedScreenEmptyIconCardMantle: {
  alignItems: 'center',
  backgroundColor: 'rgba(250, 191, 20, 0.08)',
  borderColor: 'rgba(250, 191, 20, 0.2)',
  borderRadius: 100,
  borderWidth: 1,
  height: 80,
  justifyContent: 'center',
  marginBottom: 16,
  width: 80,
},
SavedScreenEmptyIconSigil: {
  color: colors.gold,
  fontSize: 32,
},
SavedScreenEmptyTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 6,
  textAlign: 'center',
},
SavedScreenEmptyTextFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
  lineHeight: 22.4,
  maxWidth: 354,
  textAlign: 'center',
},
SavedScreenHint: {
  backgroundColor: 'rgba(250, 191, 20, 0.05)',
  borderColor: 'rgba(250, 191, 20, 0.12)',
  borderRadius: 16,
  borderWidth: 1,
  marginTop: 16,
  paddingHorizontal: 16,
  paddingVertical: 16,
},
SavedScreenHintTextFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  textAlign: 'center',
},
});
