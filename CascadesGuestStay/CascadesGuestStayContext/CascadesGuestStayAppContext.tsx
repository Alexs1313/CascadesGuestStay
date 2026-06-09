import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  CascadesGuestStayClimateMode,
  CascadesGuestStayFanSpeed,
} from '../CascadesGuestStayConstants/CascadesGuestStayClimate/CascadesGuestStayClimateData/CascadesGuestStayClimateData';
import {CASCADES_GUEST_STAY_DINING_MENU} from '../CascadesGuestStayConstants/CascadesGuestStayDining/CascadesGuestStayDiningMenu/CascadesGuestStayDiningMenu';
import {
  CascadesGuestStayGuestRequest,
  CascadesGuestStayRequestCategory,
  CASCADES_GUEST_STAY_INITIAL_REQUESTS,
  cascadesGuestStayGetCategoryItem,
} from '../CascadesGuestStayConstants/CascadesGuestStayRequests/CascadesGuestStayRequestsData/CascadesGuestStayRequestsData';

export type CascadesGuestStayCartLine = {
  itemId: string;
  quantity: number;
};

type CascadesGuestStayAppContextValue = {
  cart: CascadesGuestStayCartLine[];
  cartCount: number;
  cartTotal: number;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  climateTemperature: number;
  climateMode: CascadesGuestStayClimateMode;
  climateFanSpeed: CascadesGuestStayFanSpeed;
  climateSaved: boolean;
  setClimateTemperature: (value: number) => void;
  setClimateMode: (mode: CascadesGuestStayClimateMode) => void;
  setClimateFanSpeed: (speed: CascadesGuestStayFanSpeed) => void;
  applyClimateSettings: () => void;
  requests: CascadesGuestStayGuestRequest[];
  submitRequest: (
    category: CascadesGuestStayRequestCategory,
    description: string,
  ) => void;
  savedVenueIds: string[];
  toggleSavedVenue: (venueId: string) => void;
  isVenueSaved: (venueId: string) => boolean;
};

const CascadesGuestStayAppContext =
  createContext<CascadesGuestStayAppContextValue | null>(null);

export function CascadesGuestStayAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CascadesGuestStayCartLine[]>([]);
  const [climateTemperature, setClimateTemperature] = useState(22);
  const [climateMode, setClimateMode] =
    useState<CascadesGuestStayClimateMode>('cool');
  const [climateFanSpeed, setClimateFanSpeed] =
    useState<CascadesGuestStayFanSpeed>('medium');
  const [climateSaved, setClimateSaved] = useState(false);
  const [requests, setRequests] = useState<CascadesGuestStayGuestRequest[]>(
    CASCADES_GUEST_STAY_INITIAL_REQUESTS,
  );
  const [nextRequestNumber, setNextRequestNumber] = useState(48);
  const [savedVenueIds, setSavedVenueIds] = useState<string[]>([]);

  const toggleSavedVenue = useCallback((venueId: string) => {
    setSavedVenueIds(prev =>
      prev.includes(venueId)
        ? prev.filter(id => id !== venueId)
        : [...prev, venueId],
    );
  }, []);

  const isVenueSaved = useCallback(
    (venueId: string) => savedVenueIds.includes(venueId),
    [savedVenueIds],
  );

  const addToCart = useCallback((itemId: string) => {
    setCart(prev => {
      const existing = prev.find(line => line.itemId === itemId);
      if (existing) {
        return prev.map(line =>
          line.itemId === itemId
            ? {...line, quantity: line.quantity + 1}
            : line,
        );
      }
      return [...prev, {itemId, quantity: 1}];
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prev => {
      const existing = prev.find(line => line.itemId === itemId);
      if (!existing) {
        return prev;
      }
      if (existing.quantity <= 1) {
        return prev.filter(line => line.itemId !== itemId);
      }
      return prev.map(line =>
        line.itemId === itemId
          ? {...line, quantity: line.quantity - 1}
          : line,
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const applyClimateSettings = useCallback(() => {
    setClimateSaved(true);
    setTimeout(() => setClimateSaved(false), 2500);
  }, []);

  const submitRequest = useCallback(
    (category: CascadesGuestStayRequestCategory, description: string) => {
      const categoryItem = cascadesGuestStayGetCategoryItem(category);
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;

      setRequests(prev => [
        {
          id: `req-${nextRequestNumber}`,
          requestId: `REQ-${nextRequestNumber.toString().padStart(4, '0')}`,
          category,
          title: categoryItem.label,
          icon: categoryItem.icon,
          description,
          status: 'submitted',
          submittedAt: `Submitted at ${displayHours}:${minutes} ${period}`,
          progressStep: 1,
        },
        ...prev,
      ]);
      setNextRequestNumber(prev => prev + 1);
    },
    [nextRequestNumber],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce((sum, line) => {
        const item = CASCADES_GUEST_STAY_DINING_MENU.find(
          menuItem => menuItem.id === line.itemId,
        );
        return sum + (item?.price ?? 0) * line.quantity;
      }, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      clearCart,
      climateTemperature,
      climateMode,
      climateFanSpeed,
      climateSaved,
      setClimateTemperature,
      setClimateMode,
      setClimateFanSpeed,
      applyClimateSettings,
      requests,
      submitRequest,
      savedVenueIds,
      toggleSavedVenue,
      isVenueSaved,
    }),
    [
      cart,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      clearCart,
      climateTemperature,
      climateMode,
      climateFanSpeed,
      climateSaved,
      applyClimateSettings,
      requests,
      submitRequest,
      savedVenueIds,
      toggleSavedVenue,
      isVenueSaved,
    ],
  );

  return (
    <CascadesGuestStayAppContext.Provider value={value}>
      {children}
    </CascadesGuestStayAppContext.Provider>
  );
}

export function useCascadesGuestStayApp() {
  const context = useContext(CascadesGuestStayAppContext);
  if (!context) {
    throw new Error(
      'useCascadesGuestStayApp must be used within CascadesGuestStayAppProvider',
    );
  }
  return context;
}

export function useCascadesGuestStayClimateSummary() {
  const {climateTemperature, climateMode} = useCascadesGuestStayApp();
  const modeLabel =
    climateMode === 'cool'
      ? 'Cooling'
      : climateMode === 'heat'
        ? 'Heating'
        : climateMode === 'fan'
          ? 'Fan Only'
          : 'Sleep Mode';

  return `${climateTemperature}°C · ${modeLabel}`;
}
