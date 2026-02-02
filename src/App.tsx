import type { Charity } from './types';
import { CharityCarousel } from './components/CharityCarousel';

// Import your local images
import gkidsImg from './assets/gkids.jpg';
import bannerImg from './assets/banner.jpg';
import kids1Img from './assets/kids1.jpg';

// Helper to get a dynamic date (Today)
// In the real app, this date comes from the database.
const today = new Date().toISOString(); 

const templateCharities: Charity[] = [
  {
    id: '1',
    image: gkidsImg, 
    title: "A Grand Celebration of Dreams: The 'Pirunu Kusak Pirunu Hisak' Scholarship Ceremony!",
    description: 'Educational Scholarship Programmes. A Grand Celebration of Dreams...', 
    raised: 0, 
    goal: 100000,
    uploadDate: today, // Dynamic: Sets to current time
  },
  {
    id: '2',
    image: bannerImg,
    title: "A Whirlwind of Hope: 53 Scholarships Granted and More to Come!",
    description: 'Educational Scholarship Programmes. Touching the Untouched, Reaching the Unreached...', 
    raised: 53000, 
    goal: 100000,
    uploadDate: today,
  },
  {
    id: '3',
    image: kids1Img,
    title: "Piku Pihi Grade Five Scholarship 2025 – Dreams Taking Flight",
    description: 'Educational Scholarship Programmes Stories. Piku Pihi Grade Five Scholarship 2025...', 
    raised: 14000, 
    goal: 100000,
    uploadDate: today,
  },
];

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Campaign Template
      </h1>
      <CharityCarousel charities={templateCharities} />
    </div>
  );
}

export default App;