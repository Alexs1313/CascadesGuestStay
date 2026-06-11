import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/theme';


type StatusTimelineProps = {
  progressStep: number;
  totalSteps?: number;
};

export function StatusTimeline({
  progressStep,
  totalSteps = 4,
}: StatusTimelineProps) {
  return (
    <View style={styles.StatusTimelineFacetChassis}>
      {Array.from({length: totalSteps}).map((_, index) => {
        const step = index + 1;
        const isActive = step <= progressStep;
        const isLast = index === totalSteps - 1;

        return (
          <View key={index} style={styles.StatusTimelineStepCardMantle}>
            <View
              style={[
                styles.StatusTimelineDot,
                isActive
                  ? styles.StatusTimelineDotActive
                  : styles.StatusTimelineDotInactive,
              ]}
            />
            {!isLast && (
              <View
                style={[
                  styles.StatusTimelineLine,
                  isActive && step < progressStep
                    ? styles.StatusTimelineLineActive
                    : styles.StatusTimelineLineInactive,
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

StatusTimelineFacetChassis: {
  alignItems: 'center',
  flexDirection: 'row',
},
StatusTimelineStepCardMantle: {
  alignItems: 'center',
  flexDirection: 'row',
},
StatusTimelineDot: {
  borderRadius: 100,
  height: 8,
  width: 8,
},
StatusTimelineDotActive: {
  backgroundColor: colors.gold,
},
StatusTimelineDotInactive: {
  backgroundColor: colors.timelineInactive,
},
StatusTimelineLine: {
  height: 1,
  width: 12,
},
StatusTimelineLineActive: {
  backgroundColor: colors.gold,
},
StatusTimelineLineInactive: {
  backgroundColor: colors.timelineInactive,
},
});
