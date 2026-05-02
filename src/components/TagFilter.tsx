
interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagFilter = ({ tags, selectedTags, onTagToggle }: TagFilterProps) => {
  const getTagColor = (tag: string, isSelected: boolean) => {
    const baseColors = {
      'boozy': isSelected ? 'bg-red-500 text-white border-red-500' : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
      'non-boozy': isSelected ? 'bg-green-500 text-white border-green-500' : 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100',
      'sweet': isSelected ? 'bg-pink-500 text-white border-pink-500' : 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100',
      'sour': isSelected ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100',
      'medium': isSelected ? 'bg-blue-500 text-white border-blue-500' : 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
      'non-alcoholic': isSelected ? 'bg-orange-500 text-white border-orange-500' : 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
    };
    
    return baseColors[tag as keyof typeof baseColors] || 
           (isSelected ? 'bg-gray-500 text-white border-gray-500' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by taste:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${getTagColor(tag, selectedTags.includes(tag))}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
