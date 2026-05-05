import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

// Mock data replicating the projects seen in the video
const portfolioData = [
  {
    id: 1,
    title: "Selby's",
    location: "Redwood City, California, United States",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200",
    size: "large",
  },
  {
    id: 2,
    title: "La Connessa",
    location: "San Francisco, California, United States",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    size: "large",
  },
  {
    id: 3,
    title: "Augustine",
    location: "San Jose, California, United States",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 4,
    title: "Magic Donuts",
    location: "San Francisco, California, United States",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 5,
    title: "Louie's Original",
    location: "San Francisco, California, United States",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 6,
    title: "Old Navy Flagship - Times Square",
    location: "New York, NY, United States",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 7,
    title: "Gap Flagship - Times Square",
    location: "New York, NY, United States",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 8,
    title: "Athleta Flagship - Fillmore",
    location: "San Francisco, California, United States",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 9,
    title: "Gap Flagship - Ginza",
    location: "Ginza, Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 10,
    title: "Old Navy Prototype",
    location: "Walnut Creek, California, United States",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
  {
    id: 11,
    title: "Janie and Jack Prototype",
    location: "Sherman Oaks, CA, United States",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    size: "normal",
  },
];

/**
 * PortfolioGrid Component
 * Replicates the "Selected Works" section from Left Coast Design Studio.
 * Designed to be dropped into any existing page.
 */
export const PortfolioGrid = () => {
  return (
    <section className="w-full bg-inherit py-12 md:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#1A1A1A] leading-[0.9]">
            Selected Works
          </h2>
          
          {/* Filter UI */}
          <div className="flex items-center">
            <button className="group flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-2.5 hover:border-gray-400 hover:shadow-sm transition-all duration-300">
              <div className="flex items-center gap-2 text-gray-500 group-hover:text-black transition-colors">
                <SlidersHorizontal size={14} strokeWidth={2.5} />
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Filter</span>
              </div>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                <span className="text-sm font-semibold text-black">All 15</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </div>
            </button>
          </div>
        </div>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-20">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${
                project.size === 'large' 
                  ? 'md:col-span-6' 
                  : 'md:col-span-4'
              }`}
            >
              {/* Image with hover effect */}
              <div 
                className={`relative overflow-hidden rounded-2xl bg-gray-50 mb-5 ${
                  project.size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                />
              </div>

              {/* Metadata */}
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-base md:text-lg font-medium text-[#1A1A1A] tracking-tight">
                  {project.title}
                </h3>
                <span className="text-[13px] text-gray-500 text-right font-normal">
                  {project.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default export for easy usage in App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Example of "another component" above this one */}
      

      {/* The Requested Component */}
      <PortfolioGrid />

      {/* Example of content below */}
      <footer className="h-[20vh] bg-[#1A1A1A] flex items-center justify-center">
        <p className="text-gray-500">Footer content...</p>
      </footer>
    </div>
  );
}