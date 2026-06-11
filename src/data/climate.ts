export type ClimateMode =
  | 'cool'
  | 'heat'
  | 'fan'
  | 'sleep';

export type FanSpeed = 'low' | 'medium' | 'high';

export const CLIMATE_MIN_TEMP = 16;
export const CLIMATE_MAX_TEMP = 30;
export const CLIMATE_CURRENT_TEMP = 21;
export const CLIMATE_FEELS_LIKE = 20;

export const CLIMATE_MODES: {
  key: ClimateMode;
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

export const FAN_SPEEDS: FanSpeed[] = [
  'low',
  'medium',
  'high',
];

export function climateModeLabel(
  mode: ClimateMode,
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
