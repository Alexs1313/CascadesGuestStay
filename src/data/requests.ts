export type RequestStatus =
  | 'submitted'
  | 'in_progress'
  | 'accepted'
  | 'completed';

export type RequestCategory =
  | 'housekeeping'
  | 'linen'
  | 'room_service'
  | 'maintenance'
  | 'amenities'
  | 'room_comfort'
  | 'concierge';

export type RequestCategoryItem = {
  key: RequestCategory;
  label: string;
  icon: string;
};

export type GuestRequest = {
  id: string;
  requestId: string;
  category: RequestCategory;
  title: string;
  icon: string;
  description: string;
  status: RequestStatus;
  submittedAt: string;
  progressStep: number;
};

export const REQUEST_CATEGORIES: RequestCategoryItem[] =
  [
    {key: 'housekeeping', label: 'Housekeeping', icon: '🛏️'},
    {key: 'linen', label: 'Linen & Towels', icon: '🧺'},
    {key: 'room_service', label: 'Room Service', icon: '🍽️'},
    {key: 'maintenance', label: 'Maintenance', icon: '🔧'},
    {key: 'amenities', label: 'Amenities', icon: '🧴'},
    {key: 'room_comfort', label: 'Room Comfort', icon: '🌡️'},
    {key: 'concierge', label: 'Concierge', icon: '🚪'},
  ];

export const INITIAL_REQUESTS: GuestRequest[] =
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

export function getCategoryItem(
  key: RequestCategory,
): RequestCategoryItem {
  return (
    REQUEST_CATEGORIES.find(item => item.key === key) ??
    REQUEST_CATEGORIES[0]
  );
}

export function getStatusLabel(
  status: RequestStatus,
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
