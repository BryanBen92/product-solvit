
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { getCategories, getMaxPrice } from '../data/products';
import { Star } from 'lucide-react';

interface FilterPanelProps {
  selectedCategories: string[];
  priceRange: [number, number];
  minRating: number;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onMinRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategories,
  priceRange,
  minRating,
  onCategoryChange,
  onPriceRangeChange,
  onMinRatingChange,
  onClearFilters
}) => {
  const categories = getCategories();
  const maxPrice = getMaxPrice();
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(priceRange);

  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [0, value[0]];
    setLocalPriceRange(newRange);
    onPriceRangeChange(newRange);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="ml-2 text-sm font-medium leading-none cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[localPriceRange[1]]}
            max={maxPrice}
            step={1}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>$0</span>
            <span>${localPriceRange[1].toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Minimum Rating</h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant={minRating === rating ? "default" : "outline"}
              size="sm"
              onClick={() => onMinRatingChange(rating)}
              className="flex gap-1 items-center"
            >
              {rating} <Star className="h-3 w-3" fill={minRating >= rating ? "currentColor" : "none"} />
            </Button>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full mt-4"
        onClick={onClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default FilterPanel;
