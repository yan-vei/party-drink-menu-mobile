
import { useState } from 'react';
import { Search } from 'lucide-react';
import DrinkCard from '../components/DrinkCard';
import TagFilter from '../components/TagFilter';
import { drinks } from '../data/drinks';

const Index = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = ['sour', 'boozy', 'non-boozy', 'sweet', 'medium', 'non-alcoholic', 'mystery'];

  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         drink.ingredients.some(ingredient => 
                           ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => drink.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">🍹 Your Perfect Drinks Menu</h1>
          <p className="text orange-100 text-lg">Order your drink of choice <a href="https://forms.gle/a4r4ZG4muot4MSmk6">***here***</a></p>
          <p className="text-orange-100 text-lg">After tasting a drink, please rate it <a href="https://forms.gle/LEto6My7ftX5CqjXA">***here***</a></p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search drinks or ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-300 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Tag Filters */}
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        {filteredDrinks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No drinks found matching your criteria</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
