export type CascadesGuestStayClimateMode =
  | 'cool'
  | 'heat'
  | 'fan'
  | 'sleep';

export type CascadesGuestStayFanSpeed = 'low' | 'medium' | 'high';

export const CASCADES_GUEST_STAY_CLIMATE_MIN_TEMP = 16;
export const CASCADES_GUEST_STAY_CLIMATE_MAX_TEMP = 30;
export const CASCADES_GUEST_STAY_CLIMATE_CURRENT_TEMP = 21;
export const CASCADES_GUEST_STAY_CLIMATE_FEELS_LIKE = 20;

export const CASCADES_GUEST_STAY_CLIMATE_MODES: {
  key: CascadesGuestStayClimateMode;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    key: 'cool',
    label: 'Cooling',
    description: 'Cool air circulation',
    icon: '❄️',
  },
  {
    key: 'heat',
    label: 'Heating',
    description: 'Warm air circulation',
    icon: '🔥',
  },
  {
    key: 'fan',
    label: 'Fan Only',
    description: 'Ventilation only',
    icon: '💨',
  },
  {
    key: 'sleep',
    label: 'Sleep Mode',
    description: 'Quiet auto-balance',
    icon: '🌙',
  },
];

export const CASCADES_GUEST_STAY_FAN_SPEEDS: CascadesGuestStayFanSpeed[] = [
  'low',
  'medium',
  'high',
];

export function cascadesGuestStayClimateModeLabel(
  mode: CascadesGuestStayClimateMode,
): string {
  switch (mode) {
    case 'cool':
      return 'Cool';
    case 'heat':
      return 'Heat';
    case 'fan':
      return 'Fan';
    case 'sleep':
      return 'Sleep';
  }
}
