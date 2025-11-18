
import React from 'react';
import type { Company } from '../types';
import { Briefcase, MapPin } from './icons/Icons';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col overflow-hidden h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{company.name}</h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <Briefcase className="w-4 h-4 mr-2 flex-shrink-0"/>
            <p className="text-sm font-medium">{company.industry}</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {company.description}
        </p>
      </div>
       <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 mt-auto">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <p className="text-sm font-semibold">{company.location}</p>
            </div>
        </div>
    </div>
  );
};

export default CompanyCard;
