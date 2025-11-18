
import React from 'react';
import type { SortOrder } from '../types';
import { SearchIcon, SortAscIcon, SortDescIcon, ChevronDownIcon } from './icons/Icons';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  industryFilter: string;
  setIndustryFilter: (industry: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  industries: string[];
  locations: string[];
  onFilterChange: () => void;
  resetFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  industryFilter,
  setIndustryFilter,
  locationFilter,
  setLocationFilter,
  sortOrder,
  setSortOrder,
  industries,
  locations,
  onFilterChange,
  resetFilters
}) => {

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange();
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustryFilter(e.target.value);
    onFilterChange();
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationFilter(e.target.value);
    onFilterChange();
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    onFilterChange();
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Search Input */}
        <div className="relative">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
          <div className="relative">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <SearchIcon className="h-5 w-5 text-gray-400" />
             </span>
             <input
              type="text"
              id="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Industry Dropdown */}
        <div className="relative">
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industry</label>
          <div className="relative">
            <select
                id="industry"
                value={industryFilter}
                onChange={handleIndustryChange}
                className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                ))}
            </select>
            <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
           <div className="relative">
            <select
                id="location"
                value={locationFilter}
                onChange={handleLocationChange}
                className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                ))}
            </select>
             <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sort and Reset Buttons */}
        <div className="flex items-center space-x-2">
            <button
              onClick={handleSortChange}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              {sortOrder === 'asc' ? <SortAscIcon className="h-5 w-5 mr-2" /> : <SortDescIcon className="h-5 w-5 mr-2" />}
              Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
            </button>
            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Reset
            </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
