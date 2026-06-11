import React, {useEffect, useMemo, useState} from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MapCategoryTabs} from '../components/map/MapCategoryTabs';
import {MapSelectedCard} from '../components/map/MapSelectedCard';
import {MapVenueRow} from '../components/map/MapVenueRow';
import {ResortMap} from '../components/map/ResortMap';
import {
  MapCategory,
  getMapVenues,
} from '../data/map';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';


export function MapScreen() {
  const [category, setCategory] = useState<MapCategory>('all');
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [savedMapVenueIds, setSavedMapVenueIds] = useState<string[]>([]);

  const venues = useMemo(
    () => getMapVenues(category),
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
    <View style={styles.MapScreenFacetChassis}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.MapScreenScrollVellum}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[
            colors.headerGradientStart,
            colors.headerGradientEnd,
          ]}>
          <View style={styles.MapScreenHeaderInner}>
            <Text style={styles.MapScreenEyebRowLintel}>Resort Map</Text>
            <Text style={styles.MapScreenTitleFiligree}>Map</Text>
          </View>
        </LinearGradient>

        <MapCategoryTabs
          activeCategory={category}
          onCategoryChange={setCategory}
        />

        <ResortMap
          venues={venues}
          selectedVenueId={selectedVenueId}
          onSelectVenue={handleSelectVenue}
        />

        {selectedVenue && (
          <MapSelectedCard
            venue={selectedVenue}
            isSaved={savedMapVenueIds.includes(selectedVenue.id)}
            onToggleSave={() => handleToggleSave(selectedVenue.id)}
            onClose={() => setSelectedVenueId(null)}
          />
        )}

        <View style={styles.MapScreenList}>
          <Text style={styles.MapScreenSection}>Nearby Venues</Text>
          {venues.map(venue => (
            <MapVenueRow
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

MapScreenFacetChassis: {
  backgroundColor: colors.background,
  flex: 1,
},
MapScreenScrollVellum: {
  paddingBottom: 100,
},
MapScreenHeaderInner: {
  paddingBottom: 16,
  paddingHorizontal: 20,
  paddingTop: 50,
},
MapScreenEyebRowLintel: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
MapScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 28,
  fontWeight: '700',
  marginTop: 4,
},
MapScreenList: {
  marginTop: 20,
  paddingHorizontal: 20,
},
MapScreenSection: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  letterSpacing: 2,
  marginBottom: 12,
  textTransform: 'uppercase',
},
});
