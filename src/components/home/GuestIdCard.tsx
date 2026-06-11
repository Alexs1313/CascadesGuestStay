import React from 'react';
import {useAdaptive} from '../../hooks/useAdaptive';

import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {QrCode} from '../common/QrCode';
import {GUEST} from '../../data/guest';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';



export function GuestIdCard() {
  const adaptive = useAdaptive();
  return (
    <LinearGradient
      colors={[
        colors.card,
        colors.cardGradientEnd,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.GuestIdCardCardFacet}>
      <View style={{padding: 20}}>
        <View style={styles.GuestIdCardHeader}>
          <View>
            <Text style={styles.GuestIdCardEyebRowLintel}>Guest ID</Text>
            <Text style={styles.GuestIdCardTitleFiligree}>
              Reception Check-In QR
            </Text>
          </View>
          <Text style={styles.GuestIdCardStar}>★</Text>
        </View>

        <View style={styles.GuestIdCardBody}>
          <View style={[styles.GuestIdCardQrCardMantle, {width: adaptive.qrSize, height: adaptive.qrSize}]}>
            <QrCode
              value={GUEST.guestId}
              size={adaptive.qrSize}
            />
          </View>
          <View style={styles.GuestIdCardInfo}>
            <View>
              <Text style={styles.GuestIdCardLabelFiligree}>Guest</Text>
              <Text style={styles.GuestIdCardValue}>
                {GUEST.name}
              </Text>
            </View>
            <View>
              <Text style={styles.GuestIdCardLabelFiligree}>Room</Text>
              <Text style={styles.GuestIdCardValue}>
                {GUEST.room}
              </Text>
            </View>
            <View>
              <Text style={styles.GuestIdCardLabelFiligree}>Status</Text>
              <Text style={styles.GuestIdCardStatus}>
                {GUEST.status}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.GuestIdCardFooter}>
          <Text style={styles.GuestIdCardId}>
            {GUEST.guestId}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

GuestIdCardCardFacet: {
  borderColor: colors.goldBorder,
  borderRadius: 24,
  borderWidth: 1,
},
GuestIdCardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
GuestIdCardEyebRowLintel: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
GuestIdCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
  marginTop: 4,
},
GuestIdCardStar: {
  color: colors.gold,
  fontSize: 16,
},
GuestIdCardBody: {
  flexDirection: 'row',
  gap: 16,
  marginTop: 20,
},
GuestIdCardQrCardMantle: {
  borderRadius: 8,
  overflow: 'hidden',
},
GuestIdCardInfo: {
  flex: 1,
  gap: 18,
  justifyContent: 'center',
},
GuestIdCardLabelFiligree: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 10,
  letterSpacing: 1,
  textTransform: 'uppercase',
},
GuestIdCardValue: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
  marginTop: 2,
},
GuestIdCardStatus: {
  color: colors.success,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
  marginTop: 2,
},
GuestIdCardFooter: {
  alignItems: 'center',
  borderTopColor: 'rgba(250, 191, 20, 0.1)',
  borderTopWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  paddingTop: 16,
},
GuestIdCardId: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
},
});
