import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CascadesGuestStayMapCategoryTabs} from '../../CascadesGuestStayComponents/CascadesGuestStayMap/CascadesGuestStayMapCategoryTabs/CascadesGuestStayMapCategoryTabs';
import {CascadesGuestStayMapSelectedCard} from '../../CascadesGuestStayComponents/CascadesGuestStayMap/CascadesGuestStayMapSelectedCard/CascadesGuestStayMapSelectedCard';
import {CascadesGuestStayMapVenueRow} from '../../CascadesGuestStayComponents/CascadesGuestStayMap/CascadesGuestStayMapVenueRow/CascadesGuestStayMapVenueRow';
import {CascadesGuestStayResortMap} from '../../CascadesGuestStayComponents/CascadesGuestStayMap/CascadesGuestStayResortMap/CascadesGuestStayResortMap';
import {
  CascadesGuestStayMapCategory,
  cascadesGuestStayGetMapVenues,
} from '../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapData/CascadesGuestStayMapData';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

export function CascadesGuestStayMapScreen() {
  const [category, setCategory] = useState<CascadesGuestStayMapCategory>('all');
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [savedMapVenueIds, setSavedMapVenueIds] = useState<string[]>([]);

  const venues = useMemo(
    () => cascadesGuestStayGetMapVenues(category),
    [category],
  );

  const selectedVenue = useMemo(
    () => venues.find(venue => venue.id === selectedVenueId) ?? null,
    [venues, selectedVenueId],
  );

  useEffect(() => {
    if (
      selectedVenueId &&
      !venues.some(venue => venue.id === selectedVenueId)
    ) {
      setSelectedVenueId(null);
    }
  }, [venues, selectedVenueId]);

  const handleSelectVenue = (venueId: string) => {
    setSelectedVenueId(prev => (prev === venueId ? null : venueId));
  };

  const handleToggleSave = (venueId: string) => {
    setSavedMapVenueIds(prev =>
      prev.includes(venueId)
        ? prev.filter(id => id !== venueId)
        : [...prev, venueId],
    );
  };

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.cascadesGuestStayScroll}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[
            cascadesGuestStayColors.headerGradientStart,
            cascadesGuestStayColors.headerGradientEnd,
          ]}>
          <View style={styles.cascadesGuestStayHeaderInner}>
            <Text style={styles.cascadesGuestStayEyebrow}>Resort Map</Text>
            <Text style={styles.cascadesGuestStayTitle}>Interactive Map</Text>
          </View>
        </LinearGradient>

        <CascadesGuestStayMapCategoryTabs
          activeCategory={category}
          onCategoryChange={setCategory}
        />

        <CascadesGuestStayResortMap
          venues={venues}
          selectedVenueId={selectedVenueId}
          onSelectVenue={handleSelectVenue}
        />

        {selectedVenue && (
          <CascadesGuestStayMapSelectedCard
            venue={selectedVenue}
            isSaved={savedMapVenueIds.includes(selectedVenue.id)}
            onToggleSave={() => handleToggleSave(selectedVenue.id)}
            onClose={() => setSelectedVenueId(null)}
          />
        )}

        <View style={styles.cascadesGuestStayList}>
          <Text style={styles.cascadesGuestStaySection}>Nearby Venues</Text>
          {venues.map(venue => (
            <CascadesGuestStayMapVenueRow
              key={venue.id}
              venue={venue}
              isSelected={venue.id === selectedVenueId}
              onPress={() => handleSelectVenue(venue.id)}
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
  cascadesGuestStayList: {
    marginTop: cascadesGuestStayVerticalScale(20),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStaySection: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(2),
    marginBottom: cascadesGuestStayVerticalScale(12),
    textTransform: 'uppercase',
  },
});
