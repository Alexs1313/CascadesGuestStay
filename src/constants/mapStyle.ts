import {MapStyleElement} from 'react-native-maps';

import {mapPins} from '../data/assets';

export const MAP_PIN = mapPins.gold;
export const MAP_PIN_GREEN = mapPins.green;
export const MAP_PIN_PURPLE = mapPins.purple;

export const MAP_PIN_SIZE = 24;
export const MAP_PIN_SIZE_SELECTED = 30;
export const MAP_PIN_SIZE_LIST = 16;

export const MAP_REGION = {
  latitude: 49.1045,
  longitude: -122.6607,
  latitudeDelta: 0.006,
  longitudeDelta: 0.006,
};

export const DARK_MAP_STYLE: MapStyleElement[] = [
  {elementType: 'geometry', stylers: [{color: '#0c1824'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#7a9ab5'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#0c1824'}]},
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{color: '#182738'}],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{color: '#132033'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#152a3d'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#1e3347'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#2a4560'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#243a52'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#182738'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#081018'}],
  },
];
