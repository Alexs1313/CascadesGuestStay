import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MapVenue} from '../../data/map';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type MapSelectedCardProps = {
  venue: MapVenue;
  isSaved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
};

export function MapSelectedCard({
  venue,
  isSaved,
  onToggleSave,
  onClose,
}: MapSelectedCardProps) {
  return (
    <View style={styles.MapSelectedCardCardFacet}>
      <Image
        source={venue.image}
        style={styles.MapSelectedCardImagePanel}
        resizeMode="cover"
      />
      <View style={styles.MapSelectedCardContent}>
        <View style={styles.MapSelectedCardHeader}>
          <View style={styles.MapSelectedCardTitlesFiligree}>
            <Text style={styles.MapSelectedCardTitleFiligree}>{venue.title}</Text>
            <Text style={styles.MapSelectedCardSubtitleFiligree}>
              {venue.subtitle}
            </Text>
          </View>
          <View style={styles.MapSelectedCardActions}>
            <Pressable
              onPress={onToggleSave}
              style={[
                styles.MapSelectedCardActionBtn,
                isSaved && styles.MapSelectedCardActionBtnSaved,
              ]}
              hitSlop={8}>
              <Text
                style={[
                  styles.MapSelectedCardHeart,
                  isSaved && styles.MapSelectedCardHeartSaved,
                ]}>
                {isSaved ? '♥' : '♡'}
              </Text>
            </Pressable>
            <Pressable
              onPress={onClose}
              style={styles.MapSelectedCardActionBtn}
              hitSlop={8}>
              <Text style={styles.MapSelectedCardClose}>✕</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.MapSelectedCardMeta}>
          <Text style={styles.MapSelectedCardStar}>★</Text>
          <Text style={styles.MapSelectedCardRating}>
            {venue.rating.toFixed(1)}
          </Text>
          <Text style={styles.MapSelectedCardDot}>·</Text>
          <Text style={styles.MapSelectedCardClock}>🕐</Text>
          <Text style={styles.MapSelectedCardHours}>{venue.hours}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

MapSelectedCardCardFacet: {
  backgroundColor: colors.card,
  borderColor: 'rgba(250, 191, 20, 0.15)',
  borderRadius: 16,
  borderWidth: 1,
  flexDirection: 'row',
  marginHorizontal: 20,
  marginTop: 12,
  overflow: 'hidden',
  padding: 12,
},
MapSelectedCardImagePanel: {
  borderRadius: 20,
  height: 80,
  width: 80,
},
MapSelectedCardContent: {
  flex: 1,
  marginLeft: 12,
},
MapSelectedCardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
MapSelectedCardTitlesFiligree: {
  flex: 1,
  marginRight: 8,
},
MapSelectedCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 16,
  fontWeight: '700',
},
MapSelectedCardSubtitleFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginTop: 2,
},
MapSelectedCardActions: {
  flexDirection: 'row',
  gap: 8,
},
MapSelectedCardActionBtn: {
  alignItems: 'center',
  backgroundColor: colors.buttonSecondary,
  borderRadius: 100,
  height: 28,
  justifyContent: 'center',
  width: 28,
},
MapSelectedCardActionBtnSaved: {
  backgroundColor: 'rgba(250, 191, 20, 0.15)',
},
MapSelectedCardHeart: {
  color: colors.body,
  fontSize: 13,
},
MapSelectedCardHeartSaved: {
  color: colors.gold,
},
MapSelectedCardClose: {
  color: colors.body,
  fontSize: 12,
},
MapSelectedCardMeta: {
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: 10,
},
MapSelectedCardStar: {
  color: colors.gold,
  fontSize: 11,
},
MapSelectedCardRating: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 12,
  fontWeight: '600',
  marginLeft: 4,
},
MapSelectedCardDot: {
  color: '#3A5A75',
  fontSize: 16,
  marginHorizontal: 6,
},
MapSelectedCardClock: {
  fontSize: 11,
},
MapSelectedCardHours: {
  color: colors.body,
  flex: 1,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  marginLeft: 4,
},
});
