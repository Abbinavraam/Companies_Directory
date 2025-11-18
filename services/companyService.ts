import type { Company } from '../types';
import companiesData from '../data/companies.json';

export const fetchCompanies = (): Promise<Company[]> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        // Simulate a potential API failure
        if (Math.random() > 0.95) {
          throw new Error('Simulated API error: Failed to fetch data from the server.');
        }

        const data = companiesData as Company[];
        resolve(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
        reject(error);
      }
    }, 1000);
  });
};
