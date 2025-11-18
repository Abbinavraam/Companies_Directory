
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Company } from './types';
import { fetchCompanies } from './services/companyService';
import CompanyCard from './components/CompanyCard';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import { SortOrder } from './types';

const ITEMS_PER_PAGE = 9;

const App: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  
  const industries = useMemo(() => {
    const allIndustries = companies.map(c => c.industry);
    return ['All Industries', ...Array.from(new Set(allIndustries))];
  }, [companies]);

  const locations = useMemo(() => {
    const allLocations = companies.map(c => c.location);
    return ['All Locations', ...Array.from(new Set(allLocations))];
  }, [companies]);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCompanies();
        setCompanies(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch companies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadCompanies();
  }, []);

  const filteredAndSortedCompanies = useMemo(() => {
    let result = companies;

    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (industryFilter && industryFilter !== 'All Industries') {
      result = result.filter(company => company.industry === industryFilter);
    }
    if (locationFilter && locationFilter !== 'All Locations') {
      result = result.filter(company => company.location === locationFilter);
    }

    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return result;
  }, [companies, searchTerm, industryFilter, locationFilter, sortOrder]);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedCompanies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedCompanies, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedCompanies.length / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const handleFilterChange = useCallback(() => {
      setCurrentPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setIndustryFilter('');
    setLocationFilter('');
    setSortOrder('asc');
    setCurrentPage(1);
  }, []);


  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Companies Directory
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            industryFilter={industryFilter}
            setIndustryFilter={setIndustryFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            industries={industries}
            locations={locations}
            onFilterChange={handleFilterChange}
            resetFilters={resetFilters}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-pulse">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-5"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        ) : paginatedCompanies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                />
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400 text-xl">No companies found matching your criteria.</p>
          </div>
        )}
      </main>
       <footer className="bg-white dark:bg-gray-800 mt-8 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Companies Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
