
import { Drink } from '../types/drink';

export const drinks: Drink[] = [
  {
    id: 1,
    title: "Classic Mojito",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop",
    ingredients: [
      "White rum",
      "Fresh lime juice",
      "Sugar",
      "Fresh mint leaves",
      "Soda water",
      "Ice"
    ],
    tags: ["boozy", "sour", "medium"]
  },
  {
    id: 2,
    title: "Virgin Piña Colada",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    ingredients: [
      "Pineapple juice",
      "Coconut cream",
      "Crushed ice",
      "Pineapple wedge",
      "Maraschino cherry"
    ],
    tags: ["non-boozy", "sweet"]
  },
  {
    id: 3,
    title: "Whiskey Sour",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
    ingredients: [
      "Bourbon whiskey",
      "Fresh lemon juice",
      "Simple syrup",
      "Egg white",
      "Angostura bitters"
    ],
    tags: ["boozy", "sour"]
  },
  {
    id: 4,
    title: "Strawberry Lemonade",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    ingredients: [
      "Fresh strawberries",
      "Fresh lemon juice",
      "Sugar",
      "Water",
      "Ice",
      "Mint leaves"
    ],
    tags: ["non-boozy", "sweet", "sour"]
  },
  {
    id: 5,
    title: "Old Fashioned",
    image: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=400&h=300&fit=crop",
    ingredients: [
      "Bourbon whiskey",
      "Sugar cube",
      "Angostura bitters",
      "Orange peel",
      "Ice"
    ],
    tags: ["boozy", "medium"]
  },
  {
    id: 6,
    title: "Tropical Punch",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    ingredients: [
      "Pineapple juice",
      "Orange juice",
      "Cranberry juice",
      "Ginger ale",
      "Fresh fruit",
      "Ice"
    ],
    tags: ["non-boozy", "sweet", "medium"]
  },
  {
    id: 7,
    title: "Margarita",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
    ingredients: [
      "Tequila",
      "Triple sec",
      "Fresh lime juice",
      "Salt rim",
      "Ice",
      "Lime wheel"
    ],
    tags: ["boozy", "sour", "medium"]
  },
  {
    id: 8,
    title: "Iced Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    ingredients: [
      "Cold brew coffee",
      "Milk or cream",
      "Simple syrup",
      "Ice",
      "Whipped cream (optional)"
    ],
    tags: ["non-boozy", "medium"]
  }
];
