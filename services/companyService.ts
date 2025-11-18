import type { Company } from '../types';

export const fetchCompanies = (): Promise<Company[]> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(async () => {
      try {
        // Simulate a potential API failure
        if (Math.random() > 0.95) {
          throw new Error('Simulated API error: Failed to fetch data from the server.');
        }

        const response = await fetch('./data/companies.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        resolve(data as Company[]);
      } catch (error) {
        console.error("Error fetching companies:", error);
        reject(error);
      }
    }, 1000);
  });
};
