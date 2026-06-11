import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusTimeline} from './StatusTimeline';
import {
  GuestRequest,
  getStatusLabel,
} from '../../data/requests';
import {colors} from '../../constants/theme';
import {fonts} from '../../constants/theme';


type RequestCardProps = {
  request: GuestRequest;
};

function RequestCardGetStatusStyle(
  status: GuestRequest['status'],
) {
  switch (status) {
    case 'submitted':
      return {
        bg: 'rgba(122, 154, 181, 0.12)',
        color: colors.body,
        icon: '◷',
      };
    case 'in_progress':
      return {
        bg: 'rgba(250, 191, 20, 0.12)',
        color: colors.gold,
        icon: '↻',
      };
    case 'accepted':
      return {
        bg: 'rgba(78, 168, 222, 0.12)',
        color: colors.infoBlue,
        icon: '✓',
      };
    case 'completed':
      return {
        bg: 'rgba(126, 216, 164, 0.12)',
        color: colors.success,
        icon: '✓',
      };
  }
}

export function RequestCard({
  request,
}: RequestCardProps) {
  const statusStyle = RequestCardGetStatusStyle(request.status);

  return (
    <View style={styles.RequestCardCardFacet}>
      <View style={styles.RequestCardHeader}>
        <View style={styles.RequestCardTitleRowLintel}>
          <Text style={styles.RequestCardIconSigil}>{request.icon}</Text>
          <View>
            <Text style={styles.RequestCardTitleFiligree}>{request.title}</Text>
            <Text style={styles.RequestCardRequestId}>
              {request.requestId}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.RequestCardBadgeEnclave,
            {backgroundColor: statusStyle.bg},
          ]}>
          <Text style={[styles.RequestCardBadgeIconSigil, {color: statusStyle.color}]}>
            {statusStyle.icon}
          </Text>
          <Text style={[styles.RequestCardBadgeLabelFiligree, {color: statusStyle.color}]}>
            {getStatusLabel(request.status)}
          </Text>
        </View>
      </View>

      <Text style={styles.RequestCardDescription}>
        {request.description}
      </Text>

      <View style={styles.RequestCardFooter}>
        <Text style={styles.RequestCardTime}>{request.submittedAt}</Text>
        <StatusTimeline progressStep={request.progressStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

RequestCardCardFacet: {
  backgroundColor: colors.card,
  borderColor: 'rgba(250, 191, 20, 0.08)',
  borderRadius: 16,
  borderWidth: 1,
  marginBottom: 12,
  padding: 16,
},
RequestCardHeader: {
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
RequestCardTitleRowLintel: {
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1,
  gap: 10,
  marginRight: 8,
},
RequestCardIconSigil: {
  fontSize: 20,
},
RequestCardTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '600',
},
RequestCardRequestId: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  marginTop: 2,
},
RequestCardBadgeEnclave: {
  alignItems: 'center',
  borderRadius: 100,
  flexDirection: 'row',
  gap: 6,
  paddingHorizontal: 10,
  paddingVertical: 4,
},
RequestCardBadgeIconSigil: {
  fontSize: 11,
},
RequestCardBadgeLabelFiligree: {
  fontFamily: fonts.sansSemiBold,
  fontSize: 11,
  fontWeight: '600',
},
RequestCardDescription: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
  lineHeight: 19.5,
  marginTop: 12,
},
RequestCardFooter: {
  alignItems: 'center',
  borderTopColor: 'rgba(250, 191, 20, 0.08)',
  borderTopWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
  paddingTop: 10,
},
RequestCardTime: {
  color: colors.label,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
},
});
