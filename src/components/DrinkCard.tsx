
import { Drink } from '../types/drink';

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'boozy':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'non-boozy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'sweet':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'sour':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'medium':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{drink.title}</h3>

        {/* Ingredients */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Ingredients:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {drink.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {drink.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)} transition-colors`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
