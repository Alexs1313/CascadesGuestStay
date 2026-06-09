import {ImageSourcePropType} from 'react-native';

export type CascadesGuestStayDiningCategory =
  | 'breakfast'
  | 'lunch'
  | 'dinner';

export type CascadesGuestStayMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  prepTimeMin: number;
  image: ImageSourcePropType;
  category: CascadesGuestStayDiningCategory;
};

export const CASCADES_GUEST_STAY_DINING_CATEGORIES: {
  key: CascadesGuestStayDiningCategory;
  label: string;
}[] = [
  {key: 'breakfast', label: 'Breakfast'},
  {key: 'lunch', label: 'Lunch'},
  {key: 'dinner', label: 'Dinner'},
];

export const CASCADES_GUEST_STAY_DINING_MENU: CascadesGuestStayMenuItem[] = [
  {
    id: 'classic-canadian-breakfast',
    name: 'Classic Canadian Breakfast',
    description:
      'A hearty breakfast featuring two farm-fresh eggs cooked to your preference, crispy smoked bacon, golden breakfast potatoes, buttered toast, and a side of seasonal fresh fruit.',
    price: 18,
    prepTimeMin: 20,
    image: require('../../../CascadesGuestStayAssets/ClassicCanadianBreakfast.png'),
    category: 'breakfast',
  },
  {
    id: 'smoked-salmon-bagel',
    name: 'Smoked Salmon Bagel',
    description:
      'Freshly baked bagel topped with premium smoked salmon, whipped cream cheese, capers, red onions, and fresh dill for a light yet satisfying morning meal.',
    price: 17,
    prepTimeMin: 15,
    image: require('../../../CascadesGuestStayAssets/SmokedSalmonBagel.png'),
    category: 'breakfast',
  },
  {
    id: 'blueberry-pancake-stack',
    name: 'Blueberry Pancake Stack',
    description:
      'Three fluffy pancakes served warm with Canadian maple syrup, fresh blueberries, whipped butter, and a light dusting of powdered sugar.',
    price: 15,
    prepTimeMin: 18,
    image: require('../../../CascadesGuestStayAssets/BlueberryPancakeStack.png'),
    category: 'breakfast',
  },
  {
    id: 'avocado-breakfast-toast',
    name: 'Avocado Breakfast Toast',
    description:
      'Toasted artisan bread layered with smashed avocado, poached eggs, cherry tomatoes, microgreens, and a touch of lemon seasoning.',
    price: 16,
    prepTimeMin: 15,
    image: require('../../../CascadesGuestStayAssets/AvocadoBreakfastToast.png'),
    category: 'breakfast',
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    description:
      'A warm flour tortilla packed with scrambled eggs, sausage, cheddar cheese, peppers, onions, and house-made salsa for a flavorful start to the day.',
    price: 17,
    prepTimeMin: 20,
    image: require('../../../CascadesGuestStayAssets/BreakfastBurrito.png'),
    category: 'breakfast',
  },
  {
    id: 'cascades-signature-burger',
    name: 'Cascades Signature Burger',
    description:
      'Juicy Angus beef burger topped with aged cheddar, lettuce, tomato, caramelized onions, and house sauce, served with crispy golden fries.',
    price: 24,
    prepTimeMin: 25,
    image: require('../../../CascadesGuestStayAssets/CascadesSignatureBurger.png'),
    category: 'lunch',
  },
  {
    id: 'grilled-chicken-caesar-salad',
    name: 'Grilled Chicken Caesar Salad',
    description:
      'Fresh romaine lettuce tossed in creamy Caesar dressing with grilled chicken breast, parmesan cheese, garlic croutons, and cracked black pepper.',
    price: 21,
    prepTimeMin: 18,
    image: require('../../../CascadesGuestStayAssets/GrilledChickenCaesarSalad.png'),
    category: 'lunch',
  },
  {
    id: 'pacific-salmon-bowl',
    name: 'Pacific Salmon Bowl',
    description:
      'Grilled Pacific salmon served over steamed rice with seasonal vegetables, avocado, and a refreshing citrus glaze.',
    price: 27,
    prepTimeMin: 25,
    image: require('../../../CascadesGuestStayAssets/PacificSalmonBowl.png'),
    category: 'lunch',
  },
  {
    id: 'steak-sandwich',
    name: 'Steak Sandwich',
    description:
      'Tender slices of sirloin steak served on toasted artisan bread with sautéed onions, garlic aioli, and a side of seasoned fries.',
    price: 23,
    prepTimeMin: 22,
    image: require('../../../CascadesGuestStayAssets/SteakSandwich.png'),
    category: 'lunch',
  },
  {
    id: 'margherita-flatbread',
    name: 'Margherita Flatbread',
    description:
      'Stone-baked flatbread topped with vine-ripened tomatoes, fresh mozzarella cheese, basil leaves, and extra virgin olive oil.',
    price: 19,
    prepTimeMin: 18,
    image: require('../../../CascadesGuestStayAssets/MargheritaFlatbread.png'),
    category: 'lunch',
  },
  {
    id: 'premium-ribeye-steak',
    name: 'Premium Ribeye Steak',
    description:
      'Hand-cut ribeye steak grilled to perfection and served with roasted seasonal vegetables, creamy mashed potatoes, and herb butter.',
    price: 42,
    prepTimeMin: 35,
    image: require('../../../CascadesGuestStayAssets/PremiumRibeyeSteak.png'),
    category: 'dinner',
  },
  {
    id: 'atlantic-lobster-tail',
    name: 'Atlantic Lobster Tail',
    description:
      'Oven-roasted Atlantic lobster tail brushed with garlic herb butter and accompanied by seasonal vegetables and lemon wedges.',
    price: 48,
    prepTimeMin: 40,
    image: require('../../../CascadesGuestStayAssets/AtlanticLobsterTail.png'),
    category: 'dinner',
  },
  {
    id: 'herb-crusted-salmon',
    name: 'Herb Crusted Salmon',
    description:
      'Fresh salmon fillet coated with aromatic herbs and baked until tender, served with wild rice and seasonal vegetables.',
    price: 34,
    prepTimeMin: 30,
    image: require('../../../CascadesGuestStayAssets/HerbCrustedSalmon.png'),
    category: 'dinner',
  },
  {
    id: 'chicken-supreme',
    name: 'Chicken Supreme',
    description:
      'Roasted chicken breast topped with a rich mushroom cream sauce, accompanied by roasted vegetables and herb-seasoned potatoes.',
    price: 29,
    prepTimeMin: 28,
    image: require('../../../CascadesGuestStayAssets/ChickenSupreme.png'),
    category: 'dinner',
  },
  {
    id: 'truffle-mushroom-pasta',
    name: 'Truffle Mushroom Pasta',
    description:
      'Fresh pasta tossed in a creamy truffle sauce with sautéed mushrooms, parmesan cheese, and aromatic herbs.',
    price: 28,
    prepTimeMin: 25,
    image: require('../../../CascadesGuestStayAssets/TruffleMushroomPasta.png'),
    category: 'dinner',
  },
];
