export type CascadesGuestStayRequestStatus =
  | 'submitted'
  | 'in_progress'
  | 'accepted'
  | 'completed';

export type CascadesGuestStayRequestCategory =
  | 'housekeeping'
  | 'linen'
  | 'room_service'
  | 'maintenance'
  | 'amenities'
  | 'room_comfort'
  | 'concierge';

export type CascadesGuestStayRequestCategoryItem = {
  key: CascadesGuestStayRequestCategory;
  label: string;
  icon: string;
};

export type CascadesGuestStayGuestRequest = {
  id: string;
  requestId: string;
  category: CascadesGuestStayRequestCategory;
  title: string;
  icon: string;
  description: string;
  status: CascadesGuestStayRequestStatus;
  submittedAt: string;
  progressStep: number;
};

export const CASCADES_GUEST_STAY_REQUEST_CATEGORIES: CascadesGuestStayRequestCategoryItem[] =
  [
    {key: 'housekeeping', label: 'Housekeeping', icon: '🛏️'},
    {key: 'linen', label: 'Linen & Towels', icon: '🧺'},
    {key: 'room_service', label: 'Room Service', icon: '🍽️'},
    {key: 'maintenance', label: 'Maintenance', icon: '🔧'},
    {key: 'amenities', label: 'Amenities', icon: '🧴'},
    {key: 'room_comfort', label: 'Room Comfort', icon: '🌡️'},
    {key: 'concierge', label: 'Concierge', icon: '🚪'},
  ];

export const CASCADES_GUEST_STAY_INITIAL_REQUESTS: CascadesGuestStayGuestRequest[] =
  [
    {
      id: 'req-0042',
      requestId: 'REQ-0042',
      category: 'linen',
      title: 'Linen & Towels',
      icon: '🧺',
      description: 'Additional bath towels and robes for two guests',
      status: 'in_progress',
      submittedAt: 'Submitted at 2:15 PM',
      progressStep: 3,
    },
    {
      id: 'req-0043',
      requestId: 'REQ-0043',
      category: 'maintenance',
      title: 'Maintenance',
      icon: '🔧',
      description: 'TV remote is not responding',
      status: 'accepted',
      submittedAt: 'Submitted at 3:40 PM',
      progressStep: 2,
    },
    {
      id: 'req-0041',
      requestId: 'REQ-0041',
      category: 'housekeeping',
      title: 'Housekeeping',
      icon: '🛏️',
      description: 'Please make up room and replace toiletries',
      status: 'completed',
      submittedAt: 'Submitted at 10:30 AM',
      progressStep: 4,
    },
  ];

export function cascadesGuestStayGetCategoryItem(
  key: CascadesGuestStayRequestCategory,
): CascadesGuestStayRequestCategoryItem {
  return (
    CASCADES_GUEST_STAY_REQUEST_CATEGORIES.find(item => item.key === key) ??
    CASCADES_GUEST_STAY_REQUEST_CATEGORIES[0]
  );
}

export function cascadesGuestStayGetStatusLabel(
  status: CascadesGuestStayRequestStatus,
): string {
  switch (status) {
    case 'submitted':
      return 'Submitted';
    case 'in_progress':
      return 'In Progress';
    case 'accepted':
      return 'Accepted';
    case 'completed':
      return 'Completed';
  }
}
