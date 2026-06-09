import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CascadesGuestStayExploreCategoryTabs} from '../../CascadesGuestStayComponents/CascadesGuestStayExplore/CascadesGuestStayExploreCategoryTabs/CascadesGuestStayExploreCategoryTabs';
import {CascadesGuestStayVenueCard} from '../../CascadesGuestStayComponents/CascadesGuestStayExplore/CascadesGuestStayVenueCard/CascadesGuestStayVenueCard';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {
  CascadesGuestStayExploreCategory,
  cascadesGuestStayGetExploreVenues,
} from '../../CascadesGuestStayConstants/CascadesGuestStayExplore/CascadesGuestStayExploreData/CascadesGuestStayExploreData';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

export function CascadesGuestStayExploreScreen() {
  const [category, setCategory] =
    useState<CascadesGuestStayExploreCategory>('all');
  const {isVenueSaved, toggleSavedVenue} = useCascadesGuestStayApp();

  const venues = useMemo(
    () => cascadesGuestStayGetExploreVenues(category),
    [category],
  );

  const venueCountLabel =
    venues.length === 1
      ? '1 venue across the resort'
      : `${venues.length} venues across the resort`;

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.cascadesGuestStayScroll}
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
            <Text style={styles.cascadesGuestStayEyebrow}>Cascades Resort</Text>
            <Text style={styles.cascadesGuestStayTitle}>Explore</Text>
            <Text style={styles.cascadesGuestStaySubtitle}>
              {venueCountLabel}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.cascadesGuestStayTabsWrap}>
          <CascadesGuestStayExploreCategoryTabs
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </View>

        <View style={styles.cascadesGuestStayList}>
          {venues.map(venue => (
            <CascadesGuestStayVenueCard
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
  cascadesGuestStayContainer: {
    backgroundColor: cascadesGuestStayColors.background,
    flex: 1,
  },
  cascadesGuestStayScroll: {
    paddingBottom: cascadesGuestStayVerticalScale(100),
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
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    lineHeight: cascadesGuestStayScale(19.5),
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayTabsWrap: {
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayList: {
    gap: cascadesGuestStayScale(16),
    marginTop: cascadesGuestStayVerticalScale(8),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
});
