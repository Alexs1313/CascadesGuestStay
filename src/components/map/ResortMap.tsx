import {useAdaptive} from '../../hooks/useAdaptive';
import React, {useMemo} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  MapVenue,
  getMapCategoryColor,
  getMapPinIcon,
} from '../../data/map';
import {
  DARK_MAP_STYLE,
  MAP_PIN_SIZE,
  MAP_PIN_SIZE_SELECTED,
  MAP_REGION,
} from '../../constants/mapStyle';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type ResortMapProps = {
  venues: MapVenue[];
  selectedVenueId: string | null;
  onSelectVenue: (venueId: string) => void;
};

export function ResortMap({
  venues,
  selectedVenueId,
  onSelectVenue,
}: ResortMapProps) {
  const adaptive = useAdaptive();
  
  const legendItems = [
    {label: 'Family', color: '#7ED8A4'},
    {label: 'Shows', color: '#C096E8'},
    {label: 'Nightlife', color: '#FABF14'},
  ];

  const mapRegion = useMemo(() => {
    if (venues.length === 0) {
      return MAP_REGION;
    }

  const latitudes = venues.map(venue => venue.latitude);
  const longitudes = venues.map(venue => venue.longitude);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta: Math.max((maxLat - minLat) * 1.8, 0.004),
      longitudeDelta: Math.max((maxLng - minLng) * 1.8, 0.004),
    };
  }, [venues]);

  return (
    <View style={styles.ResortMapCardMantle}>
      <View style={[styles.ResortMapMap, {height: adaptive.mapHeight}]}>
        <MapView
          key={venues.map(venue => venue.id).join('-')}
          style={styles.ResortMapMapView}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          initialRegion={mapRegion}
          customMapStyle={DARK_MAP_STYLE}
          userInterfaceStyle="dark"
          mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
          showsUserLocation={false}
          showsMyLocationButton={false}
          showsCompass={false}
          showsScale={false}
          toolbarEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}>
          {venues.map(venue => {
            const isSelected = venue.id === selectedVenueId;
            const color = getMapCategoryColor(venue.category);

            return (
              <Marker
                key={venue.id}
                coordinate={{
                  latitude: venue.latitude,
                  longitude: venue.longitude,
                }}
                onPress={() => onSelectVenue(venue.id)}
                tracksViewChanges={false}>
                <View style={styles.ResortMapMarker}>
                  {isSelected && (
                    <View
                      style={[
                        styles.ResortMapPinLabelFiligree,
                        {backgroundColor: color},
                      ]}>
                      <Text style={styles.ResortMapPinLabelTextFiligree}>
                        {venue.title}
                      </Text>
                    </View>
                  )}
                  <Image
                    source={getMapPinIcon(venue.category)}
                    style={[
                      styles.ResortMapPin,
                      isSelected && styles.ResortMapPinSelected,
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </Marker>
            );
          })}
        </MapView>

        <View style={styles.ResortMapLegend} pointerEvents="none">
          {legendItems.map(item => (
            <View key={item.label} style={styles.ResortMapLegendRowLintel}>
              <View
                style={[
                  styles.ResortMapLegendDot,
                  {backgroundColor: item.color},
                ]}
              />
              <Text style={styles.ResortMapLegendLabelFiligree}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.ResortMapBrandingFiligree} pointerEvents="none">
          CASCADES RESORT
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

ResortMapCardMantle: {
  paddingHorizontal: 20,
},
ResortMapMap: {
  borderColor: 'rgba(250, 191, 20, 0.15)',
  borderRadius: 24,
  borderWidth: 1,
  overflow: 'hidden',
},
ResortMapMapView: {
  ...StyleSheet.absoluteFillObject,
},
ResortMapLegend: {
  backgroundColor: 'rgba(12, 24, 36, 0.8)',
  borderRadius: 15,
  gap: 6,
  paddingHorizontal: 8,
  paddingVertical: 10,
  position: 'absolute',
  right: 12,
  top: 12,
},
ResortMapLegendRowLintel: {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 6,
},
ResortMapLegendDot: {
  borderRadius: 100,
  height: 8,
  width: 8,
},
ResortMapLegendLabelFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansRegular,
  fontSize: 9,
  letterSpacing: 0.5,
},
ResortMapMarker: {
  alignItems: 'center',
},
ResortMapPin: {
  height: MAP_PIN_SIZE,
  width: MAP_PIN_SIZE,
},
ResortMapPinSelected: {
  height: MAP_PIN_SIZE_SELECTED,
  width: MAP_PIN_SIZE_SELECTED,
},
ResortMapPinLabelFiligree: {
  borderRadius: 100,
  marginBottom: 4,
  paddingHorizontal: 10,
  paddingVertical: 2,
},
ResortMapPinLabelTextFiligree: {
  color: colors.background,
  fontFamily: fonts.sansBold,
  fontSize: 9,
  fontWeight: '700',
},
ResortMapBrandingFiligree: {
  bottom: 12,
  color: colors.gold,
  fontFamily: fonts.serifRegular,
  fontSize: 12,
  left: 12,
  letterSpacing: 2,
  opacity: 0.3,
  position: 'absolute',
},
});
