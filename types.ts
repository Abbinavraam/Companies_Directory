
export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
  location: string;
  description: string;
}

export type SortOrder = 'asc' | 'desc';
