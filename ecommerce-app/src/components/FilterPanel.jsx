export default function FilterPanel({ 
    categories, 
    selectedCategories, 
    setSelectedCategories,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    resetFilters
  }) {
    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(c => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };
  
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categories</h3>
          {categories.map(category => (
            <div key={category} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        
        {/* Price Range Slider */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between mt-1">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>
        
        {/* Rating Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Minimum Rating</h3>
          <select 
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            <option value="0">All Ratings</option>
            <option value="1">1+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        
        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Clear Filters
        </button>
      </div>
    );
  }