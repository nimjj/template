import React from 'react';
import type { Charity } from '../types';
import { Clock } from 'lucide-react'; // Optional: Add a clock icon if you want

interface CharityCardProps {
  data: Charity;
  onNavigate?: () => void;
}

export const CharityCard: React.FC<CharityCardProps> = ({ data, onNavigate }) => {
  // --- LOGIC: PROGRESS ---
  const rawPercentage = (data.raised / data.goal) * 100;
  const percentage = Math.min(100, Math.max(0, Math.round(rawPercentage)));

  // --- LOGIC: TIME AGO CALCULATOR ---
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const uploadDate = new Date(dateString);
    const diffInMs = now.getTime() - uploadDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 1) return "Today";
    if (diffInDays < 30) return `${diffInDays} Days Ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} Months Ago`;
    return `${Math.floor(diffInDays / 365)} Years Ago`;
  };

  return (
    <div className="min-w-[320px] max-w-[350px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex-shrink-0 snap-center flex flex-col">
      
      {/* IMAGE SECTION (Category Badge Removed) */}
      <div className="relative h-48">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
          {data.title}
        </h3>

        {/* Dynamic Time Ago */}
        <div className="flex items-center text-gray-400 text-xs mb-4 font-medium uppercase tracking-wider">
           {/* If you installed lucide-react, you can use <Clock size={14} className="mr-1"/> here */}
           <span>{getTimeAgo(data.uploadDate)}</span>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm line-clamp-3">
            {data.description}
          </p>
          <button 
            onClick={onNavigate}
            className="text-[#A0407B] text-sm font-semibold hover:underline mt-1"
          >
            Read More
          </button>
        </div>

        {/* Progress & Stats */}
        <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
                <div 
                  className="relative w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: `conic-gradient(#16a34a ${percentage}%, #f3f4f6 ${percentage}% 100%)` }}
                >
                    <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-800">{percentage}%</span>
                    </div>
                </div>

                <div className="text-right">
                    <div className="flex flex-col">
                        <span className="text-green-600 font-bold text-sm">
                            Raised: LKR {data.raised.toLocaleString()}
                        </span>
                        <span className="text-gray-900 font-bold text-sm">
                            Goal: LKR {data.goal.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            <button 
              className="w-full bg-[#A0407B] hover:bg-[#8d366b] text-white font-bold py-3 rounded-lg transition duration-200"
              onClick={onNavigate}
            >
              View
            </button>
        </div>
      </div>
    </div>
  );
};