import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CascadesGuestStayStatusTimeline} from '../CascadesGuestStayStatusTimeline/CascadesGuestStayStatusTimeline';
import {
  CascadesGuestStayGuestRequest,
  cascadesGuestStayGetStatusLabel,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayRequests/CascadesGuestStayRequestsData/CascadesGuestStayRequestsData';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayRequestCardProps = {
  request: CascadesGuestStayGuestRequest;
};

function cascadesGuestStayGetStatusStyle(
  status: CascadesGuestStayGuestRequest['status'],
) {
  switch (status) {
    case 'submitted':
      return {
        bg: 'rgba(122, 154, 181, 0.12)',
        color: cascadesGuestStayColors.body,
        icon: '◷',
      };
    case 'in_progress':
      return {
        bg: 'rgba(250, 191, 20, 0.12)',
        color: cascadesGuestStayColors.gold,
        icon: '↻',
      };
    case 'accepted':
      return {
        bg: 'rgba(78, 168, 222, 0.12)',
        color: cascadesGuestStayColors.infoBlue,
        icon: '✓',
      };
    case 'completed':
      return {
        bg: 'rgba(126, 216, 164, 0.12)',
        color: cascadesGuestStayColors.success,
        icon: '✓',
      };
  }
}

export function CascadesGuestStayRequestCard({
  request,
}: CascadesGuestStayRequestCardProps) {
  const statusStyle = cascadesGuestStayGetStatusStyle(request.status);

  return (
    <View style={styles.cascadesGuestStayCard}>
      <View style={styles.cascadesGuestStayHeader}>
        <View style={styles.cascadesGuestStayTitleRow}>
          <Text style={styles.cascadesGuestStayIcon}>{request.icon}</Text>
          <View>
            <Text style={styles.cascadesGuestStayTitle}>{request.title}</Text>
            <Text style={styles.cascadesGuestStayRequestId}>
              {request.requestId}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.cascadesGuestStayBadge,
            {backgroundColor: statusStyle.bg},
          ]}>
          <Text style={[styles.cascadesGuestStayBadgeIcon, {color: statusStyle.color}]}>
            {statusStyle.icon}
          </Text>
          <Text style={[styles.cascadesGuestStayBadgeLabel, {color: statusStyle.color}]}>
            {cascadesGuestStayGetStatusLabel(request.status)}
          </Text>
        </View>
      </View>

      <Text style={styles.cascadesGuestStayDescription}>
        {request.description}
      </Text>

      <View style={styles.cascadesGuestStayFooter}>
        <Text style={styles.cascadesGuestStayTime}>{request.submittedAt}</Text>
        <CascadesGuestStayStatusTimeline progressStep={request.progressStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'rgba(250, 191, 20, 0.08)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    marginBottom: cascadesGuestStayVerticalScale(12),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStayHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStayTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: cascadesGuestStayScale(10),
    marginRight: cascadesGuestStayScale(8),
  },
  cascadesGuestStayIcon: {
    fontSize: cascadesGuestStayScale(20),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '600',
  },
  cascadesGuestStayRequestId: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    marginTop: cascadesGuestStayScale(2),
  },
  cascadesGuestStayBadge: {
    alignItems: 'center',
    borderRadius: cascadesGuestStayScale(100),
    flexDirection: 'row',
    gap: cascadesGuestStayScale(6),
    paddingHorizontal: cascadesGuestStayScale(10),
    paddingVertical: cascadesGuestStayScale(4),
  },
  cascadesGuestStayBadgeIcon: {
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayBadgeLabel: {
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(11),
    fontWeight: '600',
  },
  cascadesGuestStayDescription: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    lineHeight: cascadesGuestStayScale(19.5),
    marginTop: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayFooter: {
    alignItems: 'center',
    borderTopColor: 'rgba(250, 191, 20, 0.08)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: cascadesGuestStayVerticalScale(12),
    paddingTop: cascadesGuestStayVerticalScale(10),
  },
  cascadesGuestStayTime: {
    color: cascadesGuestStayColors.label,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
});
