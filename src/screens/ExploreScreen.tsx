import React, {useMemo, useState} from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ExploreCategoryTabs} from '../components/explore/ExploreCategoryTabs';
import {VenueCard} from '../components/explore/VenueCard';
import {useApp} from '../context/AppContext';
import {
  ExploreCategory,
  getExploreVenues,
} from '../data/explore';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';


export function ExploreScreen() {
  const adaptive = useAdaptive();
  const [category, setCategory] =
    useState<ExploreCategory>('all');
  const {isVenueSaved, toggleSavedVenue} = useApp();

  const venues = useMemo(
    () => getExploreVenues(category),
    [category],
  );

  const venueCountLabel =
    venues.length === 1
      ? '1 venue across the resort'
      : `${venues.length} venues across the resort`;

  return (
    <View style={styles.ExploreScreenFacetChassis}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.ExploreScreenScrollVellum}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={{
            marginBottom: adaptive.verticalScale(4),
          }}
          colors={[
            colors.headerGradientStart,
            colors.headerGradientEnd,
          ]}>
          <View style={styles.ExploreScreenHeaderInner}>
            <Text style={styles.ExploreScreenEyebRowLintel}>Cascades Resort</Text>
            <Text style={styles.ExploreScreenTitleFiligree}>Explore</Text>
            <Text style={styles.ExploreScreenSubtitleFiligree}>
              {venueCountLabel}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.ExploreScreenTabsCardMantle}>
          <ExploreCategoryTabs
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </View>

        <View style={styles.ExploreScreenList}>
          {venues.map(venue => (
            <VenueCard
              key={venue.id}
              venue={venue}
              isSaved={isVenueSaved(venue.id)}
              onToggleSave={() => toggleSavedVenue(venue.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

ExploreScreenFacetChassis: {
  backgroundColor: colors.background,
  flex: 1,
},
ExploreScreenScrollVellum: {
  paddingBottom: 100,
},
ExploreScreenHeaderInner: {
  paddingBottom: 16,
  paddingHorizontal: 20,
  paddingTop: 50,
},
ExploreScreenEyebRowLintel: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
ExploreScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 28,
  fontWeight: '700',
  marginTop: 4,
},
ExploreScreenSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
  lineHeight: 19.5,
  marginTop: 4,
},
ExploreScreenTabsCardMantle: {
  paddingHorizontal: 20,
},
ExploreScreenList: {
  gap: 16,
  marginTop: 8,
  paddingHorizontal: 20,
},
});
