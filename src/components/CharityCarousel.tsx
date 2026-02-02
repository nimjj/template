import React, { useRef } from 'react';
import { CharityCard } from './CharityCard';
import type { Charity } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you use lucide-react for icons, or use any SVG

interface CharityCarouselProps {
  charities: Charity[];
}

export const CharityCarousel: React.FC<CharityCarouselProps> = ({ charities }) => {
  // This ref gives us a direct "handle" to the HTML element that scrolls
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approx width of one card + margin
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      
      {/* Left Arrow Button */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} color="#555" />
      </button>

      {/* The Scrollable Area */}
      {/* 'overflow-x-auto' allows scrolling. 'snap-x' makes it lock into place cleanly. */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-8"
        style={{ scrollbarWidth: 'none' }} // Hides scrollbar in Firefox
      >
        {charities.map((charity) => (
          <CharityCard key={charity.id} data={charity} />
        ))}
      </div>

      {/* Right Arrow Button */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} color="#555" />
      </button>
    </div>
  );
};