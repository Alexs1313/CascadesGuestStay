import React from 'react';
import {StyleSheet, View} from 'react-native';
import {cascadesGuestStayColors} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayScale} from '../../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayStatusTimelineProps = {
  progressStep: number;
  totalSteps?: number;
};

export function CascadesGuestStayStatusTimeline({
  progressStep,
  totalSteps = 4,
}: CascadesGuestStayStatusTimelineProps) {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      {Array.from({length: totalSteps}).map((_, index) => {
        const step = index + 1;
        const isActive = step <= progressStep;
        const isLast = index === totalSteps - 1;

        return (
          <View key={index} style={styles.cascadesGuestStayStepWrap}>
            <View
              style={[
                styles.cascadesGuestStayDot,
                isActive
                  ? styles.cascadesGuestStayDotActive
                  : styles.cascadesGuestStayDotInactive,
              ]}
            />
            {!isLast && (
              <View
                style={[
                  styles.cascadesGuestStayLine,
                  isActive && step < progressStep
                    ? styles.cascadesGuestStayLineActive
                    : styles.cascadesGuestStayLineInactive,
                ]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cascadesGuestStayStepWrap: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cascadesGuestStayDot: {
    borderRadius: cascadesGuestStayScale(100),
    height: cascadesGuestStayScale(8),
    width: cascadesGuestStayScale(8),
  },
  cascadesGuestStayDotActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayDotInactive: {
    backgroundColor: cascadesGuestStayColors.timelineInactive,
  },
  cascadesGuestStayLine: {
    height: 1,
    width: cascadesGuestStayScale(12),
  },
  cascadesGuestStayLineActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayLineInactive: {
    backgroundColor: cascadesGuestStayColors.timelineInactive,
  },
});
