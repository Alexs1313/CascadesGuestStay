import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  ClimateMode,
  FanSpeed,
} from '../data/climate';
import {DINING_MENU} from '../data/dining';
import {
  GuestRequest,
  RequestCategory,
  INITIAL_REQUESTS,
  getCategoryItem,
} from '../data/requests';

export type CartLine = {
  itemId: string;
  quantity: number;
};

type AppContextValue = {
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  climateTemperature: number;
  climateMode: ClimateMode;
  climateFanSpeed: FanSpeed;
  climateSaved: boolean;
  setClimateTemperature: (value: number) => void;
  setClimateMode: (mode: ClimateMode) => void;
  setClimateFanSpeed: (speed: FanSpeed) => void;
  applyClimateSettings: () => void;
  requests: GuestRequest[];
  submitRequest: (
    category: RequestCategory,
    description: string,
  ) => void;
  savedVenueIds: string[];
  toggleSavedVenue: (venueId: string) => void;
  isVenueSaved: (venueId: string) => boolean;
};

const AppContext =
  createContext<AppContextValue | null>(null);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [climateTemperature, setClimateTemperature] = useState(22);
  const [climateMode, setClimateMode] =
    useState<ClimateMode>('cool');
  const [climateFanSpeed, setClimateFanSpeed] =
    useState<FanSpeed>('medium');
  const [climateSaved, setClimateSaved] = useState(false);
  const [requests, setRequests] = useState<GuestRequest[]>(
    INITIAL_REQUESTS,
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
    (category: RequestCategory, description: string) => {
      const categoryItem = getCategoryItem(category);
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
        const item = DINING_MENU.find(
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
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      'useApp must be used within AppProvider',
    );
  }
  return context;
}

export function useClimateSummary() {
  const {climateTemperature, climateMode} = useApp();
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
