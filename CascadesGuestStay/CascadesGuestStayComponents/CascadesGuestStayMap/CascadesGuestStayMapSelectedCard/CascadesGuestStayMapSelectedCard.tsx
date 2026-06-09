import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CascadesGuestStayMapVenue} from '../../../CascadesGuestStayConstants/CascadesGuestStayMap/CascadesGuestStayMapData/CascadesGuestStayMapData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayMapSelectedCardProps = {
  venue: CascadesGuestStayMapVenue;
  isSaved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
};

export function CascadesGuestStayMapSelectedCard({
  venue,
  isSaved,
  onToggleSave,
  onClose,
}: CascadesGuestStayMapSelectedCardProps) {
  return (
    <View style={styles.cascadesGuestStayCard}>
      <Image
        source={venue.image}
        style={styles.cascadesGuestStayImage}
        resizeMode="cover"
      />
      <View style={styles.cascadesGuestStayContent}>
        <View style={styles.cascadesGuestStayHeader}>
          <View style={styles.cascadesGuestStayTitles}>
            <Text style={styles.cascadesGuestStayTitle}>{venue.title}</Text>
            <Text style={styles.cascadesGuestStaySubtitle}>
              {venue.subtitle}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayActions}>
            <Pressable
              onPress={onToggleSave}
              style={[
                styles.cascadesGuestStayActionBtn,
                isSaved && styles.cascadesGuestStayActionBtnSaved,
              ]}
              hitSlop={8}>
              <Text
                style={[
                  styles.cascadesGuestStayHeart,
                  isSaved && styles.cascadesGuestStayHeartSaved,
                ]}>
                {isSaved ? '♥' : '♡'}
              </Text>
            </Pressable>
            <Pressable
              onPress={onClose}
              style={styles.cascadesGuestStayActionBtn}
              hitSlop={8}>
              <Text style={styles.cascadesGuestStayClose}>✕</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cascadesGuestStayMeta}>
          <Text style={styles.cascadesGuestStayStar}>★</Text>
          <Text style={styles.cascadesGuestStayRating}>
            {venue.rating.toFixed(1)}
          </Text>
          <Text style={styles.cascadesGuestStayDot}>·</Text>
          <Text style={styles.cascadesGuestStayClock}>🕐</Text>
          <Text style={styles.cascadesGuestStayHours}>{venue.hours}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'rgba(250, 191, 20, 0.15)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: cascadesGuestStayScale(20),
    marginTop: cascadesGuestStayVerticalScale(12),
    overflow: 'hidden',
    padding: cascadesGuestStayScale(12),
  },
  cascadesGuestStayImage: {
    borderRadius: cascadesGuestStayScale(20),
    height: cascadesGuestStayScale(80),
    width: cascadesGuestStayScale(80),
  },
  cascadesGuestStayContent: {
    flex: 1,
    marginLeft: cascadesGuestStayScale(12),
  },
  cascadesGuestStayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStayTitles: {
    flex: 1,
    marginRight: cascadesGuestStayScale(8),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayActions: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
  },
  cascadesGuestStayActionBtn: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderRadius: cascadesGuestStayScale(100),
    height: cascadesGuestStayScale(28),
    justifyContent: 'center',
    width: cascadesGuestStayScale(28),
  },
  cascadesGuestStayActionBtnSaved: {
    backgroundColor: 'rgba(250, 191, 20, 0.15)',
  },
  cascadesGuestStayHeart: {
    color: cascadesGuestStayColors.body,
    fontSize: cascadesGuestStayScale(13),
  },
  cascadesGuestStayHeartSaved: {
    color: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayClose: {
    color: cascadesGuestStayColors.body,
    fontSize: cascadesGuestStayScale(12),
  },
  cascadesGuestStayMeta: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: cascadesGuestStayVerticalScale(10),
  },
  cascadesGuestStayStar: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayRating: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(12),
    fontWeight: '600',
    marginLeft: cascadesGuestStayScale(4),
  },
  cascadesGuestStayDot: {
    color: '#3A5A75',
    fontSize: cascadesGuestStayScale(16),
    marginHorizontal: cascadesGuestStayScale(6),
  },
  cascadesGuestStayClock: {
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayHours: {
    color: cascadesGuestStayColors.body,
    flex: 1,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    marginLeft: cascadesGuestStayScale(4),
  },
});
