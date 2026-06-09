import React, {useMemo} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  CascadesGuestStayMapVenue,
  cascadesGuestStayGetMapCategoryColor,
  cascadesGuestStayGetMapPinIcon,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapData/CascadesGuestStayMapData';
import {
  CASCADES_GUEST_STAY_DARK_MAP_STYLE,
  CASCADES_GUEST_STAY_MAP_PIN_SIZE,
  CASCADES_GUEST_STAY_MAP_PIN_SIZE_SELECTED,
  CASCADES_GUEST_STAY_MAP_REGION,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapStyle/CascadesGuestStayMapStyle';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayResortMapProps = {
  venues: CascadesGuestStayMapVenue[];
  selectedVenueId: string | null;
  onSelectVenue: (venueId: string) => void;
};

const MAP_HEIGHT = cascadesGuestStayVerticalScale(280);

function CascadesGuestStayMapLegend() {
  const items = [
    {label: 'Family', color: '#7ED8A4'},
    {label: 'Shows', color: '#C096E8'},
    {label: 'Nightlife', color: '#FABF14'},
  ];

  return (
    <View style={styles.cascadesGuestStayLegend} pointerEvents="none">
      {items.map(item => (
        <View key={item.label} style={styles.cascadesGuestStayLegendRow}>
          <View
            style={[
              styles.cascadesGuestStayLegendDot,
              {backgroundColor: item.color},
            ]}
          />
          <Text style={styles.cascadesGuestStayLegendLabel}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

export function CascadesGuestStayResortMap({
  venues,
  selectedVenueId,
  onSelectVenue,
}: CascadesGuestStayResortMapProps) {
  const mapRegion = useMemo(() => {
    if (venues.length === 0) {
      return CASCADES_GUEST_STAY_MAP_REGION;
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
    <View style={styles.cascadesGuestStayWrap}>
      <View style={styles.cascadesGuestStayMap}>
        <MapView
          key={venues.map(venue => venue.id).join('-')}
          style={styles.cascadesGuestStayMapView}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          initialRegion={mapRegion}
          customMapStyle={CASCADES_GUEST_STAY_DARK_MAP_STYLE}
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
            const color = cascadesGuestStayGetMapCategoryColor(venue.category);

            return (
              <Marker
                key={venue.id}
                coordinate={{
                  latitude: venue.latitude,
                  longitude: venue.longitude,
                }}
                onPress={() => onSelectVenue(venue.id)}
                tracksViewChanges={false}>
                <View style={styles.cascadesGuestStayMarker}>
                  {isSelected && (
                    <View
                      style={[
                        styles.cascadesGuestStayPinLabel,
                        {backgroundColor: color},
                      ]}>
                      <Text style={styles.cascadesGuestStayPinLabelText}>
                        {venue.title}
                      </Text>
                    </View>
                  )}
                  <Image
                    source={cascadesGuestStayGetMapPinIcon(venue.category)}
                    style={[
                      styles.cascadesGuestStayPin,
                      isSelected && styles.cascadesGuestStayPinSelected,
                    ]}
                    resizeMode="contain"
                  />
                </View>
              </Marker>
            );
          })}
        </MapView>

        <CascadesGuestStayMapLegend />
        <Text style={styles.cascadesGuestStayBranding} pointerEvents="none">
          CASCADES RESORT
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayWrap: {
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayMap: {
    borderColor: 'rgba(250, 191, 20, 0.15)',
    borderRadius: cascadesGuestStayScale(24),
    borderWidth: 1,
    height: MAP_HEIGHT,
    overflow: 'hidden',
  },
  cascadesGuestStayMapView: {
    ...StyleSheet.absoluteFillObject,
  },
  cascadesGuestStayLegend: {
    backgroundColor: 'rgba(12, 24, 36, 0.8)',
    borderRadius: cascadesGuestStayScale(15),
    gap: cascadesGuestStayScale(6),
    paddingHorizontal: cascadesGuestStayScale(8),
    paddingVertical: cascadesGuestStayScale(10),
    position: 'absolute',
    right: cascadesGuestStayScale(12),
    top: cascadesGuestStayScale(12),
  },
  cascadesGuestStayLegendRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(6),
  },
  cascadesGuestStayLegendDot: {
    borderRadius: cascadesGuestStayScale(100),
    height: cascadesGuestStayScale(8),
    width: cascadesGuestStayScale(8),
  },
  cascadesGuestStayLegendLabel: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(9),
    letterSpacing: 0.5,
  },
  cascadesGuestStayMarker: {
    alignItems: 'center',
  },
  cascadesGuestStayPin: {
    height: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE),
    width: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE),
  },
  cascadesGuestStayPinSelected: {
    height: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE_SELECTED),
    width: cascadesGuestStayScale(CASCADES_GUEST_STAY_MAP_PIN_SIZE_SELECTED),
  },
  cascadesGuestStayPinLabel: {
    borderRadius: cascadesGuestStayScale(100),
    marginBottom: cascadesGuestStayScale(4),
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(2),
  },
  cascadesGuestStayPinLabelText: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontSize: cascadesGuestStayScale(9),
    fontWeight: '700',
  },
  cascadesGuestStayBranding: {
    bottom: cascadesGuestStayScale(12),
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.serifRegular,
    fontSize: cascadesGuestStayScale(12),
    left: cascadesGuestStayScale(12),
    letterSpacing: 2,
    opacity: 0.3,
    position: 'absolute',
  },
});
