import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CASCADES_GUEST_STAY_GUEST} from '../../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

function CascadesGuestStayQrPlaceholder() {
  const cells = Array.from({length: 49});
  return (
    <View style={styles.cascadesGuestStayQrGrid}>
      {cells.map((_, index) => (
        <View
          key={index}
          style={[
            styles.cascadesGuestStayQrCell,
            (index + Math.floor(index / 7)) % 2 === 0 &&
              styles.cascadesGuestStayQrCellDark,
          ]}
        />
      ))}
    </View>
  );
}

export function CascadesGuestStayGuestIdCard() {
  return (
    <LinearGradient
      colors={[
        cascadesGuestStayColors.card,
        cascadesGuestStayColors.cardGradientEnd,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.cascadesGuestStayCard}>
      <View style={{padding: 20}}>
        <View style={styles.cascadesGuestStayHeader}>
          <View>
            <Text style={styles.cascadesGuestStayEyebrow}>Guest ID</Text>
            <Text style={styles.cascadesGuestStayTitle}>
              Reception Check-In QR
            </Text>
          </View>
          <Text style={styles.cascadesGuestStayStar}>★</Text>
        </View>

        <View style={styles.cascadesGuestStayBody}>
          <View style={styles.cascadesGuestStayQrWrap}>
            <Image
              source={require('../../../CascadesGuestStayAssets/qr.png')}
            />
          </View>
          <View style={styles.cascadesGuestStayInfo}>
            <View>
              <Text style={styles.cascadesGuestStayLabel}>Guest</Text>
              <Text style={styles.cascadesGuestStayValue}>
                {CASCADES_GUEST_STAY_GUEST.name}
              </Text>
            </View>
            <View>
              <Text style={styles.cascadesGuestStayLabel}>Room</Text>
              <Text style={styles.cascadesGuestStayValue}>
                {CASCADES_GUEST_STAY_GUEST.room}
              </Text>
            </View>
            <View>
              <Text style={styles.cascadesGuestStayLabel}>Status</Text>
              <Text style={styles.cascadesGuestStayStatus}>
                {CASCADES_GUEST_STAY_GUEST.status}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.cascadesGuestStayFooter}>
          <Text style={styles.cascadesGuestStayId}>
            {CASCADES_GUEST_STAY_GUEST.guestId}
          </Text>
          <View style={styles.cascadesGuestStayVerified}>
            <View style={styles.cascadesGuestStayDot} />
            <Text style={styles.cascadesGuestStayVerifiedText}>Verified</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    borderColor: cascadesGuestStayColors.goldBorder,
    borderRadius: cascadesGuestStayScale(24),
    borderWidth: 1,
  },
  cascadesGuestStayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStayEyebrow: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(2),
    textTransform: 'uppercase',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
    marginTop: cascadesGuestStayScale(4),
  },
  cascadesGuestStayStar: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(16),
  },
  cascadesGuestStayBody: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(16),
    marginTop: cascadesGuestStayScale(20),
  },
  cascadesGuestStayQrWrap: {
    height: cascadesGuestStayScale(113),
    width: cascadesGuestStayScale(113),
  },
  cascadesGuestStayQrGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  },
  cascadesGuestStayQrCell: {
    backgroundColor: '#E8E8E8',
    height: '14.28%',
    width: '14.28%',
  },
  cascadesGuestStayQrCellDark: {
    backgroundColor: '#1A1A1A',
  },
  cascadesGuestStayInfo: {
    flex: 1,
    gap: cascadesGuestStayScale(18),
    justifyContent: 'center',
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(10),
    letterSpacing: cascadesGuestStayScale(1),
    textTransform: 'uppercase',
  },
  cascadesGuestStayValue: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '600',
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayStatus: {
    color: cascadesGuestStayColors.success,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '600',
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayFooter: {
    alignItems: 'center',
    borderTopColor: 'rgba(250, 191, 20, 0.1)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: cascadesGuestStayScale(20),
    paddingTop: cascadesGuestStayScale(16),
  },
  cascadesGuestStayId: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayVerified: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: cascadesGuestStayScale(6),
  },
  cascadesGuestStayDot: {
    backgroundColor: cascadesGuestStayColors.success,
    borderRadius: cascadesGuestStayScale(4),
    height: cascadesGuestStayScale(8),
    width: cascadesGuestStayScale(8),
  },
  cascadesGuestStayVerifiedText: {
    color: cascadesGuestStayColors.success,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
});
